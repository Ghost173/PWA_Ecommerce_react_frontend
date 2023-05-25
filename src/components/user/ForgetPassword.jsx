import React, { Component, Fragment } from 'react'
import { Col, Container, Form, Row, Button } from 'react-bootstrap'
import loginimg from '../../assets/images/login.png'
import { Link } from 'react-router-dom'
import forgetImg from '../../assets/images/forget.jpg'


class ForgetPassword extends Component {
  render() {
    return (
     <Fragment>
         <Container>
          <Row className="p-2">
            <Col className="shadow-sm bg-white mt-2" lg={12} md={12} sm={12} xs={12}>

              <Row className="text-center">
                <Col className="d-flex justify-content-center" lg={6} md={6} sm={12} xs={12}>
                  <Form className='onboardForm'>
                    <h4 className="section-title-login"> FORGET PASSWORD</h4>
                    <input className="form-control m-2" type="text" placeholder="Enter your email" required />
                    <Button className="btn btn-block m-2 site-btn-login"> Get Reset Password Email </Button>
                  </Form>
                </Col>

                <Col className="p-0 Desktop m-0" lg={6} md={6} sm={6} xs={6}>
                  <img className="onboardBanner" src={forgetImg} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
     </Fragment>
    )
  }
}

export default ForgetPassword
