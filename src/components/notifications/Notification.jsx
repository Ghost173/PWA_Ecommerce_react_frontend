import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap'
import axios from 'axios'
import AppUrl from '../../api/AppUrl';
import { ToastContainer, toast } from 'react-toastify';

class Notification extends Component {

    constructor() {
        super();
        this.state = {
            show: false,
            notificationData: [],
            retries: 0,
            loaderDiv: "",
            mainDiv: "d-none",
            Notificationmsg: "",
            Notificationtitle: "",
            Notificationdate: ""

        }
    }

    handleClose = () => {
        this.setState({ show: false })
    };
    handleShow = (event) => {
        this.setState({ show: true });
        let Notificationmsg = event.target.getAttribute("data-message")
        let Notificationtitle = event.target.getAttribute("data-title")
        let Notificationdate = event.target.getAttribute("data-date")
        this.setState({
            Notificationmsg: Notificationmsg,
            Notificationtitle: Notificationtitle,
            Notificationdate: Notificationdate
        })

    }

    fetchData = () => {
        axios
            .get(AppUrl.Notifications)
            .then((response) => {
                let statuscode = response.status;
                if (statuscode == 200) {
                    this.setState({
                        notificationData: response.data,
                        loaderDiv: "d-none",
                        mainDiv: "",
                        retries: 0, // Reset the retries count when the request succeeds

                    });

                } else {
                    this.handleFetchError();
                }
            })
            .catch((error) => {
                this.handleFetchError();
            });
    };

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
                "It looks like there was a problem retrieving the Notifications"
            );
        }
    };

    componentDidMount() {
        this.fetchData();
    }

    render() {

        const notificationList = this.state.notificationData;
        const data = notificationList.map((notificationData, i) => {
            return <Col className=" p-1 " md={6} lg={6} sm={12} xs={12} key={i.toString}>
                <Card  className="notification-card">
                    <Card.Body>
                        <h6> {notificationData.title}</h6>
                        <p className="py-1  px-0 text-primary m-0"><i className="fa  fa-bell"></i>   Date:{notificationData.date} | Status: Unread</p>
                        <Button onClick={this.handleShow} data-title={notificationData.title}
                            data-date={notificationData.date}
                            data-message={notificationData.message}
                            className='btn btn-warning'>Details</Button>
                    </Card.Body>
                </Card>
            </Col>
        })


        return (
            <Fragment>
                <Container className="TopSection">

                    <div>
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
                    </div>

                </Container>


                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <h6><i className="fa fa-bell"></i> Date:{this.state.Notificationdate}</h6>
                    </Modal.Header>
                    <Modal.Body>
                        <h6>{this.state.Notificationtitle}</h6>
                        <p>
                        {this.state.Notificationmsg}
                        </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Fragment>
        )
    }
}

export default Notification
