import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const Projects = () => {
    return (
        <div id="projects">
            <div className="projects">
            <h1 className="pt-5 text-center font-details-b pb-3">PROJECTS</h1>
            <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={4}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Card style={{ width: '18rem' }}>
               
                    <Card.Img variant="top" src="https://miro.medium.com/max/750/1*1gRUS0EnV0LAc7kVAx1n2w.png" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                </Card>         
              </Row>
            </Col>
              <Col>
                <Row>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://images.idgesg.net/images/article/2017/10/wireless_network_internet_of_things_iot_thinkstock_853701554-100739367-large.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                </Card>    

                </Row>
              </Col>
              </Row>
              </Container>
              </div>
            </div>
    );
};



export default Projects;