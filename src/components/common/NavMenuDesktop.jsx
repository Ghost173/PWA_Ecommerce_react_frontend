import React, { Component, Fragment } from 'react'
import { Row, Col, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/images/easyshop.png'
import { Link } from 'react-router-dom'
import MegaMenuAll from '../home/MegaMenuAll';

class NavMenuDesktop extends Component {


  constructor() {
    super();
    this.state = {
      SideNavState: "sideNavClose",
      ContentOverState: "ContentOverlayClose"
    }
  }


  MenuBarClickHandler = () => {
    this.SideNavOpenClose();
  }

  ContentOverlayClickHandler = () => {
    this.SideNavOpenClose();
  }


  SideNavOpenClose = () => {
    let SideNavState = this.state.SideNavState;
    let ContentOverState = this.state.ContentOverState;
    if (SideNavState === "sideNavOpen") {
      this.setState({ SideNavState: "sideNavClose", ContentOverState: "ContentOverlayClose" })

    }
    else {
      this.setState({ SideNavState: "sideNavOpen", ContentOverState: "ContentOverlayOpen" })
    }
  }

  render() {
    return (
      <Fragment>
        <div className='TopSectionDown'>
          <Navbar fixed='top' bg="light" className='navbar'>

            <Container fluid={"true"} className='fixed-top shadow-sm p-2 mb-0 bg-white' >
              <Row>
                <Col lg={4} md={4} sm={12} xs={12}>
                <Button onClick={this.MenuBarClickHandler} variant="light"><i className="fa fa-bars"></i> </Button>
                  <Link to="/"><img src={Logo} className='nav-logo' /> </Link>
                </Col>

                <Col className='p-1' lg={4} md={4} sm={12} xs={12}>
                  <div className='input-group w-100'>
                    <input type='text' className='form-control' />
                    <Button type='button' className='btn site-btn'>
                      <i className='fa fa-search'></i>
                    </Button>
                  </div>
                </Col>

                <Col lg={4} md={4} sm={12} xs={12}>
                  <Link to="/notification" className='btn p-1 '><i class="fa h4 fa-bell"></i>
                    <sup>
                      <span className='badge text-white bg-danger'>6</span>
                    </sup>
                  </Link>
                  <a className="btn"><i class="fa h4 fa-heart" aria-hidden="true"></i>
                    <sup>
                      <span className='badge text-white bg-danger'>6</span>
                    </sup>
                  </a>

                  <Link to="/login" className='h4 btn'>LOGIN</Link>
                  <Link to="/" className='h4 btn'>REGISTER</Link>
                  <Button className='cart-btn'><i className='fa fa-shopping-cart'></i> 3 Items</Button>
                </Col>
              </Row>
            </Container>
          </Navbar>
        </div>


        <div className={this.state.SideNavState}>
                <MegaMenuAll />
          </div>

               <div onClick={this.ContentOverlayClickHandler} className={this.state.ContentOverState}>

               </div>

      </Fragment>
    )
  }
}

export default NavMenuDesktop
