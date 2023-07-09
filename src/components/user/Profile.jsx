import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Button, Card, Form, Modal } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import { formatDistanceToNow } from 'date-fns';
import Rating from '@mui/material/Rating';
import axios from 'axios';
import AppUrl from '../../api/AppUrl';
import { Navigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import ListGroup from 'react-bootstrap/ListGroup';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Link } from 'react-router-dom';

export class Profile extends Component {

    constructor() {
        super();
        this.state = {
            UserDetails: [],
            AuthUserOrderDetails: [],
            loaderDiv: "",
            mainDiv: "d-none",
            product_name: "",
            orderid: "",
            show: false,
            reviewshow: false,
            review_product_name: "",
            review_product_orderid: "",
            ratingstart: "",
            review_comment: "",
            customer_cancel_reason:""

        }

    }

    componentDidMount() {

        // Redirect to login if token is not present

        const token = localStorage.getItem('token');

        if (!token) {
            // Use your preferred method for redirecting to the login page
            window.location.href = '/login';
            return null; // Render nothing
        }

        axios.get(AppUrl.UserData, {
            headers: {
                Authorization: `Bearer ${token}` // Include the token in the Authorization header
            }
        }).then(response => {
            this.setState({ UserDetails: response.data })
        }).catch(error => {
            localStorage.removeItem('token');
            window.location.href = '/login';
        })


        axios.get(AppUrl.AuthUserOrderDetails, {
            headers: {
                Authorization: `Bearer ${token}` // Include the token in the Authorization header
            }
        }).then(response => {
            this.setState({ AuthUserOrderDetails: response.data, loaderDiv: "d-none", mainDiv: "" })
        }).catch(error => {
            toast.error('fail to retrieve your orders')
        })



    }

    handleClose = () => {
        this.setState({ show: false })
    };
    handleShow = (event) => {
        this.setState({ show: true });
        let product_name = event.target.getAttribute("data-title")
        let orderid = event.target.getAttribute("data-orderid")
        this.setState({
            product_name: product_name,
            orderid: orderid,
        })

    }

    reviewhandleClose = () => {
        this.setState({ reviewshow: false })
    }

    reviewhandleShow = (event) => {
        this.setState({ reviewshow: true })
        let review_product_name = event.target.getAttribute("data-title")
        let review_product_orderid = event.target.getAttribute("data-orderid")
        this.setState({
            review_product_name: review_product_name,
            review_product_orderid: review_product_orderid,
        })

    }

    cancelorder = (e) =>{
        e.preventDefault();
        const data = {
            customer_cancel_reason: this.state.customer_cancel_reason,
            order_id: this.state.orderid
        }
        if (data.customer_cancel_reason.length === 0) {
            toast.error("please enter cancel reason");
        }
        let cancelorderbtn = document.getElementById('cancelorderbtn');
        cancelorderbtn.innerHTML = "Cancelling your order ...";
        cancelorderbtn.disabled = true; // Disable the button

        axios.post(AppUrl.RequestCancelOrder, data)
        .then(response => {
            toast.success("You have successfully request to cancel your order");
            this.handleClose();
            window.location.reload(); // Refresh the page after the toast is closed
        }).catch(error => {
            toast.error("Fail to submit ");
            this.handleClose();
            window.location.reload();
        }).finally(() => {
            cancelorderbtn.disabled = false; // Enable the button
        });

    }

