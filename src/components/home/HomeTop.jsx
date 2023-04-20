import React, { Component } from 'react'
import { Fragment } from 'react'
import { Col, Container, Row, Card } from 'react-bootstrap'
import MegaMenu from './MegaMenu'
import HomeSlider from './HomeSlider'

class HomeTop extends Component {
  render() {
    return (
      <Fragment>
            <Container className='p-0 m-0 overflow-hidden' fluid={true}>
                <Row>
                    {/* MegaMenu */}
                    <Col lg={3} md={3} sm={12}>
                        <MegaMenu />
                        
                    </Col>

                    {/* Slider */}
                    <Col lg={9} md={9} sm={12} className="d-none d-sm-block">
                    <HomeSlider />
                    </Col>
                </Row>
            </Container>
      </Fragment>
    )
  }
}

export default HomeTop