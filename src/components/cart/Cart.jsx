import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import axios from 'axios';
import AppUrl from '../../api/AppUrl';
import { ToastContainer, toast } from 'react-toastify';


class Cart extends Component {

    constructor() {
        super();
        this.state = {
            loaderDiv: "",
            mainDiv: "d-none",
            CatrtData: [],
            UserDetails: [],
            retries: 0,
        }
    }


    componentDidMount() {
        const token = localStorage.getItem('token');
        if (!token) {
            // Use your preferred method for redirecting to the login page
            window.location.href = '/login';
            toast.error("please login to view this");
            return null; // Render nothing
        }

        if (token) {
            axios.get(AppUrl.UserData, {
                headers: {
                    Authorization: `Bearer ${token}` // Include the token in the Authorization header
                }
            }).then(response => {
                let statuscode = response.status;
                if (statuscode == 200) {
                    this.fetchData();
                } else {
                    toast.error("logout and try again");
                }
                
            }).catch(error => {
                toast.error("Something went Wrong");
                localStorage.removeItem('token');
            })
        }


    }


    fetchData = () => {
        const token = localStorage.getItem('token');
            axios.get(AppUrl.GetCartDetails, {
                headers: {
                    Authorization: `Bearer ${token}` // Include the token in the Authorization header
                }
            }).then(response => {
                this.setState({ CatrtData: response.data, loaderDiv: "d-none", mainDiv: "" })
            }).catch(error => {
                this.handleFetchError();
                toast.error("Something Went Wrong!!!!");
            })
    }

    handleFetchError = () => {
        const { retries } = this.state;
        if (this.state.retries === 0) {
            setTimeout(() => {
                this.setState({ retries: retries + 1 });
                this.fetchData();
            }, 60000)

        } else {
            // Subsequent retries after 1 minute
            setTimeout(() => {
                this.setState({ retries: retries + 1 });
                this.fetchData();
            }, 180000);
        }
        if (retries === 0) {
            toast.error(
                "It looks like there was a problem retrieving the data"
            );
        }
    };


    removeCartItems = (id) => {
        const token = localStorage.getItem('token');

        if (token) {
            axios.get(AppUrl.RemoveCartItem(id), {
                headers: {
                    Authorization: `Bearer ${token}` // Include the token in the Authorization header
                }
            }).then(response => {
               if(response.data ===1) {
                toast.success("Cart Item Remove", {
                    onClose: () => {
                        window.location.reload(); // Refresh the page after the toast is closed
                      }
                })
                window.location.reload(); // Refresh the page
               }else {

               }
            }).catch(error => {
                toast.error("Something Went Wrong!!!!");
                localStorage.removeItem('token');
            })
        }

    }



    render() {

        const MycartList = this.state.CatrtData;
        const data = MycartList.map((MycartList, i) => {


            return <Col key={i.toString} className="p-1" lg={12} md={12} sm={12} xs={12}  >
                <Card className='shadow'>
                    <Card.Body>
                        <Row>
                            <Col md={3} lg={3} sm={6} xs={6}>
                                <img className="cart-product-img" src={MycartList.image} />
                            </Col>

                            <Col md={6} lg={6} sm={6} xs={6}>
                                <h5 className="product-name">{MycartList.product_name}</h5>
                                <h6> Quantity = {MycartList.product_quantity} </h6>
                                <p>Size:{MycartList.product_size} | Color:{MycartList.product_color}</p>
                                <h6>Price = {MycartList.product_quantity} x {MycartList.unit_price} = {MycartList.total_price}LKR</h6>
                            </Col>

                            <Col md={3} lg={3} sm={12} xs={12}>
                                <Button onClick={() => this.removeCartItems(MycartList.id)} className="btn btn-block w-100 mt-3  site-btn"><i className="fa fa-trash-alt"></i> Remove </Button>

                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        })

        return (
            <Fragment>
                <Container>

                    <div className="section-title text-center mb-55"><h2>Product Cart List</h2>
                    </div>

                    <div className={this.state.loaderDiv}>
                        <div class="ph-item">
                            <div class="ph-col-12">
                                <div class="ph-row">
                                    <div class="ph-col-4"></div>
                                    <div class="ph-col-8 empty"></div>
                                    <div class="ph-col-6"></div>
                                    <div class="ph-col-6 empty"></div>
                                    <div class="ph-col-12"></div>
                                    <div class="ph-col-12"></div>
                                    <div class="ph-col-12"></div>
                                    <div class="ph-col-12"></div>
                                    <div class="ph-col-12"></div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className={this.state.mainDiv}>
                        <Row>
                            {data}
                        </Row>

                    </div>
                </Container>
            </Fragment>
        )
    }
}

export default Cart
