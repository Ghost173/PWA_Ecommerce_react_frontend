import React, { Component } from 'react'
import { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import MegaMenu from './MegaMenu'
import HomeSlider from './HomeSlider'
import 'react-toastify/dist/ReactToastify.css';

class HomeTop extends Component {

  render() {
    return (
      <Fragment>
        <Container className='p-0 m-0 overflow-hidden' fluid={true}>
          <Row>
            {/* MegaMenu */}
            <Col lg={3} md={3} sm={12}>
              <MegaMenu/>
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