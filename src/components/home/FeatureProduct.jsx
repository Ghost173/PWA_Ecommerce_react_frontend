import React, { Component } from 'react'
import { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

class featureProduct extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center" fluid={true}>
                    <div className="section-title text-center mb-55">
                        <h2>Feature Products</h2>
                        <p>Some of Our Exclusive Collection, You May like!</p>

                    </div>

                    <Row>
                        <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                            <Link to="/productdetails">
                            < Card className='image-box card'>
                                <Card.Body>
                                    <img className="center" alt="foo" src='https://rukminim1.flixcart.com/image/416/416/k0plpjk0/cases-covers/back-cover/3/t/k/flipkart-smartbuy-fksb-c-rel-xt-tra-original-imafkfezvfuvtyfq.jpeg?q=70' />
                                </Card.Body>
                                <p className='product-name-on-card'>SmartBuy Back Cover for Realme XT</p>
                                <p className='product-price-on-card'>Price: $120</p>
                            </Card>
                            </Link>
                        </Col>

                        <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                            < Card className='image-box card'>
                                <Card.Body>
                                    <img className="center" alt="foo" src='https://rukminim1.flixcart.com/image/416/416/k0plpjk0/cases-covers/back-cover/3/t/k/flipkart-smartbuy-fksb-c-rel-xt-tra-original-imafkfezvfuvtyfq.jpeg?q=70' />
                                </Card.Body>
                                <p className='product-name-on-card'>SmartBuy Back Cover for Realme XT</p>
                                <p className='product-price-on-card'>Price: $120</p>
                            </Card>
                        </Col>

                        <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                            < Card className='image-box card'>
                                <Card.Body>
                                    <img className="center" alt="foo" src='https://rukminim1.flixcart.com/image/416/416/k0plpjk0/cases-covers/back-cover/3/t/k/flipkart-smartbuy-fksb-c-rel-xt-tra-original-imafkfezvfuvtyfq.jpeg?q=70' />
                                </Card.Body>
                                <p className='product-name-on-card'>SmartBuy Back Cover for Realme XT</p>
                                <p className='product-price-on-card'>Price: $120</p>
                            </Card>
                        </Col>

                        <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                            < Card className='image-box card'>
                                <Card.Body>
                                    <img className="center" alt="foo" src='https://rukminim1.flixcart.com/image/416/416/k0plpjk0/cases-covers/back-cover/3/t/k/flipkart-smartbuy-fksb-c-rel-xt-tra-original-imafkfezvfuvtyfq.jpeg?q=70' />
                                </Card.Body>
                                <p className='product-name-on-card'>SmartBuy Back Cover for Realme XT</p>
                                <p className='product-price-on-card'>Price: $120</p>
                            </Card>
                        </Col>

                        <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                            < Card className='image-box card'>
                                <Card.Body>
                                    <img className="center" alt="foo" src='https://rukminim1.flixcart.com/image/416/416/k0plpjk0/cases-covers/back-cover/3/t/k/flipkart-smartbuy-fksb-c-rel-xt-tra-original-imafkfezvfuvtyfq.jpeg?q=70' />
                                </Card.Body>
                                <p className='product-name-on-card'>SmartBuy Back Cover for Realme XT</p>
                                <p className='product-price-on-card'>Price: $120</p>
                            </Card>
                        </Col>

                        <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                            < Card className='image-box card'>
                                <Card.Body>
                                    <img className="center" alt="foo" src='https://rukminim1.flixcart.com/image/416/416/k0plpjk0/cases-covers/back-cover/3/t/k/flipkart-smartbuy-fksb-c-rel-xt-tra-original-imafkfezvfuvtyfq.jpeg?q=70' />
                                </Card.Body>
                                <p className='product-name-on-card'>SmartBuy Back Cover for Realme XT</p>
                                <p className='product-price-on-card'>Price: $120</p>
                            </Card>
                        </Col>

                        <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                            < Card className='image-box card'>
                                <Card.Body>
                                    <img className="center" alt="foo" src='https://rukminim1.flixcart.com/image/416/416/k0plpjk0/cases-covers/back-cover/3/t/k/flipkart-smartbuy-fksb-c-rel-xt-tra-original-imafkfezvfuvtyfq.jpeg?q=70' />
                                </Card.Body>
                                <p className='product-name-on-card'>SmartBuy Back Cover for Realme XT</p>
                                <p className='product-price-on-card'>Price: $120</p>
                            </Card>
                        </Col>

                        <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                            < Card className='image-box card'>
                                <Card.Body>
                                    <img className="center" alt="foo" src='https://rukminim1.flixcart.com/image/416/416/k0plpjk0/cases-covers/back-cover/3/t/k/flipkart-smartbuy-fksb-c-rel-xt-tra-original-imafkfezvfuvtyfq.jpeg?q=70' />
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

export default featureProduct
