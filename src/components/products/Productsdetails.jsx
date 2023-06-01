import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import axios from 'axios'
import AppUrl from '../../api/AppUrl';
import { ToastContainer, toast } from 'react-toastify';
import withRouter from '../../withRouter'
import ReactDOM from 'react-dom'
import Badge from 'react-bootstrap/Badge';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import InnerImageZoom from 'react-inner-image-zoom';
import ReviewList from './ReviewList';


class Productsetails extends Component {


    constructor() {
        super();
        this.state = {
            product_id: [],
            product_details: [],
            product_list: [],
            category_name: "",
            Product_subcategoy: [],
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
            product_short_description: "",
            product_long_description: "",
            product_color: "",
            product_size: "",
            product_brand: "",
            retries: 0,
            previewImg: "0",

            //addtocard options
            isSize: null,
            isColor: null,
            color: "",
            size: "",
            qty: "",
            UserDetails:[],



        };
    }

    imageOnclick(event) {
        let imgSrc = event.target.getAttribute('src');
        let previewImg = document.getElementById('previewImg');
        ReactDOM.findDOMNode(previewImg).setAttribute('src', imgSrc)
    }


    fetchData = () => {
        let product_id = this.props.params.product_id;
        let token = localStorage.getItem('token');

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
                    console.log("fkcolor " + this.state.product_color)
                } else {

                    this.handleFetchError();
                }
            })
            .catch((error) => {
                this.handleFetchError();
            });

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
        let product_idget = this.props.params.product_id
        this.setState({ product_id: product_idget })
        this.fetchData();

    }

    componentDidUpdate(prevProps) {
        if (prevProps.params.product_id !== this.props.params.product_id) {
            this.fetchData();
            window.scrollTo(0, 0); // Scroll to the top of the page
        }
    }


    priceOptions(product_price, discount_price) {
        if (discount_price == 'na') {
            return (
                <p className='product-price-on-card_singleproducts'>LKR: {product_price}</p>
            )
        } else {
            return (
                <p className='product-price-on-card_singleproducts '>LKR {discount_price} <strike className="text-secondary" style={{ fontSize: '17px' }}>{product_price}</strike></p>

            )
        }
    }


    checkuser = () => {
        const token = localStorage.getItem('token');
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

    addToCart = () => {
        this.checkuser();
        let product_color = this.state.product_color;
        let product_size = this.state.product_size;
        let qty = this.state.qty;
        let product_id = this.state.product_id;
        let email = this.state.UserDetails.email;
        let user_id = this.state.UserDetails.id;
        let product_image = this.state.product_image;
        let product_title = this.state.product_title;

        let color = this.state.color;
        let size = this.state.size;

        if (product_color !== "na" && color.length === 0) {
            toast.error("Please select a color");
        } else if (product_size !== "na" && size.length === 0) {
            toast.error("Please select a size");
        } else if (qty.length === 0) {
            toast.error("please add a quantity  ");
        } else if (!localStorage.getItem('token')) {
            toast.warning("please a Login then only you can add products to cart");
        }

        else{
            let MyFormData =  new FormData();
            MyFormData.append("product_id",product_id);
            MyFormData.append("user_id",user_id);
            MyFormData.append("image",product_image);
            MyFormData.append("email",email);
            MyFormData.append("product_name",product_title);
            MyFormData.append("product_size",size);
            MyFormData.append("product_color",color);
            MyFormData.append("product_quantity",qty);

            axios.post(AppUrl.UserAddToCart, MyFormData)
            .then(response => {
              toast.success("Product added to cart successfully", {
                onClose: () => {
                    window.location.reload(); // Refresh the page after the toast is closed
                  }
              });
            })
            .catch(error => {
              if (error.response && error.response.status === 400) {
                toast.error(error.response.data.error, 
                {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
              } else {
                console.log(error);
                toast.error("Unable to contact app server, please try again later");
              }
            });
        }
        

        

    }

    // end add to cart

    // colorOnChange = (e) => {
    //     let color = event.target.value
    //     this.setState ({color: color})
    // }

    render() {
        let product_idget = this.props.params.product_id

        var color = this.state.product_color

        var ColorDiv = "d-none"
        if (color == "na") {
            ColorDiv = "d-none"
        } else {
            let colorArray = color.split(',');
            var ColorOption = colorArray.map((colorList, i) => {
                return <option value={colorList}>{colorList}</option>
            })
            ColorDiv = ""
        }

        var size = this.state.product_size
        var sizeDiv = "d-none"
        if (size == 'na') {
            sizeDiv = "d-none"
        } else {
            let sizeArry = size.split(',')
            var sizeOption = sizeArry.map((sizelist, i) => {
                return <option value={sizelist}>{sizelist}</option>
            })
            sizeDiv = ""
        }



        //addtocart 
        if (this.state.isSize === null) {
            if (size !== 'na') {
                this.setState({ isSize: "Yes" })
                console.log("sixe " + size)
            } else {
                this.setState({ isSize: "No" })
            }
        }

        if (this.state.isColor === null) {
            if (color !== 'na') {
                this.setState({ isColor: "YES" })
               
                console.log("we have a color")
            } else {
                this.setState({ isColor: "No" })
                console.log("we have a 00000 color")
            }
        }

        return (


            <Fragment>
                <Container fluid={true} className="BetweenTwoSection">
                    <Row className="p-2">
                        <Col className="shadow-sm bg-white pb-3 mt-4" md={12} lg={12} sm={12} xs={12}>
                            <Row>
                                <Col className="p-3" md={6} lg={6} sm={12} xs={12}>
                                    <img className="w-100 bigimage" src={this.state.product_image} id='previewImg' />
                                    {/* <div className=''>
                                    <InnerImageZoom zoomScale={1.8} zoomType={"hover"} src={this.state.product_image} zoomSrc={this.state.product_image} />
                                    </div> */}
                                    {/* */}


                                    <Container className="my-3">
                                        <Row>
                                            <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                                                <img onClick={this.imageOnclick} className="w-100 smallimage product-sm-img" src={this.state.image_one} />
                                            </Col>
                                            <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                                                <img onClick={this.imageOnclick} className="w-100 smallimage product-sm-img" src={this.state.image_two} />
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
                                    <div>
                                        <Row>
                                            <Col md={8}>
                                                <h5 className="Product-Name">{this.state.product_title}</h5>
                                                <span className="text-success"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </span>
                                            </Col>
                                            {/* <Col md={4}>
                                        <Badge className='mb-2' bg="secondary">New</Badge>
                                        </Col> */}
                                        </Row>

                                    </div>

                                    {this.priceOptions(this.state.product_price, this.state.discount_price)}


                                    <div className={ColorDiv}>
                                        <h6 className="mt-2">Choose Color <span className='text-danger'>*</span></h6>
                                        <select onChange={(e) => { this.setState({ color: e.target.value }) }} className='form-control form-select'>
                                            <option disabled selected>--- Choose Color ---</option>
                                            {ColorOption}
                                        </select>
                                    </div>


                                    <div className={sizeDiv}>
                                        <h6 className="mt-2">Choose size <span className='text-danger'>*</span></h6>
                                        <select onChange={(e) => { this.setState({ size: e.target.value }) }} className='form-control form-select'>
                                            <option disabled selected>--- Choose Size ---</option>
                                            {sizeOption}
                                        </select>
                                    </div>

                                    <br></br>

                                    <h6 className="mt-2">Quantity <span className='text-danger'>*</span></h6>
                                    <input onChange={(e) => { this.setState({ qty: e.target.value }) }} className="form-control text-center w-50" type="number" />

                                    <div className="input-group mt-3">
                                        <button onClick={this.addToCart} className="btn site-btn m-1 "> <i className="fa fa-shopping-cart"></i>  Add To Cart</button>
                                        <button className="btn btn-primary m-1"> <i className="fa fa-car"></i> Order Now</button>
                                        {/* <button className="btn btn-primary m-1"> <i className="fa fa-heart"></i> Favourite</button> */}
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

                                <ReviewList product_id={product_idget} />


                            </Row>

                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default withRouter(Productsetails)