    postReview = (e) => {
        e.preventDefault();
        const data = {
            reviewer_rating: this.state.ratingstart,
            reviewer_comments: this.state.review_comment,
            order_id: this.state.review_product_orderid
        }
        const token = localStorage.getItem('token');

        if (data.reviewer_rating.length === 0) {
            toast.error("please Select a start for ratings");
        }

        let submitBtn = document.getElementById('submitbtn');
        submitBtn.innerHTML = "Submitting reviews...";
        submitBtn.disabled = true; // Disable the button

        axios.post(AppUrl.SubmitReview, data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }).then(response => {
            toast.success("You have successfully submit your review ");
            this.reviewhandleClose();
            window.location.reload(); // Refresh the page after the toast is closed
        }).catch(error => {
            toast.error("Fail to submit ");

        }).finally(() => {
            submitBtn.disabled = false; // Enable the button
        });
    }

    render() {
        const token = localStorage.getItem('token');

        // Redirect to login if token is not present
        if (!token) {
            // Use your preferred method for redirecting to the login page
            return <Navigate to={'/login'} />
        }

        const { updated_at } = this.state.UserDetails;
        const updatedDate = new Date('2023-06-18 05:51:51');
        const lastLoginDate = formatDistanceToNow(updatedDate, { addSuffix: true });


        const Myorder = this.state.AuthUserOrderDetails;
        const data = Myorder.map((Myorder, i) => {

            // if (Myorder.review === "0") {
            return <Col className="p-1" lg={12} md={12} sm={12} xs={12}  >
                
                <Card className='shadow' key={i.toString}>
                <Card.Body>
                    <Row>

                        <Col md={2} lg={2} sm={6} xs={6}>
                        <Link className='text-link' to={"/singleproductdetails/"+ Myorder.product_id}>
                        <img className="cart-product-img" src={Myorder.product_image} />
                        </Link>
                           
                        </Col>

                        <Col md={6} lg={6} sm={6} xs={6}>
                            <h5 className="product-name">{Myorder.product_name}</h5>
                            <h6> Quantity = {Myorder.product_quantity} </h6>
                            <p>Size:{Myorder.product_size} | Color:{Myorder.product_color}</p>
                            <h6>Price = {Myorder.product_quantity} x {Myorder.product_unit_price} = {Myorder.product_total_price}LKR</h6>
                        </Col>
                        <Col md={2} lg={2} sm={12} xs={12}>
                            <Badge bg="primary">{Myorder.order_status}</Badge>
                        </Col>

                        <Col md={2} lg={2} sm={12} xs={12}>
                            <Row>
                                {Myorder.review === "0" && (
                                    <Button
                                        onClick={this.reviewhandleShow}
                                        data-title={Myorder.product_name}
                                        data-orderid={Myorder.order_id}
                                        className="btn mt-2 mx-1 btn-sm shadow"
                                        variant="success"
                                    >
                                        Write review
                                    </Button>
                                )}

                                {/* {Myorder.review === "1" && (
                                    <Badge bg="warning">Review submitted</Badge>
                                )} */}

                                {Myorder.customer_cancel_request === '0' && (

                                    <Button className="btn mt-2 mx-1 btn-sm " variant="danger" onClick={this.handleShow} data-title={Myorder.product_name}
                                        data-orderid={Myorder.order_id}> Cancel Order </Button>
                                )}



                            </Row>
                        </Col>
                    </Row>

                </Card.Body>
                {Myorder.customer_cancel_request === 1 && (
                    <Card.Footer className=" text-danger">Cancellation Request Received</Card.Footer>
                )}

            </Card>
               
                
            </Col>
        })

        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col md={4} sm={12}>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">User Details</h5>
                                    <ul className="list-group">
                                        <li className="list-group-item">Name:  {this.state.UserDetails.name} </li>
                                        <li className="list-group-item">Email:  {this.state.UserDetails.email}</li>
                                        <li className="list-group-item">Last Login:  {lastLoginDate}</li>
                                    </ul>

                                </div>
                            </div>

                            <Card style={{ width: '18rem' }}>
                                <Card.Header>Orders</Card.Header>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Pending Orders</ListGroup.Item>
                                    <ListGroup.Item>To be Received Orders</ListGroup.Item>
                                    <ListGroup.Item>Complete Orders</ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </Col>

                        <Col md={8} sm={12}>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Order Details</h5>
                                    {data}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>




                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <h6> Cancel Your order</h6>
                    </Modal.Header>
                    <Modal.Body>
                        <h6>{this.state.product_name}</h6>
                        <p>
                            {this.state.orderid}
                        </p>
                        <hr style={{ borderTop: '1px solid red' }} />

                        <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                                    <label className="form-label">Cancel Reason <span className='text-danger'>*</span></label>
                                    <input onChange={(e) => { this.setState({ customer_cancel_reason: e.target.value }) }} 
                                    className="form-control"
                                     type="text" placeholder="Enter your cancel reason" />
                                </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" id='cancelorderbtn' type='submit' onClick={this.cancelorder}>
                           Cancel your order
                        </Button>
                    </Modal.Footer>
                </Modal>


                <Modal show={this.state.reviewshow} onHide={this.reviewhandleClose}>
                    <Modal.Header closeButton>
                        <h6 >Share Your Experience</h6>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="row">
                            <Form id='reviewform'>
                                <h6>Product Name: {this.state.review_product_name}</h6>
                                <h6>Order Id: {this.state.review_product_orderid}</h6>
                                <hr style={{ borderTop: '1px solid red' }} />

                                <Typography component="legend">Your Rating <span className='text-danger'>*</span></Typography>
                                <Rating
                                    onChange={(e) => { this.setState({ ratingstart: e.target.value }) }}
                                    name="size-large"
                                    size="large"
                                />

                                <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                                    <label className="form-label">Your Review </label>
                                    <input onChange={(e) => { this.setState({ review_comment: e.target.value }) }} className="form-control" type="text" placeholder="Enter your review" />
                                </div>
                            </Form>
                            <p style={{ fontSize: '12px', color: 'gray' }}>Your review helps others make informed decisions and allows us to improve our products and services. We appreciate your feedback!</p>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>

                        <Button variant="danger" onClick={this.reviewhandleClose} >
                            Close
                        </Button>
                        <Button variant="success" id='submitbtn' type='submit' onClick={this.postReview}>
                            Add Review
                        </Button>
                    </Modal.Footer>
                </Modal>

            </Fragment>
        )
    }
}

export default Profile
