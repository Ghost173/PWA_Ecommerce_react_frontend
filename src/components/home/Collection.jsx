import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';


class Collection extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center" fluid={true}>
                    <div className="section-title text-center mb-55">
                        <h2>PRODUCT COLLETIONS</h2>
                        <p>Some of Our Exclusive Collection, You May like!</p>

                    </div>
                    <Row>
                        <Col className='p-0' key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                            <Card className='image-box card w-100'>
                                <Card.Body>
                                    <img className="center w-75" alt="foo" src='https://rukminim1.flixcart.com/image/416/416/k0plpjk0/cases-covers/back-cover/3/t/k/flipkart-smartbuy-fksb-c-rel-xt-tra-original-imafkfezvfuvtyfq.jpeg?q=70' />
                                </Card.Body>
                                <p className='product-name-on-card'>SmartBuy Back Cover for Realme XT</p>
                                <p className='product-price-on-card'>Price: $120</p>
                            </Card>
                        </Col>

                        <Col className='p-0' key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                            < Card className='image-box card w-100'>
                                <Card.Body>
                                    <img className="center w-75" alt="foo" src='https://rukminim1.flixcart.com/image/416/416/k0plpjk0/cases-covers/back-cover/3/t/k/flipkart-smartbuy-fksb-c-rel-xt-tra-original-imafkfezvfuvtyfq.jpeg?q=70' />
                                </Card.Body>
                                <p className='product-name-on-card'>SmartBuy Back Cover for Realme XT</p>
                                <p className='product-price-on-card'>Price: $120</p>
                            </Card>
                        </Col>

                        <Col className='p-0' key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                            < Card className='image-box card w-100'>
                                <Card.Body>
                                    <img className="center w-75" alt="foo" src='https://rukminim1.flixcart.com/image/416/416/k0plpjk0/cases-covers/back-cover/3/t/k/flipkart-smartbuy-fksb-c-rel-xt-tra-original-imafkfezvfuvtyfq.jpeg?q=70' />
                                </Card.Body>
                                <p className='product-name-on-card'>SmartBuy Back Cover for Realme XT</p>
                                <p className='product-price-on-card'>Price: $120</p>
                            </Card>
                        </Col>

                        <Col className='p-0' key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                            < Card className='image-box card w-100'>
                                <Card.Body>
                                    <img className="center w-75" alt="foo" src='https://rukminim1.flixcart.com/image/416/416/k0plpjk0/cases-covers/back-cover/3/t/k/flipkart-smartbuy-fksb-c-rel-xt-tra-original-imafkfezvfuvtyfq.jpeg?q=70' />
                                </Card.Body>
                                <p className='product-name-on-card'>SmartBuy Back Cover for Realme XT</p>
                                <p className='product-price-on-card'>Price: $120</p>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default Collection
