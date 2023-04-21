import React, { Component, Fragment } from 'react'
import { Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/images/easyshop.png'
import { Link } from 'react-router-dom'

class NavMenuDesktop extends Component {
  render() {
    return (
      <Fragment>
        <div className='TopSectionDown'>
        <Navbar fixed='top' bg="light" className='navbar'>
        <Container fluid={"true"}>
          <Row>
            <Col lg={4} ms={4} sm={12} xs={12}>
             <Link to= "/"><img src={Logo} className='nav-logo'/> </Link> 
            </Col>

            <Col lg={4} ms={4} sm={12} xs={12}>
            </Col>

            <Col lg={4} ms={4} sm={12} xs={12}>
            </Col>
          </Row>
        </Container>
      </Navbar>
        </div>
        
      </Fragment>
    )
  }
}

export default NavMenuDesktop
