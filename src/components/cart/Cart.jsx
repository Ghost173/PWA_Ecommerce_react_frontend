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
                if (response.data === 1) {
                    toast.success("Cart Item Remove", {
                        onClose: () => {
                            window.location.reload(); // Refresh the page after the toast is closed
                        }
                    })
                    window.location.reload(); // Refresh the page
                } else {

                }
            }).catch(error => {
                toast.error("Something Went Wrong!!!!");
                localStorage.removeItem('token');
            })
        }

    }

    increaseitem = (id) => {
        const token = localStorage.getItem('token');
        axios.get(AppUrl.IncreaseCartItem(id), {
            headers: {
                Authorization: `Bearer ${token}` // Include the token in the Authorization header
            }
        }).then(response => {
            if (response.data === 1) {
                toast.success("Cart Item increase by One", {
                    onClose: () => {
                        window.location.reload(); // Refresh the page after the toast is closed
                    }
                })
            } else {
                toast.error("Fail tp update the cart item")
            }
        }).catch(error => {
            toast.error("Something Went Wrong!!!!");
        })
    }

    decreaseitem = (id) => {
        const token = localStorage.getItem('token');
        axios.get(AppUrl.DecreaseCartItem(id), {
            headers: {
                Authorization: `Bearer ${token}` // Include the token in the Authorization header
            }
        }).then(response => {
            if (response.data === 1) {
                toast.success("Cart Item decrease by One", {
                    onClose: () => {
                        window.location.reload(); // Refresh the page after the toast is closed
                    }
                })
            } else {
                toast.error("Fail tp update the cart item")
            }
        }).catch(error => {
            toast.error("Something Went Wrong!!!!");
        })
    }



    render() {

        const MycartList = this.state.CatrtData;
        let totalPrice =0;
        const data = MycartList.map((MycartList, i) => {
            totalPrice = totalPrice+parseInt(MycartList.total_price)

            return <Col className="p-1" lg={12} md={12} sm={12} xs={12}  >
                <Card className='shadow' key={i.toString}>
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

                                <Button onClick={() => this.increaseitem(MycartList.id)}
                                    className="btn mt-2 mx-1 btn-sm site-btn-cart-plus"><i className="fa fa-plus" title='increase item'></i> </Button>


                                <Button onClick={() => this.decreaseitem(MycartList.id)}
                                    className="btn mt-2 mx-1 btn-sm site-btn-cart-minus"><i className="fa fa-minus" title='decrease item'></i> </Button>

                                <Button onClick={() => this.removeCartItems(MycartList.id)}
                                    className="btn mt-2 mx-1 btn-sm site-btn-cart-delete"><i className="fa fa-trash-alt" title='Delete item'></i> </Button>

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


                            <Col className="p-1" lg={8} md={8} sm={12} xs={12} >
                                {data}
                            </Col>

                            <Col className="p-1" lg={4} md={4} sm={12} xs={12} >
                                <div className="card p-2 shadow">
                                    <div className="card-body">
                                        <div className="container-fluid ">
                                            <div className="row">
                                                <div className="col-md-12 p-1  col-lg-12 col-sm-12 col-12">
                                                    <h5 className="Product-Name text-danger">Total Amount: {totalPrice} LKR</h5>
                                                </div>
                                            </div>
                                            <div className="row">
                                            
                                                <p>Your name: {this.state.UserDetails.name}</p>
                                                <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                                                    <label className="form-label">Name  <span className='text-danger'>*</span></label>
                                                    <input className="form-control" type="text" placeholder="Enter receiver name" />
                                                </div>


                                                <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                                                    <label className="form-label">Phone Number  <span className='text-danger'>*</span></label>
                                                    <input className="form-control" type="text" placeholder="Enter receiver name" />
                                                </div>

                                                <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                                                    <label className="form-label">Delivery Address <span className='text-danger'>*</span></label>
                                                    <textarea rows={2} className="form-control" type="text" placeholder="" />
                                                </div>
                                                <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                                                    <label className="form-label">Choose Payment Method  <span className='text-danger'>*</span></label>
                                                    <select className="form-control">
                                                        <option value="Cash On Delivery">Cash On Delivery</option>
                                                        <option value="Cash On Delivery">Online payment (PayPal)</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                                                    <button className="btn site-btn">Confirm Order </button>
                                                </div>

                                               
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>

                    </div>
                </Container>
            </Fragment>
        )
    }
}

export default Cart
