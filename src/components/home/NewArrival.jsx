import React, { Component, Fragment } from 'react'
import { Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


class NewArrival extends Component {

constructor(props) {
    super(props);
    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
}
next() {
    this.slider.slickNext();
}

previous() {
    this.slider.slickPrev();
}

    render() {

        var settings = {
            dots: false,
            infinite: false,
            speed: 500,
            autoplay: true,
            autoplaySpeed:3000,
            slidesToShow: 4,
            slidesToScroll: 1,
            initialSlide: 0,
            arrows: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        return (
            <Fragment>
                <Container className="text-center" fluid={true}>
                    <div className="section-title text-center mb-55">
                        <h2>NEW ARRIVALS &nbsp;
                            <a className='btn btn-sm ml-2 site-btn' onClick={this.previous}><i className='fa fa-angle-left'></i></a>
                            &nbsp;
                            <a className='btn btn-sm ml-2 site-btn' onClick={this.next}><i className='fa fa-angle-right'></i></a>
                        </h2>
                        <p>Some of Our Exclusive Collection, You May like!</p>
                    </div>
                    <Row>
                        <Slider ref={c=>(this.slider=c)} {...settings}>
                            <div>
                            <Card className='image-box card w-100'>
                                <Card.Body>
                                    <img className="center w-75" alt="foo" src='https://rukminim1.flixcart.com/image/416/416/k0plpjk0/cases-covers/back-cover/3/t/k/flipkart-smartbuy-fksb-c-rel-xt-tra-original-imafkfezvfuvtyfq.jpeg?q=70' />
                                </Card.Body>
                                <p className='product-name-on-card'>SmartBuy Back Cover for Realme XT</p>
                                <p className='product-price-on-card'>Price: $120</p>
                            </Card>
                            </div>
                            <div>
                            <Card className='image-box card w-100'>
                                <Card.Body>
                                    <img className="center w-75" alt="foo" src='https://rukminim1.flixcart.com/image/416/416/k0plpjk0/cases-covers/back-cover/3/t/k/flipkart-smartbuy-fksb-c-rel-xt-tra-original-imafkfezvfuvtyfq.jpeg?q=70' />
                                </Card.Body>
                                <p className='product-name-on-card'>SmartBuy Back Cover for Realme XT</p>
                                <p className='product-price-on-card'>Price: $120</p>
                            </Card>
                            </div>
                            <div>
                            <Card className='image-box card w-100'>
                                <Card.Body>
                                    <img className="center w-75" alt="foo" src='https://rukminim1.flixcart.com/image/416/416/k0plpjk0/cases-covers/back-cover/3/t/k/flipkart-smartbuy-fksb-c-rel-xt-tra-original-imafkfezvfuvtyfq.jpeg?q=70' />
                                </Card.Body>
                                <p className='product-name-on-card'>SmartBuy Back Cover for Realme XT</p>
                                <p className='product-price-on-card'>Price: $120</p>
                            </Card>
                            </div>
                            <div>
                            <Card className='image-box card w-100'>
                                <Card.Body>
                                    <img className="center w-75" alt="foo" src='https://rukminim1.flixcart.com/image/416/416/k0plpjk0/cases-covers/back-cover/3/t/k/flipkart-smartbuy-fksb-c-rel-xt-tra-original-imafkfezvfuvtyfq.jpeg?q=70' />
                                </Card.Body>
                                <p className='product-name-on-card'>SmartBuy Back Cover for Realme XT</p>
                                <p className='product-price-on-card'>Price: $120</p>
                            </Card>
                            </div>
                            <div>
                            <Card className='image-box card w-100'>
                                <Card.Body>
                                    <img className="center w-75" alt="foo" src='https://rukminim1.flixcart.com/image/416/416/k0plpjk0/cases-covers/back-cover/3/t/k/flipkart-smartbuy-fksb-c-rel-xt-tra-original-imafkfezvfuvtyfq.jpeg?q=70' />
                                </Card.Body>
                                <p className='product-name-on-card'>SmartBuy Back Cover for Realme XT</p>
                                <p className='product-price-on-card'>Price: $120</p>
                            </Card>
                            </div>
                            <div>
                            <Card className='image-box card w-100'>
                                <Card.Body>
                                    <img className="center w-75" alt="foo" src='https://rukminim1.flixcart.com/image/416/416/k0plpjk0/cases-covers/back-cover/3/t/k/flipkart-smartbuy-fksb-c-rel-xt-tra-original-imafkfezvfuvtyfq.jpeg?q=70' />
                                </Card.Body>
                                <p className='product-name-on-card'>SmartBuy Back Cover for Realme XT</p>
                                <p className='product-price-on-card'>Price: $120</p>
                            </Card>
                            </div>
                            <div>
                            <Card className='image-box card w-100'>
                                <Card.Body>
                                    <img className="center w-75" alt="foo" src='https://rukminim1.flixcart.com/image/416/416/k0plpjk0/cases-covers/back-cover/3/t/k/flipkart-smartbuy-fksb-c-rel-xt-tra-original-imafkfezvfuvtyfq.jpeg?q=70' />
                                </Card.Body>
                                <p className='product-name-on-card'>SmartBuy Back Cover for Realme XT</p>
                                <p className='product-price-on-card'>Price: $120</p>
                            </Card>
                            </div>
                            <div>
                            <Card className='image-box card w-100'>
                                <Card.Body>
                                    <img className="center w-75" alt="foo" src='https://rukminim1.flixcart.com/image/416/416/k0plpjk0/cases-covers/back-cover/3/t/k/flipkart-smartbuy-fksb-c-rel-xt-tra-original-imafkfezvfuvtyfq.jpeg?q=70' />
                                </Card.Body>
                                <p className='product-name-on-card'>SmartBuy Back Cover for Realme XT</p>
                                <p className='product-price-on-card'>Price: $120</p>
                            </Card>
                            </div>
                        </Slider>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default NewArrival
