import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import axios from 'axios'
import AppUrl from '../../api/AppUrl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';


class Purchase extends Component {
    constructor() {
        super();
        this.state = {
            purchase_guide: "",
            loaderDiv: "",
            mainDiv: "d-none"
        }
    }

    componentDidMount() {

        let Siteinfopurchase_guide = sessionStorage.getItem("allsiteinfo");
        if (Siteinfopurchase_guide == null) {
            axios.get(AppUrl.allsiteinfo).then(response => {
                let statuscode = response.status;
                if (statuscode == 200) {
                    let JsonData = (response.data)[0]['purchase_guide'];
                    this.setState({ purchase_guide: JsonData, loaderDiv: "d-none", mainDiv: "" })
                    sessionStorage.setItem("Siteinfopurchase_guide", JsonData)
                } else {
                    toast.error("Something went wrong please try agin later")
                }
            }).catch(error => {
                toast.error("Unable to retrieve Purchase data")
            })
        }


    }

    render() {
        return (
            <Fragment>
                <Container>
                    <Breadcrumb>
                        <Breadcrumb.Item > <Link to="/">Home </Link> </Breadcrumb.Item>
                        <Breadcrumb.Item > Purchase</Breadcrumb.Item>
                    </Breadcrumb>
                    <Row className="p-2">
                        <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
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
                                <h4 className="section-title-login">Purchase Page </h4>
                                <p className="section-title-contact">
                                    <strong>How To Purchase:</strong>
                                    <p>Follow these steps to make a purchase on our e-commerce application:</p>
                                    <ol>
                                        <li>Browse our product categories or use the search function to find the item you want to purchase.</li>
                                        <li>Click on the product to view more details, including price, description, and available options (e.g., size, color).</li>
                                        <li>Select the desired options, and click "Add to Cart" to add the item to your shopping cart.</li>
                                        <li>Review the items in your shopping cart, make any necessary changes, and click "Proceed to Checkout."</li>
                                        <li>Provide your billing and shipping information, or choose from previously saved addresses if applicable.</li>
                                        <li>Select your preferred payment method and enter the necessary details.</li>
                                        <li>Review your order summary and click "Place Order" to complete the purchase.</li>
                                        <li>Once your order is placed, you will receive an order confirmation email with the details of your purchase.</li>
                                        <li>Track the status of your order through your account or by contacting our customer support team.</li>
                                    </ol>

                                </p>
                            </div>

                        </Col>
                    </Row>
                </Container>
                <ToastContainer />
            </Fragment>
        )
    }
}

export default Purchase
