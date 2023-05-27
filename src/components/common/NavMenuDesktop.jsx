import React, { Component, Fragment } from 'react'
import { Row, Col, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/images/easyshop.png'
import { Link, Navigate } from 'react-router-dom'
import MegaMenuAll from '../home/MegaMenuAll';


class NavMenuDesktop extends Component {


  constructor() {
    super();
    this.state = {
      SideNavState: "sideNavClose",
      ContentOverState: "ContentOverlayClose",
      SearchKey: "",
      SearchRedirectStatus: false,
    }

    this.SearchOnChange = this.SearchOnChange.bind(this)
    this.searchonclick = this.searchonclick.bind(this)
    this.searchRedirect = this.searchRedirect.bind(this)
  }


  SearchOnChange(event) {
    let SearchKey = event.target.value;
    this.setState({ SearchKey: SearchKey })
  }


  searchonclick() {
    if (this.state.SearchKey.length >= 2) {
      this.setState({ SearchRedirectStatus: true })
    }
  }

  searchRedirect() {
    if (this.state.SearchRedirectStatus === true) {
      return <Navigate to={"/productbysearch/" + this.state.SearchKey} />
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


  logout = () => {
    localStorage.clear();
  }


  render() {

    let buttons;
    if (localStorage.getItem('token')) {
      buttons = (
        <div>
          <Link to="/favourite" className="btn"><i className="fa h4 fa-heart"></i><sup><span className="badge text-white bg-danger">3</span></sup>
          </Link>

          <Link to="/notification" className="btn"><i className="fa h4 fa-bell"></i><sup><span className="badge text-white bg-danger">5</span></sup>
          </Link>

          <Link to="/profile" className="h4 btn">PROFILE</Link>
          <Link to="/" onClick={this.logout} className="h4 btn">LOGOUT</Link>

          <Link to="/cart" className="cart-btn"><i className="fa fa-shopping-cart"></i> 3 Items </Link>
        </div>
      )

    } else {
      buttons = (
        <div>
          <Link to="/favourite" className="btn"><i className="fa h4 fa-heart"></i><sup><span className="badge text-white bg-danger">3</span></sup>
          </Link>

          <Link to="/notification" className="btn"><i className="fa h4 fa-bell"></i><sup><span className="badge text-white bg-danger">5</span></sup>
          </Link>

          <Link to="/login" className="h4 btn">LOGIN</Link>
          <Link to="/register" className="h4 btn">REGISTER</Link>

          <Link to="/cart" className="cart-btn"><i className="fa fa-shopping-cart"></i> 3 Items </Link>
        </div>
      )

    }


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
                    <input onChange={this.SearchOnChange} type='text' className='form-control' />

                    <Button onClick={this.searchonclick} type='button' className='btn site-btn'>
                      <i className='fa fa-search'></i>
                    </Button>
                  </div>
                </Col>

                <Col lg={4} md={4} sm={12} xs={12}>
                {buttons}
                </Col>
              </Row>
              {this.searchRedirect()}
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
