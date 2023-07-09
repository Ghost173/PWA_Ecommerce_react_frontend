import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import axios from 'axios'
import AppUrl from '../../api/AppUrl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';


class Refund extends Component {
  constructor() {
    super();
    this.state = {
      refund: "",
      loaderDiv: "",
      mainDiv: "d-none"
    }
  }

  componentDidMount() {

    let refund_stoteage = sessionStorage.getItem("allsiteinfo");
    if (refund_stoteage == null) {
      axios.get(AppUrl.allsiteinfo).then(response => {
        let statuscode = response.status;
        if (statuscode == 200) {
          let JsonData = (response.data)[0]['refund'];
          this.setState({ refund: JsonData, loaderDiv: "d-none", mainDiv: "" })
          sessionStorage.setItem("refund_stoteage", JsonData)
        } else {
          toast.error("Something went wrong please try agin later")
        }
      }).catch(error => {
        toast.error("Unable to retrieve Refund data")
      })
    }


  }
  render() {
    return (
      <Fragment>
        <Container>
          <Breadcrumb>
            <Breadcrumb.Item > <Link to="/">Home </Link> </Breadcrumb.Item>
            <Breadcrumb.Item > Refund</Breadcrumb.Item>
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
                <h4 className="section-title-login">Refund Page </h4>
                <p className="section-title-contact">
                  <strong>Refund Policy:</strong>
                  <p>We want you to be completely satisfied with your purchase. If you need to request a refund, please follow the guidelines below:</p>
                  <ol>
                    <li>If you wish to cancel your order, please contact our customer support team as soon as possible. Orders can only be canceled before they have been shipped.</li>
                    <li>Once your order is canceled, we will initiate the refund process.</li>
                    <li>Refunds will be issued within 10 working days after the cancellation request is approved.</li>
                    <li>The refund will be issued through the original payment method used for the purchase.</li>
                    <li>Please note that it may take additional time for the refund to be reflected in your account, depending on your bank or payment provider.</li>
                    <li>If you have any questions or concerns regarding your refund, please contact our customer support team for assistance.</li>
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

export default Refund
