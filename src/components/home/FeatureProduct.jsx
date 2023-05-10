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
            mainDiv: "d-none"
        }
    }

    componentDidMount() {
        axios.get(AppUrl.FeatureProducts).then(response => {
            let statuscode = response.status;
            if (statuscode == 200) {
                this.setState({ FeatureProducts: response.data, loaderDiv: "d-none", mainDiv: "" })
            } else {
                toast.error("Something went wrong please try agin later")
            }
        }).catch(error => {
            toast.error("It looks like there was a problem retrieving the Feature Products. Please contact support if the problem persists")
        })
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
                            <p className='product-price-on-card'>Rs {featureproductslist.product_price}</p>
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
