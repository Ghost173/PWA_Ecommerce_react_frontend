import React, { Component, Fragment } from 'react'
import { Col, Container, Form, Row, Button } from 'react-bootstrap'
import loginimg from '../../assets/images/login.png'
import { Link } from 'react-router-dom'

class UserLogin extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Row className="p-2">
            <Col className="shadow-sm bg-white mt-2" lg={12} md={12} sm={12} xs={12}>

              <Row className="text-center">
                <Col className="d-flex justify-content-center" lg={6} md={6} sm={12} xs={12}>
                  <Form className='onboardForm'>
                    <h4 className="section-title-login"> USER SING IN </h4>
                    <input className="form-control m-2" type="text" placeholder="Enter your email" required />
                    <input className="form-control m-2" type="text" placeholder="Enter your password" required/>
                    <Button className="btn btn-block m-2 site-btn-login"> Login </Button>

                    <br></br><br></br>
                    <hr />
                    <p><Link>Forget My Password</Link></p>

                    <p>Don't You Have An Account? <Link to="/register">Click Here to Create</Link></p>
                  </Form>
                </Col>

                <Col className="p-0 Desktop m-0" lg={6} md={6} sm={6} xs={6}>
                  <img className="onboardBanner" src={loginimg} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default UserLogin
