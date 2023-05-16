import React, { Component, Fragment } from 'react'
import { Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios'
import AppUrl from '../../api/AppUrl';
import LoadinAnimation from '../../validation/LoadinAnimation';
import { Link } from 'react-router-dom';


class NewArrival extends Component {

    constructor(props) {
        super(props);
        this.previous = this.previous.bind(this);
        this.next = this.next.bind(this);
        this.state = {
            newArrivalProducts: [],
            loaderDiv: "",
            mainDiv: "d-none",
            error: '',
            loading: true,
            retries: 0,
        }
    }


    fetchData = () => {
        axios.get(AppUrl.NewArrivalProducts).then(response => {
            let statuscode = response.status;
            if (statuscode == 200) {
                this.setState({
                    newArrivalProducts: response.data,
                    loaderDiv: "d-none",
                    mainDiv: "",
                    retries: 0,

                })
            } else {
                this.handleFetchError();
            }
        }).catch(error => {
            this.handleFetchError();
            this.setState({ error: "fail to get api data" })

        })
    }

    handleFetchError = () => {
        if (this.state.retries === 0) {
            // Display the error message only if it's the first retry
            toast.error(
                "It looks like there was a problem retrieving the NewArrival Products. Please contact support if the problem persists"
            );
        }
        setTimeout(() => {
            this.setState({
                retries: this.state.retries + 1, // Increment the retries count
            });
            this.fetchData(); // Retry the request
        }, 9000);
    };

    componentDidMount() {
        this.fetchData();
    }


    next() {
        this.slider.slickNext();
    }

    previous() {
        this.slider.slickPrev();
    }

    render() {

        const newarrivalproductslist = this.state.newArrivalProducts;
        const data = newarrivalproductslist.map((newarrivalproductslist, i) => {
            if (newarrivalproductslist.discount_price === 'na') {
                return <div key={i.toString}>
                    <Link to={"/singleproductdetails/"+ newarrivalproductslist.id}>
                    <Card className='image-box card w-100'>
                        <Card.Body>
                            <img className="center w-75" alt="foo" src={newarrivalproductslist.product_image} />
                        </Card.Body>
                        <p className='product-name-on-card'>{newarrivalproductslist.product_title}</p>
                        <p className='product-price-on-card'>Rs: {newarrivalproductslist.product_price}</p>
                    </Card>
                    </Link>
                   
                </div>
            } else {
                return <div key={i.toString}>
                    <Link to={"/singleproductdetails/"+ newarrivalproductslist.id}>
                    <Card className='image-box card w-100'>
                        <Card.Body>
                            <img className="center w-75" alt="foo" src={newarrivalproductslist.product_image} />
                        </Card.Body>
                        <p className='product-name-on-card'> {newarrivalproductslist.product_title}</p>
                        <p className='product-price-on-card'>Rs: <strike>{newarrivalproductslist.product_price}</strike> {newarrivalproductslist.discount_price}</p>
                    </Card>
                    </Link>
                    
                </div>
            }


        });

        var settings = {
            dots: false,
            infinite: false,
            speed: 500,
            autoplay: true,
            autoplaySpeed: 3000,
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

                        <div className={this.state.loaderDiv}>
                            <LoadinAnimation />
                        </div>
                        <div className={this.state.mainDiv}>
                            <Slider ref={c => (this.slider = c)} {...settings}>



                                {data}
                            </Slider>
                        </div>

                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default NewArrival
