import React, { Component } from 'react'
import { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import MegaMenu from './MegaMenu'
import HomeSlider from './HomeSlider'
import axios from 'axios'
import AppUrl from '../../api/AppUrl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class HomeTop extends Component {

  constructor() {
    super();
    this.state = {
      MenuData: []
    }
  }

  componentDidMount() {
    axios.get(AppUrl.AllCategoryDetails).then(response => {
      let statuscode = response.status;
      if (statuscode == 200) {
        this.setState({MenuData:response.data})
      } else {
        toast.error("Something went wrong please try agin later")
      }
    }).catch(error => {
      toast.error("Something went wrong to fetch data")
    })
  }

  render() {
    return (
      <Fragment>
        <Container className='p-0 m-0 overflow-hidden' fluid={true}>
          <Row>
            {/* MegaMenu */}
            <Col lg={3} md={3} sm={12}>
              <MegaMenu data ={this.state.MenuData}/>
            </Col>

            {/* Slider className="d-none d-sm-block"*/}
            <Col lg={9} md={9} sm={12} >
              <HomeSlider />
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default HomeTop