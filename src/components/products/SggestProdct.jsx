import React, { Component } from 'react'
import { Fragment } from 'react'
import {Container,Row,Col,Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import withRouter from '../../withRouter'
import axios from 'axios'
import AppUrl from '../../api/AppUrl';
import { ToastContainer, toast } from 'react-toastify';


class SggestProdct extends Component {

constructor() {
    super();
    this.state ={
        suggestProducts:[],
        retries: 0,
        loaderDiv: "",
        mainDiv: "d-none",
    }
}


fetchData = () => {
    let product_id = this.props.params.product_id

    axios.get(AppUrl.SuggestProducts(product_id)).then(response => {
        let statuscode = response.status;
        if (statuscode == 200) {
            let suggestProducts = response.data;
            this.setState({ suggestProducts:suggestProducts, loaderDiv: "d-none", mainDiv: "" })
        } else {
            this.handleFetchError();
        }
    }).catch(error => {
        this.handleFetchError();
    })

}


handleFetchError = () => {
    const { retries } = this.state;
    if (this.state.retries === 0) {
        setTimeout(() => {
            this.setState({ retries: retries + 1 });
            this.fetchData();
        }, 60000)

    } else {
        // Subsequent retries after 1 minute
        setTimeout(() => {
            this.setState({ retries: retries + 1 });
            this.fetchData();
        }, 180000);
    }
    if (retries === 0) {
        toast.error(
            "It looks like there was a problem retrieving the Products"
        );
    }
};

componentDidMount() {
    this.fetchData();
}


    render() {
        const suggestProducts = this.state.suggestProducts;
        const data = suggestProducts.map((suggestProducts, i) =>{
            if (suggestProducts.discount_price === 'na') {
                return  <Col key={i.toString} className="p-1" xl={2} lg={2} md={2} sm={4} xs={6}>
                <Link className='text-link' to={"/singleproductdetails/"+ suggestProducts.id}>
                    <Card className="image-box card shadow">
                        <img className="center" src={suggestProducts.product_image} />
                        <Card.Body>
                            <p className="product-name-on-card">{suggestProducts.product_title}</p>
                            <p className="product-price-on-card">Price : $120</p>

                        </Card.Body>
                    </Card>
                </Link>
            </Col>

            }else {
                return <Col key={i.toString} className="p-1" xl={2} lg={2} md={2} sm={4} xs={6}>
                <Link className='text-link' to={"/singleproductdetails/"+ suggestProducts.id}>
                    <Card className="image-box card shadow">
                        <img className="center" src={suggestProducts.product_image} />
                        <Card.Body>
                            <p className="product-name-on-card">{suggestProducts.product_title}</p>
                            <p className='product-price-on-card'>Rs: <strike className="text-secondary">{suggestProducts.product_price}</strike> {suggestProducts.discount_price}</p>


                        </Card.Body>
                    </Card>
                </Link>
            </Col>
            }
        })

        return (
            <Fragment>
                <Container className="text-center" fluid={true}>
                    <div className="section-title text-center mb-55"><h2>YOU MAY ALSO LIKE </h2>
                        <p>Some Of Our Exclusive Collection, You May Like</p>
                    </div>

                    <div className={this.state.loaderDiv}>
                    <div class="ph-item">
                                    <div class="ph-col-12">
                                        <div class="ph-row">
                                            <div class="ph-col-4"></div>
                                            <div class="ph-col-8 empty"></div>
                                            <div class="ph-col-6"></div>
                                            <div class="ph-col-6 empty"></div>
                                            <div class="ph-col-12"></div>
                                            <div class="ph-col-12"></div>
                                            <div class="ph-col-12"></div>
                                            <div class="ph-col-12"></div>
                                            <div class="ph-col-12"></div>
                                        </div>
                                    </div>
                                </div>
                    </div>
                    <div className={this.state.mainDiv}>
                        <Row>
                            {data}
                        </Row>

                    </div>


                </Container>
            </Fragment>
        )
    }
}

export default withRouter(SggestProdct)
