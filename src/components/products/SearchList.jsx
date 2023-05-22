import React, { Component, Fragment } from 'react'
import axios from 'axios'
import AppUrl from '../../api/AppUrl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import withRouter from '../../withRouter'



class SearchList extends Component {
    constructor({ }) {

        super();
        this.state = {
            searchproduct: [],
            key: "",
            retries: 0,
        }
    }

    componentDidMount() {
        window.scroll(0, 0);
        let key = this.props.params.key
        this.setState({ key: key })
        this.fetchData()

    }

    fetchData = () => {
        let key = this.props.params.key
        axios.get(AppUrl.ProductsSearch(key)).then(response => {
            let statuscode = response.status;
            if (statuscode == 200) {
                let searchproduct = response.data;
                this.setState({ searchproduct: searchproduct })
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

    componentDidUpdate(prevProps) {
        if (prevProps.params.key !== this.props.params.key) {
            this.fetchData();
            window.scrollTo(0, 0); // Scroll to the top of the page
        }
    }


    render() {
        let key = this.props.params.key
        const searchProducts = this.state.searchproduct;
        const data = searchProducts.map((searchProducts, i) => {

            if (searchProducts.discount_price === 'na') {
                return <Col className='p-0' key={i.toString} xl={3} lg={3} md={3} sm={6} xs={6}>
                    <Link className='text-link' to={"/singleproductdetails/" + searchProducts.id}>
                        <Card className='image-box card w-100'>
                            <Card.Body>
                                <img className="center w-75" alt="foo" src={searchProducts.product_image} />
                            </Card.Body>
                            <p className='product-name-on-card'>{searchProducts.product_title}</p>
                            <p className='product-price-on-card'>Rs: {searchProducts.product_price}</p>
                        </Card>
                    </Link>

                </Col>
            } else {
                return <Col className='p-0' key={i.toString} xl={3} lg={3} md={3} sm={6} xs={6}>
                    <Link className='text-link' to={"/singleproductdetails/" + searchProducts.id}>
                        <Card className='image-box card w-100'>
                            <Card.Body>
                                <img className="center w-75" alt="foo" src={searchProducts.product_image} />
                            </Card.Body>
                            <p className='product-name-on-card'>{searchProducts.product_title}</p>
                            <p className='product-price-on-card'>Rs: <strike className="text-secondary">{searchProducts.product_price}</strike> {searchProducts.discount_price}</p>
                        </Card>
                    </Link>

                </Col>
            }
        })

        return (
            <Fragment>
                   <Container className="text-center" fluid={true}>
                    <div className="section-title text-center mb-55">
                        <h2>{key}</h2>
                        <p>Based on the Search items will be display</p>

                    </div>
                
                        <Row>
                            {data}
                        </Row>



                </Container>
            </Fragment>
        )
    }
}

export default withRouter(SearchList)
