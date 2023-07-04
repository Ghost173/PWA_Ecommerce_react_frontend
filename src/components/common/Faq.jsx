import React, { Component, Fragment } from 'react'
import { Container } from 'react-bootstrap';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


class Faq extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Can I cancel my order?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                            Yes, you can cancel your order as long as it has not been shipped yet. 
                            Please contact our customer support for assistance with order cancellations.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography>How long does shipping take?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                            The shipping time depends on your location and the shipping method chosen during checkout. 
                            We strive to deliver orders within 3-7 business days.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3a-content"
                            id="panel3a-header"
                        >
                            <Typography>What payment methods do you accept?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                            We accept various payment methods, including credit cards, PayPal, and bank transfers. 
                            You can choose your preferred payment option during the checkout process.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel4a-content"
                            id="panel4a-header"
                        >
                            <Typography> How can I track my order?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                            Once your order is shipped, we will provide you with a tracking number and a link to track your package. 
                            You can enter the tracking number on our website to get real-time updates on the status of your delivery.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel5a-content"
                            id="panel5a-header"
                        >
                            <Typography>What is your return policy?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                            We have a hassle-free return policy. If you are not satisfied with your purchase, you can return the item within 30 days of delivery. 
                            Please refer to our Returns and Refunds page for detailed instructions on how to initiate a return.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    


                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel6a-content"
                            id="panel6a-header"
                        >
                            <Typography>Can I change my shipping address after placing an order?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                            Unfortunately, we cannot change the shipping address once the order has been placed.
                             Please ensure that you provide the correct shipping address during checkout to avoid any delivery issues.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel7a-content"
                            id="panel7a-header"
                        >
                            <Typography>How can I contact customer support?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                            You can reach our customer support team by emailing us at support@mydevdemo.xyz or by calling our toll-free number at 1-800-123-4567. 
                            Our dedicated team is available to assist you with any questions or concerns you may have.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    

                    
                    
                    
                </Container>

            </Fragment>
        )
    }
}

export default Faq
