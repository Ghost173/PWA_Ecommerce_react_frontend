import React, { Component, Fragment } from 'react'
import { Col, Container, Form, Row, Button } from 'react-bootstrap'
import validation from '../../validation/validation';
import axios from 'axios'
import AppUrl from '../../api/AppUrl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';

class Contact extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            message: ""
        }
    }


    nameOnChange = (event) => {
        let name = event.target.value;
        // alert(name);
        this.setState({ name: name })
    }

    emailOnChange = (event) => {
        let email = event.target.value;
        // alert(email);
        this.setState({ email: email })
    }

    messageOnChange = (event) => {
        let message = event.target.value;
        // alert(message);
        this.setState({ message: message })
    }

    onformsubmit = (event) => {
        let name = this.state.name;
        let email = this.state.email;
        let message = this.state.message;
        let sendBtn = document.getElementById('sendBtn');
        let contactform = document.getElementById('contactform')

        if (message.length === 0) {
            toast.error("please enter your message")
        } else if(name.length === 0) {
            toast.error("please enter your name")
        }else if (email.length === 0) {
            toast.error("please enter your email")
        } 
        else if(!(validation.NameRegx).test(name)) {
            toast.error("invalid name")
        }
        else {

            sendBtn.innerHTML="sending..."
            
            let mycontactformdata = new FormData();
            mycontactformdata.append("name",name);
            mycontactformdata.append("email",email);
            mycontactformdata.append("message",message); 

            axios.post(AppUrl.contactpost,mycontactformdata)
            .then(function (response) {
                if(response.status == 200) {
                    toast.success("Message sent successfully")
                    sendBtn.innerHTML="Sent"
                    contactform.reset();
                }
              })
              .catch(function (error) {
                toast.error("unable to contact app server please try again later")
              });

        }
        event.preventDefault();
    }

    render() {
        return (
            <Fragment>
                <Container>
                <Breadcrumb>
                        <Breadcrumb.Item > <Link to="/">Home </Link> </Breadcrumb.Item>
                        <Breadcrumb.Item > Contact Us</Breadcrumb.Item>
                    </Breadcrumb>
                    <Row className="p-2">
                        <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>

                            <Row className="text-center">
                                <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>

                                    <Form id='contactform' onSubmit={this.onformsubmit} className="onboardForm">
                                        <h4 className="section-title-login">CONTACT WITH US </h4>

                                        <h6 className="section-sub-title">Please Contact With Us </h6>

                                        <input onChange={this.nameOnChange} className="form-control m-2" type="text" placeholder="Enter your name" />

                                        <input onChange={this.emailOnChange} className="form-control m-2" type="email" placeholder="Enter Email" />

                                        <Form.Control onChange={this.messageOnChange} className="form-control m-2" as="textarea" rows={3} placeholder="Message" />
                                        <Button id='sendBtn' type='submit ' className="btn btn-block m-2 site-btn-login"> Send </Button>

                                    </Form>

                                </Col>

                                <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                                    <br></br><br></br>
                                    <p className="section-title-contact">
                                        1635 Franklin Street Montgomery, Near Sherwood Mall. AL 36104
                                        Email: Support@pwaecom.com
                                    </p>

                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d162771.1102477064!2d-74.10054944459704!3d40.70681480276415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1627241390779!5m2!1sen!2sbd" width="550" height="450" styles="border:0;" allowfullscreen="" loading="lazy"></iframe>

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

export default Contact
