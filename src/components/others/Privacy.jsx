import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import axios from 'axios'
import AppUrl from '../../api/AppUrl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';

class Privacy extends Component {

    constructor() {
        super();
        this.state = {
            privacy: "",
            loaderDiv: "",
            mainDiv: "d-none"
        }
    }

    componentDidMount() {

        let privacy_stoteage = sessionStorage.getItem("allsiteinfo");

        if (privacy_stoteage == null) {
            axios.get(AppUrl.allsiteinfo).then(response => {
                let statuscode = response.status;
                if (statuscode == 200) {
                    let JsonData = (response.data)[0]['privacy'];
                    this.setState({ privacy: JsonData, loaderDiv: "d-none", mainDiv: "" })
                    sessionStorage.setItem("privacy_stoteage", JsonData)
                } else {
                    toast.error("Something went wrong please try agin later")
                }
            }).catch(error => {
                toast.error("Unable to retrieve Privacy data")
            })
        }

    }


    render() {
        return (
            <Fragment>
                <Container>
                    <Breadcrumb>
                        <Breadcrumb.Item > <Link to="/">Home </Link> </Breadcrumb.Item>
                        <Breadcrumb.Item > Privacy</Breadcrumb.Item>
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
                                <h4 className="section-title-login">Privacy Page</h4>
                                <p className="section-title-contact">
                                    This Privacy Policy outlines how we collect, use, and protect your personal information
                                    when you use our e-commerce application. We are committed to ensuring the privacy and
                                    security of your personal data and strive to comply with applicable data protection laws.
                                    By accessing and using our application, you consent to the practices described in this Privacy Policy.
                                    <br></br>
                                    <br></br>
                                    <strong>Information We Collect:</strong>
                                    <p>We may collect various types of personal information from you, including but not limited to:</p>
                                    <li>Contact information (such as name, email address, phone number)</li>
                                    <li>Billing and shipping address</li>
                                    <li>Payment details</li>
                                    <li>Purchase history</li>
                                    <li>Communication preferences</li>

                                    <br></br>
                                    <strong>Use of Information:</strong>
                                    <p>We use the collected information for the following purposes:</p>
                                    <li>To process and fulfill your orders</li>
                                    <li>To provide customer support and respond to your inquiries</li>
                                    <li>To personalize your shopping experience</li>
                                    <li>To send you promotional offers, newsletters, and updates (with your consent)</li>
                                    <li>To improve our application, products, and services</li>
                                    <li>To detect and prevent fraudulent activities</li>
                                    <br></br>

                                    <strong>Data Security:</strong>
                                    <p>We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, please note that no data transmission or storage method can guarantee 100% security. 
                                        While we strive to protect your data, we cannot guarantee the absolute security of your information.</p>
                                    <br></br>
 
                                    <strong>Sharing of Information:</strong>
                                    <p>We may share your personal information with third parties in the following circumstances:</p>
                                    <li>With service providers who assist us in operating our application and providing services to you</li>
                                    <li>With trusted business partners to offer you relevant products, services, or promotions</li>
                                    <li>To comply with legal obligations or respond to lawful requests from public authorities</li>

                                    <br></br>
                                    <strong>Your Rights:</strong>
                                    <p>You have certain rights regarding your personal information, including the right to
                                        access, correct, and delete your data. You may also have the right to 
                                        restrict or object to certain processing activities. If you wish to exercise any of 
                                        these rights or have any concerns about your privacy, please contact us using the 
                                        information provided below.</p>

                                    <br></br>
                                    <strong>Updates to the Privacy Policy:</strong>
                                    <p>We may update this Privacy Policy from time to time to reflect changes in our practices or legal obligations. 
                                        We encourage you to review this policy periodically to stay informed about how we collect, 
                                        use, and protect your personal information.</p>
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

export default Privacy
