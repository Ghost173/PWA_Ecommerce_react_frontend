import React, { Component, Fragment } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import axios from 'axios'
import AppUrl from '../../api/AppUrl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        if(Siteinfopurchase_guide == null) {
            axios.get(AppUrl.allsiteinfo).then(response => {
                let statuscode  = response.status;
                if(statuscode == 200) {
                    let JsonData = (response.data)[0]['purchase_guide'];
                    this.setState({purchase_guide:JsonData, loaderDiv: "d-none", mainDiv: ""  })
                    sessionStorage.setItem("Siteinfopurchase_guide",JsonData)
                } else {
                    toast.error("Something went wrong please try agin later")
                }
            }).catch(error =>{
                toast.error("Something went wrong to fetch data")
            })
        }

       
    }

    render() {
        return (
            <Fragment>
                <Container>
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
                            {this.state.purchase_guide}
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
