import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Apple from '../../assets/images/apple.png'
import Google from '../../assets/images/google.png'
import axios from 'axios'
import AppUrl from '../../api/AppUrl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class FooterMobile extends Component {
  constructor() {
    super();
    this.state = {
        address: "",
        android_app_link: "",
        ios_app_link: "",
        facebook_link: "",
        twitter_link: "",
        insta_link: "",
        copyright_text: "",

    }
}

componentDidMount() {
  
        axios.get(AppUrl.allsiteinfo).then(response => {
            let statuscode = response.status;
            if (statuscode == 200) {
                let JsonData = (response.data)[0];
                this.setState({ 
                  address: JsonData['address'], 
                  android_app_link: JsonData['android_app_link'], 
                  ios_app_link: JsonData['ios_app_link'], 
                  facebook_link: JsonData['facebook_link'], 
                  twitter_link: JsonData['twitter_link'], 
                  insta_link: JsonData['insta_link'], 
                  copyright_text: JsonData['copyright_text'], 
                  loaderDiv: "d-none", mainDiv: "" })
            }else {
                toast.error("Something went wrong please try agin later")
            }
        }).catch(error => {
            toast.error("Something went wrong to fetch data")
        })

    
}

  render() {
    return (
      <Fragment>
        <div className="footerback m-0 mt-5 pt-3 shadow-sm">
          <Container className="text-center">
            <Row className="px-0 my-5">
              <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                <h5 className="footer-menu-title">OFFICE ADDRESS</h5>
                <p>
                {this.state.address}
                </p>
                <h5 className="footer-menu-title">SOCIAL LINK</h5>
                <a href={this.state.facebook_link} target='_blank'><i className="fab m-1 h4 fa-facebook"></i></a>
                <a href={this.state.insta_link} target='_blank'><i className="fab m-1 h4 fa-instagram"></i></a>
                <a href={this.state.twitter_link} target='_blank'><i className="fab m-1 h4 fa-twitter"></i></a>
              </Col>


              <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                <h5 className="footer-menu-title">DOWNLOAD APPS</h5>
                <a href={this.state.android_app_link}><img src={Google} /></a><br></br>
                <a href={this.state.ios_app_link}><img className="mt-2" src={Apple} /></a><br></br>
              </Col>

            </Row>
          </Container>

          <Container fluid={true} className="text-center m-0 pt-3 pb-1 bg-dark">
            <Container>
              <Row>
                <h6 className="text-white">{this.state.copyright_text}</h6>
              </Row>
            </Container>
          </Container>

        </div>
        <ToastContainer />
      </Fragment>
    )
  }
}

export default FooterMobile
