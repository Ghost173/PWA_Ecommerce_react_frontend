import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import axios from 'axios'
import AppUrl from '../../api/AppUrl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';

export class About extends Component {

    constructor() {
        super();
        this.state = {
            about: "",
            loaderDiv: "",
            mainDiv: "d-none",
        }
    }

    componentDidMount() {
        let about_stoteage = sessionStorage.getItem("allsiteinfo");

        if (about_stoteage == null) {
            axios.get(AppUrl.allsiteinfo).then(response => {
                let statuscode = response.status;
                if (statuscode == 200) {
                    let JsonData = (response.data)[0]['about'];
                    this.setState({ about: JsonData, loaderDiv: "d-none", mainDiv: "" })
                    sessionStorage.setItem("about_stoteage", JsonData)
                } else {
                    toast.error("Something went wrong please try agin later")
                }
            }).catch(error => {
                toast.error("Unable to retrieve About_us data")
            })
        }

    }

    render() {
        return (
            <Fragment>
                <Container>
                    <Breadcrumb>
                        <Breadcrumb.Item > <Link to = "/">Home </Link> </Breadcrumb.Item>
                        <Breadcrumb.Item > About</Breadcrumb.Item>
                    </Breadcrumb>

                    <Row className="p-2">
                        <Col className="shadow-sm bg-white mt-1" md={12} lg={12} sm={12} xs={12}>

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
                                <h4 className="section-title-login">About Us </h4>
                                <p className="section-title-contact">
                                <strong>About Us:</strong>
  <p>Welcome to Aarazhi Sparkle, your premier destination for exquisite jewelry and skincare products. We are passionate about providing our customers with high-quality products that enhance their beauty and confidence.</p>
  <p>At Aarazhi Sparkle, we believe that every individual deserves to shine and feel special. That's why we curate a wide range of saris, jewelry, and skincare products that cater to diverse tastes and preferences.</p>
  <p>Our team of experts carefully selects each item, ensuring that it meets our stringent quality standards. We strive to bring you the latest trends and timeless classics that reflect elegance and sophistication.</p>
  <p>We pride ourselves on excellent customer service and strive to create a seamless shopping experience for our valued customers. Our knowledgeable and friendly staff are always ready to assist you with any inquiries or concerns you may have.</p>
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

export default About
