import axios from 'axios';
import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import AppUrl from '../../api/AppUrl';

export class ReviewList extends Component {

    constructor() {
        super();
        this.state = {
            ReviewListData: []
        }
    }

    componentDidUpdate(prevProps) {
        const product_id = this.props.product_id
        if (prevProps.product_id !== product_id) {
            this.fetchData();
            window.scrollTo(0, 0); // Scroll to the top of the page
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        const product_id = this.props.product_id
        axios.get(AppUrl.ProductReviewsList(product_id))
            .then(response => {
                this.setState({ ReviewListData: response.data })
            }).catch(error => {

            })
    }



    render() {
        const Mylist = this.state.ReviewListData
        let mydata;
        if (Mylist.length > 0) {
            mydata = Mylist.map((mydata, i) => {

                if (mydata.reviewer_rating === "1") {
                    return <div>
                        <p className=" p-0 m-0"><span className="Review-Title">{mydata.reviewer_name}</span>&nbsp; 
                            <span className="text-success"><i className="fa fa-star"></i> </span> </p>
                        <p>{mydata.reviewer_comments}</p>

                    </div>
                } else if (mydata.reviewer_rating === "2") {
                    return <div>
                        <p className=" p-0 m-0"><span className="Review-Title">{mydata.reviewer_name}</span>&nbsp; 
                            <span className="text-success"><i className="fa fa-star"></i><i className="fa fa-star"></i> </span> </p>
                        <p>{mydata.reviewer_comments}</p>

                    </div>

                }
                else if (mydata.reviewer_rating === "3") {
                    return <div>
                        <p className=" p-0 m-0"><span className="Review-Title">{mydata.reviewer_name}</span>&nbsp; 
                            <span className="text-success"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i> </span> </p>
                        <p>{mydata.reviewer_comments}</p>

                    </div>
                }
                else if (mydata.reviewer_rating === "4") {
                    return <div>
                        <p className=" p-0 m-0"><span className="Review-Title">{mydata.reviewer_name}</span>&nbsp; 
                            <span className="text-success"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i> </span> </p>
                        <p>{mydata.reviewer_comments}</p>

                    </div>

                }
                else if (mydata.reviewer_rating === "5") {
                    return <div>
                        <p className=" p-0 m-0"><span className="Review-Title">{mydata.reviewer_name}</span>&nbsp; 
                            <span className="text-success"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i> </span> </p>
                        <p>{mydata.reviewer_comments}</p>

                    </div>
                }

            })
        } else {
        }

        return (
            <Fragment>
                <Col className="review-container" md={6} lg={6} sm={12} xs={12}>
                    <h6 className="mt-2">REVIEWS</h6>
                    {mydata}
                </Col>
            </Fragment>
        )
    }
}

export default ReviewList
