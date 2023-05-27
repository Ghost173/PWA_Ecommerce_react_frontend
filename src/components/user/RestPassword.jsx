import React, { Component, Fragment } from 'react'
import { Col, Container, Form, Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import forgetImg from '../../assets/images/forget.jpg'
import axios from 'axios';
import AppUrl from '../../api/AppUrl';
import { ToastContainer, toast } from 'react-toastify';


class RestPassword extends Component {

    constructor() {
        super();
        this.state = {
            token: "",
            email: "",
            password: "",
            password_confirmation: "",
            message: ""
        }
    }

    formSubmit = (e) => {
        e.preventDefault();

        const data = {
            token: this.state.token,
            email: this.state.email,
            password: this.state.password,
            password_confirmation: this.state.password_confirmation,
        }

        let resetBtn = document.getElementById('resetbutton');
        let resetpassword = document.getElementById('resetpassword');

        resetBtn.innerHTML = "Sending password link...";
        resetBtn.disabled = true; // Disable the button


        axios.post(AppUrl.UserRestPassword, data)
            .then(response => {
                toast.success("password was reset success")
                resetBtn.innerHTML = "password reset success"
                resetpassword.reset();
            }).catch(error => {
                this.setState({ message: error.response.data.errors })
                toast.error(this.state.message)
            }).finally(() => {

            });


    }

    render() {

        return (
            <Fragment>

                <Container>
                    <Row className="p-2">
                        <Col className="shadow-sm bg-white mt-2" lg={12} md={12} sm={12} xs={12}>

                            <Row className="text-center">
                                <Col className="d-flex justify-content-center" lg={6} md={6} sm={12} xs={12}>
                                    <Form className='onboardForm' id='resetpassword' onSubmit={this.formSubmit}>
                                        <h4 className="section-title-login"> REST PASSWORD</h4>
                                        <input className="form-control m-2" onChange={(e) => { this.setState({ token: e.target.value }) }} type="text" placeholder="Enter your pin code" />
                                        <input className="form-control m-2" onChange={(e) => { this.setState({ email: e.target.value }) }} type="text" placeholder="Enter your email" />
                                        <input className="form-control m-2" onChange={(e) => { this.setState({ password: e.target.value }) }} type="text" placeholder="Enter your new password" />
                                        <input className="form-control m-2" onChange={(e) => { this.setState({ password_confirmation: e.target.value }) }} type="text" placeholder="Renter your new password" />
                                        <Button type='submit' id='resetbutton' className="btn btn-block m-2 site-btn-login">Update</Button>
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

export default RestPassword
