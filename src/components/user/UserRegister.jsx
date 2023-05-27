import React, { Component, Fragment } from 'react'
import { Col, Container, Form, Row, Button } from 'react-bootstrap'
import loginimg from '../../assets/images/login.png'
import { Link, Navigate } from 'react-router-dom'
import AppUrl from '../../api/AppUrl';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

class UserRegister extends Component {

    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
            password_confirmation: "",
            loggedIn: false
        }
    }

    formSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password_confirmation: this.state.password_confirmation,
        }

        axios.post(AppUrl.UserRegister, data)
            .then(response => {
                localStorage.setItem("token", response.data.token)
                this.setState({ loggedIn: true })

            }) .catch(error => {
                if (error.response && error.response.data.errors) {
                  const errorMessage = error.response.data.errors[0];
                  // Display the error message to the user
                  toast.error(errorMessage ,
                    {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                        });
                } else {
                  // Handle other types of errors
                }
              });


    }

    render() {


        const token = localStorage.getItem('token');

        if (token) {
            // Use your preferred method for redirecting to the login page
            window.location.href = '/profile';
            return null; // Render nothing
        }
        //after Register 
        if (this.state.loggedIn) {
            return <Navigate to={'/profile'} />
        }
        return (
            <Fragment>
                <Container>
                    <Row className="p-2">
                        <Col className="shadow-sm bg-white mt-2" lg={12} md={12} sm={12} xs={12}>

                            <Row className="text-center">
                                <Col className="d-flex justify-content-center" lg={6} md={6} sm={12} xs={12}>
                                    <Form className='onboardForm' onSubmit={this.formSubmit}>
                                        <h4 className="section-title-login"> USER REGISTER </h4>
                                        <input className="form-control m-2" onChange={(e) => { this.setState({ name: e.target.value }) }} type="text" placeholder="Enter your name" />
                                        <input className="form-control m-2" onChange={(e) => { this.setState({ email: e.target.value }) }} type="text" placeholder="Enter your email" />
                                        <input className="form-control m-2" onChange={(e) => { this.setState({ password: e.target.value }) }} type="text" placeholder="Enter your password" />
                                        <input className="form-control m-2" onChange={(e) => { this.setState({ password_confirmation: e.target.value }) }} type="text" placeholder="Renter your password" />
                                        <Button type='submit' className="btn btn-block m-2 site-btn-login"> Register </Button>
                                        <br></br><br></br>
                                        <hr />
                                        <p>Already Have An Account? <Link to="/login">Click Here to Login</Link></p>
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

export default UserRegister
