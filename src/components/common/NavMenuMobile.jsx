import React, { Component, Fragment } from 'react'
import { Row, Col, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Logo from '../../assets/images/easyshop.png'
import { Link } from 'react-router-dom'
import MegaMenuMobile from '../home/MegaMenuMobile';
import axios from 'axios';
import AppUrl from '../../api/AppUrl';
import { ToastContainer, toast } from 'react-toastify';

class NavMenuMobile extends Component {


  constructor() {
    super();
    this.state = {
      SideNavState: "sideNavClose",
      ContentOverState: "ContentOverlayClose",
      CartCount: "",
      UserDetails:[]
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

  async componentDidMount() {
    await this.checkuser();

  }

  componentDidUpdate() {
    this.fetchData();
  }

  checkuser = () => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.get(AppUrl.UserData, {
        headers: {
          Authorization: `Bearer ${token}` // Include the token in the Authorization header
        }
      }).then(response => {
        this.setState({ UserDetails: response.data })
        // alert(this.state.UserDetails.id)
      }).catch(error => {
        toast.error("Unable to validate your session please login and try again");
        localStorage.removeItem('token');
      })
    }




  }


  fetchData = () => {
    let id = this.state.UserDetails.id;
    axios.get(AppUrl.ProductCountInCart(id))
      .then(response => {
        this.setState({ CartCount: response.data })
      }).catch(error => {

      })


  }

  render() {
    return (
      <Fragment>
        <div className="TopSectionDown">


          <Container fluid={"true"} className="fixed-top shadow-sm p-2 mb-0 bg-white">
            <Row>
              <Col lg={4} md={4} sm={12} xs={12}>
                <Button onClick={this.MenuBarClickHandler} className="btn" variant="light"><i className="fa fa-bars"></i>  </Button>
                <Link to="/"> <img className="nav-logo" src={Logo} /> </Link>
                <Link to="/cart" className="cart-btn"><i className="fa fa-shopping-cart"></i> {this.state.CartCount} Items </Link>
              </Col>

            </Row>
          </Container>
          <div className={this.state.SideNavState}>
            <MegaMenuMobile />
          </div>

          <div onClick={this.ContentOverlayClickHandler} className={this.state.ContentOverState}>

          </div>




        </div>
      </Fragment>
    )
  }
}

export default NavMenuMobile
