import React, { Component, Fragment } from 'react'
import { Col, Container, Form, Row, Button } from 'react-bootstrap'
import loginimg from '../../assets/images/login.png'
import { Link } from 'react-router-dom'
import forgetImg from '../../assets/images/forget.jpg'
import axios from 'axios'
import AppUrl from '../../api/AppUrl'
import { ToastContainer, toast } from 'react-toastify';


class ForgetPassword extends Component {

  constructor() {
    super();
    this.state = {
      email: "",
      message: ""
    }
  }


  formSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: this.state.email,
    }

    let email = this.state.email;
    let resetBtn = document.getElementById('resetbutton');
    let forgetpasswordForm = document.getElementById('forgetpassword')


    if (email.length === 0) {
      toast.error("please enter your email to continue")
    } else {

      resetBtn.innerHTML = "Sending password link...";
      resetBtn.disabled = true; // Disable the button

      axios.post(AppUrl.UserForgetPassword, data)
        .then(response => {
          this.setState({ message: response.data })
          toast.success("rest email was sent")
          resetBtn.innerHTML = "Sent"
          forgetpasswordForm.reset();
        }).catch(error => {
          this.setState({ message: error.response.data.message })
          toast.error(error.response.data.message)
        }).finally(() => {
          resetBtn.disabled = false; // Enable the button
          resetBtn.innerHTML = "Get Reset Password Email";
        });
    

    }






  }

  render() {
    return (
      <Fragment>
        <Container>
          <Row className="p-2">
            <Col className="shadow-sm bg-white mt-2" lg={12} md={12} sm={12} xs={12}>

              <Row className="text-center">
                <Col className="d-flex justify-content-center" lg={6} md={6} sm={12} xs={12}>
                  <Form className='onboardForm' id='forgetpassword' onSubmit={this.formSubmit}>
                    <h4 className="section-title-login"> FORGET PASSWORD</h4>
                    <input className="form-control m-2" onChange={(e) => { this.setState({ email: e.target.value }) }} type="text" placeholder="Enter your email" required />
                    <Button type='submit' id='resetbutton' className="btn btn-block m-2 site-btn-login"> Get Reset Password Email </Button>
                  </Form>
                </Col>

                <Col className="p-0 Desktop m-0" lg={6} md={6} sm={6} xs={6}>
                  <img className="onboardBanner" src={forgetImg} />
                </Col>
              </Row>
            </Col>
          </Row>

        </Container>
        <ToastContainer />
      </Fragment>
    )
  }
}

export default ForgetPassword
