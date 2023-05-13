import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import axios from 'axios'
import AppUrl from '../../api/AppUrl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import { Link } from 'react-router-dom';



class Categories extends Component {

    constructor() {
        super();
        this.state = {
            MenuData: [],
            loaderDiv: "",
            mainDiv: "d-none"
        }
    }

    componentDidMount() {
        axios.get(AppUrl.AllCategoryDetails).then(response => {
            let statuscode = response.status;
            if (statuscode == 200) {
                this.setState({ MenuData: response.data, loaderDiv: "d-none", mainDiv: "" })
            } else {
                toast.error("Something went wrong please try agin later")
            }
        }).catch(error => {
            setTimeout(() => {
                toast.error("It looks like there was a problem retrieving the category data. Please contact support if the problem persists")
            }, 3000); // wait for 3 seconds before showing the error message
        })
    }

    render() {

        const categorylist = this.state.MenuData;
        let mydata;

        if (categorylist.length) {
            mydata = categorylist.map((categorylist, i) => {
                return (
                    <Col key={i.toString} className='p-0' xl={2} lg={2} md={2} sm={6} xs={6}>
                        <Link to={"/productslistbycategory/"+categorylist.id}>
                            <Card className='h-100 w-100 text-center'>
                                <Card.Body>
                                    <img className="center" alt="foo" src={categorylist.category_image} />
                                </Card.Body>
                                <h5 className='category-name'>{categorylist.category_name}</h5>
                                <h5 className='category-name'>{categorylist.id}</h5>
                            </Card>
                        </Link>

                    </Col>
                )
            });
        } else {
            mydata = (
                <Col className='p-0 text-center' fluid={true}>
                    <Alert variant="danger">
                        It looks like there was a problem retrieving the category data. Please
                        <Alert.Link href="/contact"> Contact support </Alert.Link>if the problem persists
                    </Alert>
                </Col>
            );
        }

        return (
            <Fragment>
                <Container className="text-center" fluid={true}>
                    <div className="section-title text-center mb-55">
                        <h2>CATEGORIES</h2>
                        <p>Some of Our Exclusive Collection, You May like!</p>

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
                            {mydata}
                        </Row>

                    </div>



                </Container>
            </Fragment>
        )
    }
}

export default Categories
