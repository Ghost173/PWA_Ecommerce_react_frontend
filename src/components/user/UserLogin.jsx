import React, { Component, Fragment } from 'react'
import { Col, Container, Form, Row, Button } from 'react-bootstrap'
import loginimg from '../../assets/images/login.png'
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios';
import AppUrl from '../../api/AppUrl';
import { ToastContainer, toast } from 'react-toastify';

class UserLogin extends Component {

  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      message: "",
      loggedIn: false
    }
  }


  // login form submit method 
  formSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: this.state.email,
      password: this.state.password
    }

    axios.post(AppUrl.UserLogion, data)
      .then(response => {
        localStorage.setItem("token", response.data.token)
        this.setState({ loggedIn: true })

      }).catch(error => {
        toast.error(error.response.data.message)
      })


  }


  componentDidMount() {
   
  }


  render() {


    //afterLogion 
    if (this.state.loggedIn) {
      return <Navigate to={'/profile'} />
    }


    const token = localStorage.getItem('token');

    if (token) {
        // Use your preferred method for redirecting to the login page
        window.location.href = '/profile';
        return null; // Render nothing
    }


    return (
      
      <Fragment>
        <Container>
          <Row className="p-2">
            <Col className="shadow-sm bg-white mt-2" lg={12} md={12} sm={12} xs={12}>

              <Row className="text-center">
                <Col className="d-flex justify-content-center" lg={6} md={6} sm={12} xs={12}>
                  <Form className='onboardForm' onSubmit={this.formSubmit}>
                    <h4 className="section-title-login"> USER SING IN </h4>
                    <input className="form-control m-2" onChange={(e) => { this.setState({ email: e.target.value }) }} type="text" placeholder="Enter your email" required />
                    <input className="form-control m-2" onChange={(e) => { this.setState({ password: e.target.value }) }} type="text" placeholder="Enter your password" required />
                    <Button type='submit' className="btn btn-block m-2 site-btn-login"> Login </Button>

                    <br></br><br></br>
                    <hr />
                    <p><Link to="/forgetpassword">Forget My Password</Link></p>

                    <p>Don't You Have An Account? <Link to="/register">Click Here to Create</Link></p>
                  </Form>
                </Col>

                <Col className="p-0 Desktop m-0" lg={6} md={6} sm={6} xs={6}>
                  <img className="onboardBanner" src={loginimg} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default UserLogin
