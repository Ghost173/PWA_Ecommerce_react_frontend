import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios'
import AppUrl from '../../api/AppUrl';
import 'react-toastify/dist/ReactToastify.css';
import LoadinAnimation from '../../validation/LoadinAnimation';
import { Link } from 'react-router-dom';

class Collection extends Component {

    constructor() {
        super();
        this.state = {
            collectionProducts: [],
            loaderDiv: "",
            mainDiv: "d-none",
            error: ''
        }
    }

    componentDidMount() {
        axios.get(AppUrl.ProductsCollections).then(response => {
            let statuscode = response.status;
            if (statuscode == 200) {
                this.setState({ collectionProducts: response.data, loaderDiv: "d-none", mainDiv: "" })
            } else {
                toast.error("Something went wrong please try agin later")
            }
        }).catch(error => {
            setTimeout(() => {
                toast.error("It looks like there was a problem retrieving the Products collection. Please contact support if the problem persists");
            }, 3000); // wait for 3 seconds before showing the error message
            this.setState({ error: "fail to get api data" })

        })
    }


    render() {

        const colletionsproductslist = this.state.collectionProducts;

        const data = colletionsproductslist.map((colletionsproductslist, i) => {

            if (colletionsproductslist.discount_price === 'na') {
                return <Col className='p-1' key={i.toString} xl={2} lg={2} md={2} sm={4} xs={6}>
                    <Link className='text-link' to={"/singleproductdetails/"+ colletionsproductslist.id}>
                    <Card className='image-box card w-100 shadow'>
                        <Card.Body>
                            <img className="center w-75" alt="foo" src={colletionsproductslist.product_image} />
                        </Card.Body>
                        <p className='product-name-on-card'>{colletionsproductslist.product_title}</p>
                        <p className='product-price-on-card'>Rs: {colletionsproductslist.product_price}</p>
                    </Card>
                    </Link>
                   
                </Col>
            } else {
                return <Col className='p-1' key={i.toString} xl={2} lg={2} md={2} sm={4} xs={6}>
                    <Link className='text-link' to={"/singleproductdetails/"+ colletionsproductslist.id}>
                    <Card className='image-box card w-100 shadow'>
                        <Card.Body>
                            <img className="center w-75" alt="foo" src={colletionsproductslist.product_image} />
                        </Card.Body>
                        <p className='product-name-on-card'>{colletionsproductslist.product_title}</p>
                        <p className='product-price-on-card'>Rs: <strike className="text-secondary">{colletionsproductslist.product_price}</strike> {colletionsproductslist.discount_price}</p>
                    </Card>
                    </Link>
                   
                </Col>
            }


        })

        return (
            <Fragment>
                <Container className="text-center" fluid={true}>
                    <div className="section-title text-center mb-55">
                        <h2>PRODUCT COLLETIONS</h2>
                        <p>Some of Our Exclusive Collection, You May like!</p>

                    </div>

                    <div>

                        <div className={this.state.loaderDiv}>
                            <LoadinAnimation />
                        </div>

                    </div>

                    <div className={this.state.mainDiv}>
                        <Row>
                            {data}
                        </Row>
                    </div>


                </Container>
            </Fragment >
        )
    }
}

export default Collection
