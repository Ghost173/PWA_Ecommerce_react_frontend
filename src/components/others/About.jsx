import React, { Component, Fragment } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import axios from 'axios'
import AppUrl from '../../api/AppUrl';

export class About extends Component {

    constructor() {
        super();
        this.state = {
            about: ""
        }
    }

    componentDidMount() {
        axios.get(AppUrl.allsiteinfo).then(response => {
            let statuscode  = response.status;
            if(statuscode == 200) {
                let JsonData = (response.data)[0]['about'];
                this.setState({about:JsonData})
            }
        }).catch(error =>{

        })
    }

    render() {
        return (
            <Fragment>
                <Container>
                    <Row className="p-2">
                        <Col className="shadow-sm bg-white mt-1" md={12} lg={12} sm={12} xs={12}>
                            <h4 className="section-title-login">About Us </h4>
                            <p className="section-title-contact">
                                {this.state.about}
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default About
