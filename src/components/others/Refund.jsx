import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import axios from 'axios'
import AppUrl from '../../api/AppUrl';


class Refund extends Component {
  constructor() {
    super();
    this.state = {
      refund: ""
    }
  }

  componentDidMount() {
    axios.get(AppUrl.allsiteinfo).then(response => {
      let statuscode = response.status;
      if (statuscode == 200) {
        let JsonData = (response.data)[0]['refund'];
        this.setState({ refund: JsonData })
      }
    }).catch(error => {

    })
  }
  render() {
    return (
      <Fragment>
        <Container>
          <Row className="p-2">
            <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
              <h4 className="section-title-login">Refund Page </h4>
              <p className="section-title-contact">
              {this.state.refund}
              </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default Refund
