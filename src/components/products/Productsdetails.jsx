import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import axios from 'axios'
import AppUrl from '../../api/AppUrl';
import { ToastContainer, toast } from 'react-toastify';
import withRouter from '../../withRouter'
import ReactDOM from 'react-dom'

class Productsetails extends Component {


    constructor() {
        super();
        this.state = {
            product_id: [],
            product_details:[],
            product_list:[],
            category_name:"",
            Product_subcategoy:[],
            product_image: "",
            product_price: "",
            discount_price: "",
            product_star: "",
            product_code: "",
            product_qty: "",
            image_one: "",
            image_two: "",
            image_three: "",
            image_four: "",
            product_short_description:"",
            product_long_description:"",
            product_color: "",
            product_size: "",
            product_brand:"",
            retries: 0,
        };
    }

    imageOnclick(event) {
        let imgSrc = event.target.getAttribute('src');
        let previewImg = document.getElementById('previewImg');
        ReactDOM.findDOMNode(previewImg).setAttribute('src',imgSrc)
    }

    fetchData = () => {
        let product_id = this.props.params.product_id
        axios
            .get(AppUrl.SingleProductDetails(product_id))
            .then((response) => {
                let statuscode = response.status;
                if (statuscode == 200) {
                    this.setState({
                        product_title: response.data.product_list.product_title,
                        product_price: response.data.product_list.product_price,
                        discount_price: response.data.product_list.discount_price,
                        product_image: response.data.product_list.product_image,
                        product_star: response.data.product_list.product_star,
                        product_code: response.data.product_list.product_code,
                        product_qty: response.data.product_list.product_qty,
                        product_brand: response.data.product_list.product_brand,
                        image_one: response.data.product_details.image_one,
                        image_two: response.data.product_details.image_two,
                        image_three: response.data.product_details.image_three,
                        image_four: response.data.product_details.image_four,
                        product_short_description: response.data.product_details.product_short_description,
                        product_long_description: response.data.product_details.product_long_description,
                        product_color: response.data.product_details.product_color,
                        product_size: response.data.product_details.product_size,
                        category_name: response.data.catgeory_name[0].category_name,
                        Product_subcategoy: response.data.Product_subcategoy[0].subcategory_name,
                        loaderDiv: "d-none",
                        mainDiv: "",
                        retries: 0, // Reset the retries count when the request succeeds
                    });
                } else {

                     this.handleFetchError();
                }
            })
            .catch((error) => {
                 this.handleFetchError();
            });
    };

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
                "It looks like there was a problem retrieving the Products"
            );
        }
    };

    componentDidMount() {
        let product_id = this.props.params.product_id
        this.setState({ product_id: product_id })
        this.fetchData();
       
    }

    componentDidUpdate(prevProps) {
        if (prevProps.params.product_id !== this.props.params.product_id) {
          this.fetchData();
          window.scrollTo(0, 0); // Scroll to the top of the page
        }
      }
    

    render() {
        return (
            <Fragment>
                <Container fluid={true} className="BetweenTwoSection">
                    <Row className="p-2">
                        <Col className="shadow-sm bg-white pb-3 mt-4" md={12} lg={12} sm={12} xs={12}>
                            <Row>
                                <Col className="p-3" md={6} lg={6} sm={12} xs={12}>
                                    <img className="w-100 bigimage" src={this.state.product_image} id='previewImg'/>
                                    <Container className="my-3">
                                        <Row>
                                            <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                                                <img onClick={this.imageOnclick} className="w-100 smallimage product-sm-img" src={this.state.image_one} />
                                            </Col>
                                            <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                                                <img  onClick={this.imageOnclick} className="w-100 smallimage product-sm-img" src={this.state.image_two} />
                                            </Col>
                                            <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                                                <img onClick={this.imageOnclick} className="w-100 smallimage product-sm-img" src={this.state.image_three} />
                                            </Col>
                                            <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                                                <img onClick={this.imageOnclick} className="w-100 smallimage product-sm-img" src={this.state.image_four} />
                                            </Col>
                                        </Row>
                                    </Container>
                                </Col>
                                <Col className="p-3 " md={6} lg={6} sm={12} xs={12}>
                                    <h5 className="Product-Name">{this.state.product_title}</h5>
                                    <h6 className="section-sub-title">{this.state.product_short_description}</h6>
                                    <div className="input-group">
                                        <div className="Product-price-card d-inline ">{this.state.product_price}</div>
                                        <div className="Product-price-card d-inline ">{this.state.discount_price}</div>
                                        <div className="Product-price-card d-inline ">{this.state.category_name}</div>
                                    </div>
                                    <h6 className="mt-2">Product Category: {this.state.category_name}</h6>
                                    <h6 className="mt-2">Product SubCategory:  {this.state.Product_subcategoy}</h6>
                                    <h6 className="mt-2">Product Brand:  {this.state.product_brand}</h6>
                                    <h6 className="mt-2">Total Qty: {this.state.product_qty}</h6>
                                    <h6 className="mt-2">Colors: {this.state.product_color}</h6>

<br></br>
                                    <h6 className="mt-2">Choose Color</h6>
                                    <div className="input-group">
                                        <div className="form-check mx-1">
                                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                            <label className="form-check-label" htmlFor="exampleRadios1" >Black</label>
                                        </div>
                                    </div>

                                    <h6 className="mt-2">Choose Size</h6>
                                    <div className="input-group">
                                        <div className="form-check mx-1">
                                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                            <label className="form-check-label" htmlFor="exampleRadios1">X</label>
                                        </div>
                                    </div>

                                    <h6 className="mt-2">Quantity</h6>
                                    <input className="form-control text-center w-50" type="number" />

                                    <div className="input-group mt-3">
                                        <button className="btn site-btn m-1 "> <i className="fa fa-shopping-cart"></i>  Add To Cart</button>
                                        {/* <button className="btn btn-primary m-1"> <i className="fa fa-car"></i> Order Now</button> */}
                                        <button className="btn btn-primary m-1"> <i className="fa fa-heart"></i> Favourite</button>
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col className="" md={6} lg={6} sm={12} xs={12}>
                                    <h6 className="mt-2">DETAILS</h6>
                                    <p>
                                        {this.state.product_long_description}
                                    </p>
                                </Col>

                                <Col className="" md={6} lg={6} sm={12} xs={12}>
                                    <h6 className="mt-2">REVIEWS</h6>
                                    <p className=" p-0 m-0"><span className="Review-Title">Kazi Ariyan</span> <span className="text-success"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </span> </p>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>

                                    <p className=" p-0 m-0"><span className="Review-Title">Kazi Ariyan</span> <span className="text-success"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </span> </p>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>

                                    <p className=" p-0 m-0"><span className="Review-Title">Kazi Ariyan</span> <span className="text-success"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </span> </p>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>

                                </Col>
                            </Row>

                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default withRouter(Productsetails)
