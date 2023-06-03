import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import axios from 'axios';
import AppUrl from '../../api/AppUrl';
import { Navigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

export class Authuserorders extends Component {

    constructor() {
        super();
        this.state = {
            UserDetails: [],
            AuthUserOrderDetails: [],
            loaderDiv: "",
            mainDiv: "d-none"
        }

    }

    componentDidMount() {
        const token = localStorage.getItem('token');

        if (!token) {
            // Use your preferred method for redirecting to the login page
            window.location.href = '/login';
            return null; // Render nothing
        }

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

    render() {
        const token = localStorage.getItem('token');

        // Redirect to login if token is not present
        if (!token) {
            // Use your preferred method for redirecting to the login page
            return <Navigate to={'/login'} />
        }

        const Myorder = this.state.AuthUserOrderDetails;
        const data = Myorder.map((Myorder, i) => {
            return <Col className="p-1" lg={12} md={12} sm={12} xs={12}  >
                <Card className='shadow' key={i.toString}>
                    <Card.Body>
                        <Row>

                            <Col md={2} lg={2} sm={6} xs={6}>
                                <img className="cart-product-img" src={Myorder.product_image} />
                            </Col>

                            <Col md={4} lg={4} sm={6} xs={6}>
                                <h5 className="product-name">{Myorder.product_name}</h5>
                                <h6> Quantity = {Myorder.product_quantity} </h6>
                                <p>Size:{Myorder.product_size} | Color:{Myorder.product_color}</p>
                                <h6>Price = {Myorder.product_quantity} x {Myorder.product_unit_price} = {Myorder.product_total_price}LKR</h6>
                            </Col>

                            <Col md={1} lg={1} sm={12} xs={12}>
                                <p>Address :{Myorder.customer_address}</p>
                            </Col>

                            <Col md={1} lg={1} sm={12} xs={12}>
                                <Badge bg="primary">{Myorder.order_status}</Badge>
                            </Col>

                            <Col md={1} lg={1} sm={12} xs={12}>
                            <p>Payment  :{Myorder.payment_method}</p>
                            </Col>

                            <Col md={1} lg={1} sm={12} xs={12}>
                            <p>Order Date  :{Myorder.order_date}</p>

                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        })
        return (
            <Fragment>
                <Container>
                    {data}
                </Container>
            </Fragment>
        )
    }
}

export default Authuserorders
