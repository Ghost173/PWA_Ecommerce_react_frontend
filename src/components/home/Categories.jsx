import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import axios from 'axios'
import AppUrl from '../../api/AppUrl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';



class Categories extends Component {

    constructor() {
        super();
        this.state = {
            MenuData: []
        }
    }

    componentDidMount() {
        axios.get(AppUrl.AllCategoryDetails).then(response => {
            let statuscode = response.status;
            if (statuscode == 200) {
                this.setState({ MenuData: response.data })
            } else {
                toast.error("Something went wrong please try agin later")
            }
        }).catch(error => {
            toast.error("It looks like there was a problem retrieving the category data. Please contact support if the problem persists")
        })
    }

    render() {

        const categorylist = this.state.MenuData;
        let mydata;

        if (categorylist.length) {
            mydata = categorylist.map((categorylist, i) => {
                return (
                    <Col key={i.toString} className='p-0' xl={2} lg={2} md={2} sm={6} xs={6}>
                        <Card className='h-100 w-100 text-center'>
                            <Card.Body>
                                <img className="center" alt="foo" src={categorylist.category_image} />
                            </Card.Body>
                            <h5 className='category-name'>{categorylist.category_name}</h5>
                        </Card>
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
                    <Row>
                        {mydata}
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default Categories
