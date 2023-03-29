import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';

class Categories extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center" fluid={true}>
                    <div className="section-title text-center mb-55">
                        <h2>CATEGORIES</h2>
                        <p>Some of Our Exclusive Collection, You May like!</p>

                    </div>
                    <Row>
                        <Col key={1} xl={6} lg={6} md={2} sm={12} xs={12}>
                            <Row>
                                <Col className='p-0' key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                                    < Card className='h-100 w-100 text-center'>
                                        <Card.Body>
                                            <img className="center" alt="foo" src='https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100' />
                                        </Card.Body>
                                        <h5 className='category-name'>Electro</h5>
                                    </Card>
                                </Col>
                                <Col  className='p-0' key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                                    < Card className='h-100 w-100 text-center'>
                                        <Card.Body>
                                            <img className="center" alt="foo" src='https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100' />
                                        </Card.Body>
                                        <h5 className='category-name'>Electro</h5>
                                    </Card>
                                </Col>
                                <Col  className='p-0' key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                                    < Card className='h-100 w-100 text-center'>
                                        <Card.Body>
                                            <img className="center" alt="foo" src='https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100' />
                                        </Card.Body>
                                        <h5 className='category-name'>Electro</h5>
                                    </Card>
                                </Col>
                                <Col  className='p-0' key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                                    < Card className='h-100 w-100 text-center'>
                                        <Card.Body>
                                            <img className="center" alt="foo" src='https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100' />
                                        </Card.Body>
                                        <h5 className='category-name'>Electro</h5>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>

                        <Col key={1} xl={6} lg={6} md={2} sm={12} xs={12}>
                            <Row>
                                <Col className='p-0' key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                                    < Card className='h-100 w-100 text-center'>
                                        <Card.Body>
                                            <img className="center" alt="foo" src='https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100' />
                                        </Card.Body>
                                        <h5 className='category-name'>Electro</h5>
                                    </Card>
                                </Col>
                                <Col  className='p-0' key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                                    < Card className='h-100 w-100 text-center'>
                                        <Card.Body>
                                            <img className="center" alt="foo" src='https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100' />
                                        </Card.Body>
                                        <h5 className='category-name'>Electro</h5>
                                    </Card>
                                </Col>
                                <Col  className='p-0' key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                                    < Card className='h-100 w-100 text-center'>
                                        <Card.Body>
                                            <img className="center" alt="foo" src='https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100' />
                                        </Card.Body>
                                        <h5 className='category-name'>Electro</h5>
                                    </Card>
                                </Col>
                                <Col  className='p-0' key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                                    < Card className='h-100 w-100 text-center'>
                                        <Card.Body>
                                            <img className="center" alt="foo" src='https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100' />
                                        </Card.Body>
                                        <h5 className='category-name'>Electro</h5>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default Categories
