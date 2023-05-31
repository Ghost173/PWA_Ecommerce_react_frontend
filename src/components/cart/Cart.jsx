import React, { Component, Fragment } from 'react'
import { Navbar, Container, Row, Col, Button, Card } from 'react-bootstrap';
import Product1 from '../../assets/images/product/product1.png'
import Product2 from '../../assets/images/product/product2.png'
import Product3 from '../../assets/images/product/product3.png'
import Product4 from '../../assets/images/product/product4.png'
import axios from 'axios';
import AppUrl from '../../api/AppUrl';
import { ToastContainer, toast } from 'react-toastify';


class Cart extends Component {

    constructor() {
        super();
        this.state = {
            loaderDiv: "",
            mainDiv: "d-none",
            CatrtData:[],
            UserDetails:[],
            retries: 0,
        }
    }


    async componentDidMount () {
        const token = localStorage.getItem('token');
        if (!token) {
            // Use your preferred method for redirecting to the login page
            window.location.href = '/login';
            return null; // Render nothing
        }

        if(token) {
            axios.get(AppUrl.UserData, {
                headers: {
                    Authorization: `Bearer ${token}` // Include the token in the Authorization header
                }
            }).then(response => {
                this.setState({ UserDetails: response.data })
                this.fetchData();
            }).catch(error => {
                toast.error("Unable to validate your session please login and try again" );
                localStorage.removeItem('token');
            })
        }

        
    }


    fetchData = () => {
        const token = localStorage.getItem('token');
        let id = this.state.UserDetails.id;

        if (!token) {
            // Use your preferred method for redirecting to the login page
            window.location.href = '/login';
            return null; // Render nothing
        }

        axios.get(AppUrl.GetCartDetails(id))
            .then(response => {
                this.setState({ CatrtData: response.data })
            }).catch(error => {
                this.handleFetchError();
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


    checkuser = () => {
        const token = localStorage.getItem('token');

        if (!token) {
            // Use your preferred method for redirecting to the login page
            window.location.href = '/login';
            return null; // Render nothing
        }

        if(token) {
            axios.get(AppUrl.UserData, {
                headers: {
                    Authorization: `Bearer ${token}` // Include the token in the Authorization header
                }
            }).then(response => {
                this.setState({ UserDetails: response.data })
            }).catch(error => {
                toast.error("Unable to validate your session please login and try again" );
                localStorage.removeItem('token');
            })
        }
        
    }

    render() {
        return (
            <Fragment>
                <Container>

                    <div className="section-title text-center mb-55"><h2>Product Cart List</h2>
                    </div>

                    <Row>
                        <Col className="p-1" lg={12} md={12} sm={12} xs={12} >
                            <Card >
                                <Card.Body>
                                    <Row>
                                        <Col md={3} lg={3} sm={6} xs={6}>
                                            <img className="cart-product-img" src={Product1} />
                                        </Col>

                                        <Col md={6} lg={6} sm={6} xs={6}>
                                            <h5 className="product-name">ASUS TUF A15 FA506IU Ryzen 7 4800H GTX</h5>
                                            <h6> Quantity = 05 </h6>
                                            <h6>Price = 05 x 100 = 5000$</h6>
                                        </Col>

                                        <Col md={3} lg={3} sm={12} xs={12}>
                                            <input placeholder="2" className="form-control text-center" type="number" />
                                            <Button className="btn btn-block w-100 mt-3  site-btn"><i className="fa fa-trash-alt"></i> Remove </Button>

                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className="p-1" lg={12} md={12} sm={12} xs={12} >
                            <Card >
                                <Card.Body>
                                    <Row>
                                        <Col md={3} lg={3} sm={6} xs={6}>
                                            <img className="cart-product-img" src={Product2} />
                                        </Col>

                                        <Col md={6} lg={6} sm={6} xs={6}>
                                            <h5 className="product-name">ASUS TUF A15 FA506IU Ryzen 7 4800H GTX</h5>
                                            <h6> Quantity = 05 </h6>
                                            <h6>Price = 05 x 100 = 5000$</h6>
                                        </Col>

                                        <Col md={3} lg={3} sm={12} xs={12}>
                                            <input placeholder="2" className="form-control text-center" type="number" />
                                            <Button className="btn btn-block w-100 mt-3  site-btn"><i className="fa fa-trash-alt"></i> Remove </Button>

                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className="p-1" lg={12} md={12} sm={12} xs={12} >
                            <Card >
                                <Card.Body>
                                    <Row>
                                        <Col md={3} lg={3} sm={6} xs={6}>
                                            <img className="cart-product-img" src={Product3} />
                                        </Col>

                                        <Col md={6} lg={6} sm={6} xs={6}>
                                            <h5 className="product-name">ASUS TUF A15 FA506IU Ryzen 7 4800H GTX</h5>
                                            <h6> Quantity = 05 </h6>
                                            <h6>Price = 05 x 100 = 5000$</h6>
                                        </Col>

                                        <Col md={3} lg={3} sm={12} xs={12}>
                                            <input placeholder="2" className="form-control text-center" type="number" />
                                            <Button className="btn btn-block w-100 mt-3  site-btn"><i className="fa fa-trash-alt"></i> Remove </Button>

                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className="p-1" lg={12} md={12} sm={12} xs={12} >
                            <Card >
                                <Card.Body>
                                    <Row>
                                        <Col md={3} lg={3} sm={6} xs={6}>
                                            <img className="cart-product-img" src={Product4} />
                                        </Col>

                                        <Col md={6} lg={6} sm={6} xs={6}>
                                            <h5 className="product-name">ASUS TUF A15 FA506IU Ryzen 7 4800H GTX</h5>
                                            <h6> Quantity = 05 </h6>
                                            <h6>Price = 05 x 100 = 5000$</h6>
                                        </Col>

                                        <Col md={3} lg={3} sm={12} xs={12}>
                                            <input placeholder="2" className="form-control text-center" type="number" />
                                            <Button className="btn btn-block w-100 mt-3  site-btn"><i className="fa fa-trash-alt"></i> Remove </Button>

                                        </Col>

                                        <Col className="p-1" lg={12} md={12} sm={12} xs={12} >
                                            <Card >
                                                <Card.Body>
                                                    <Row>
                                                        <Col className='float-right' md={4} lg={4} sm={6} xs={6}>

                                                            <h5> Total Item = 05 </h5>
                                                            <h5>Total Price = 5000$</h5>
                                                            <Button className="btn btn-block w-100 mt-3  site-btn"><i className="fa fa-shopping-cart"></i> CheckOut </Button>
                                                        </Col>
                                                    </Row>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default Cart
