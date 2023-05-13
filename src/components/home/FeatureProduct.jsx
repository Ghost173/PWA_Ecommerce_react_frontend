import React, { Component } from 'react'
import { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import axios from 'axios'
import AppUrl from '../../api/AppUrl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadinAnimation from '../../validation/LoadinAnimation';



class featureProduct extends Component {

    constructor() {
        super();
        this.state = {
            FeatureProducts: [],
            loaderDiv: "",
            mainDiv: "d-none",
            retries: 0,
        }
    }


    fetchData = () => {
        axios
            .get(AppUrl.FeatureProducts)
            .then((response) => {
                let statuscode = response.status;
                if (statuscode == 200) {
                    this.setState({
                        FeatureProducts: response.data,
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
        if (this.state.retries === 0) {
            // Display the error message only if it's the first retry
            toast.error(
                "It looks like there was a problem retrieving the Feature Products. Please contact support if the problem persists"
            );
        }
        setTimeout(() => {
            this.setState({
                retries: this.state.retries + 1, // Increment the retries count
            });
            this.fetchData(); // Retry the request
        }, 3000);
    };

    componentDidMount() {
        // const fetchFeatureProducts = () => {
        //     axios.get(AppUrl.FeatureProducts)
        //         .then(response => {
        //             const statuscode = response.status;
        //             if (statuscode === 200) {
        //                 this.setState({
        //                     FeatureProducts: response.data,
        //                     loaderDiv: "d-none",
        //                     mainDiv: "",
        //                 });
        //             } else {
        //                 throw new Error("Something went wrong");
        //             }
        //         })
        //         .catch(error => {
        //             if (this.state.FeatureProducts.length === 0) {
        //                 // If the first request fails, show the error message
        //                 toast.error("It looks like there was a problem retrieving the Feature Products. Please contact support if the problem persists");
        //             }
        //             // Wait for 5 seconds before making another request
        //             setTimeout(fetchFeatureProducts, 5000);
        //         });
        // };

        this.fetchData();
    }

    render() {
        const featureproductslist = this.state.FeatureProducts;


        const data = featureproductslist.map((featureproductslist, i) => {

            if (featureproductslist.discount_price === 'na') {
                return <Col className="p-1" key={i.toString} xl={2} lg={2} md={2} sm={4} xs={6}>
                    <Link to="/productdetails">
                        < Card className='image-box card'>
                            <Card.Body>
                                <img className="center" alt="foo" src={featureproductslist.product_image} />
                            </Card.Body>
                            <p className='product-name-on-card'>{featureproductslist.product_title}</p>
                            <p className='product-price-on-card'>Rs: {featureproductslist.product_price}</p>
                        </Card>
                    </Link>
                </Col>
            } else {
                return <Col className="p-1" key={i.toString} xl={2} lg={2} md={2} sm={4} xs={6}>
                    <Link to="/productdetails">
                        < Card className='image-box card'>
                            <Card.Body>
                                <img className="center" alt="foo" src={featureproductslist.product_image} />
                            </Card.Body>
                            <p className='product-name-on-card'>{featureproductslist.product_title}</p>
                            <p className='product-price-on-card'>Rs: <strike>{featureproductslist.product_price}</strike> {featureproductslist.discount_price}</p>
                        </Card>
                    </Link>
                </Col>
            }
        });


        return (
            <Fragment>
                <Container className="text-center" fluid={true}>
                    <div className="section-title text-center mb-55">
                        <h2>Feature Products</h2>
                        <p>Some of Our Exclusive Collection, You May like!</p>

                    </div>
                    <div className={this.state.loaderDiv}>
                        <LoadinAnimation />
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

export default featureProduct
