import React, { Component, Fragment } from 'react'
import { Col, Container, Form, Row, Button } from 'react-bootstrap'
import loginimg from '../../assets/images/login.png'
import { Link } from 'react-router-dom'
import forgetImg from '../../assets/images/forget.jpg'
import axios from 'axios'
import AppUrl from '../../api/AppUrl'
import { ToastContainer, toast } from 'react-toastify';


class ForgetPassword extends Component {

  constructor () {
    super();
    this.state = {
      email: "",
      message: []
    }
  }
  

  formSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: this.state.email,
      
     }


     axios.post(AppUrl.UserForgetPassword, data)
     .then(response => {
        this.setState({message:response.data})

        toast.success("rest email was sent")

        console.log("gooooo" +this.state.message)
      }).catch(error => {
        this.setState({message:error.response.data.message})
        toast.error(this.state.message)
     })
  }

  render() {
    return (
     <Fragment>
         <Container>
          <Row className="p-2">
            <Col className="shadow-sm bg-white mt-2" lg={12} md={12} sm={12} xs={12}>

              <Row className="text-center">
                <Col className="d-flex justify-content-center" lg={6} md={6} sm={12} xs={12}>
                  <Form className='onboardForm' onSubmit={this.formSubmit}>
                    <h4 className="section-title-login"> FORGET PASSWORD</h4>
                    <input className="form-control m-2" onChange={(e) =>{this.setState({ email:e.target.value})}} type="text" placeholder="Enter your email" required />
                    <Button type='submit' className="btn btn-block m-2 site-btn-login"> Get Reset Password Email </Button>
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
