import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import './contact.css';
const contact =() => {
    return (
        
    <div id="contact">
            <h1 className="pt-5 text-center font-details-b pb-3">CONTACT ME</h1>
            <Container>
                <Row className="pt-3 pb-5 align-items-center">
                    <Col xs={12} md={6}>
                        <Row className="justify-content-center mb-2 mr-2">
                            <i class="fas fa-phone-alt fa-3x fa-color"  aria-hidden="true" ></i>          
                        </Row>
                        <Row className="justify-content-center pt-2 mb-2 mr-2 contact-details">
                            <strong>&nbsp;Phone:</strong> 
                        </Row>
                        <Row className="justify-content-center mb-2 mr-2 contact-details">
                            (+61) 432 187 505 
                        </Row>
                    </Col>
                    <Col xs={12} md={6}>
                        <Row className="justify-content-center mb-2 mr-2">
                            <i class="fas fa-envelope fa-3x fa-color"></i>          
                        </Row>
                        <Row className="justify-content-center pt-2 mb-2 mr-2 contact-details">
                            <strong>&nbsp;E-Mail:</strong> 
                        </Row>
                        <Row className="justify-content-center mb-2 mr-2 contact-details">
                            jeyakaran30@gmail.com 
                        </Row>
                    </Col>
                </Row>
            </Container>
    </div>
    );
};



export default contact;