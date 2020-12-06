import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from 'react-bootstrap/Modal';
import 'reactjs-popup/dist/index.css';
import Button from 'react-bootstrap/Button';
import './projects.css';
import Image from "react-bootstrap/Image";

import { skills } from "./projects-icons";

const Projects = () => {
  const [modalShow, setModalShow] = React.useState(false);

    return (
        <div id="projects">
            <div className="projects">
            <h1 className="pt-5 text-center font-details-b pb-3">PROJECTS</h1>
            <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={4}>
              <Row className="justify-content-center mb-2 mr-2 ">
              <Card style={{ width: '20rem', height:'20rem' }} className="focus mt-2 mb-2">
               
               <Card.Img variant="top" src="https://miro.medium.com/max/750/1*1gRUS0EnV0LAc7kVAx1n2w.png" height="170"/>
                  <Card.Body>
                       <Card.Title className = "body-title-style">UniLink system - Java FX UI Implementation </Card.Title>
                  </Card.Body>
                  <Card.Body>
                  <Button variant="link" style={{ textDecoration: 'none' }} onClick={() => setModalShow(true)}>
        Know More
      </Button>

      <MyVerticallyCenteredModalJFX
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
                   </Card.Body>
           </Card>         
              </Row>
            </Col>
              <Col xs={12} md={4}>
                <Row className="justify-content-center mb-2 mr-2 ">
                <Card style={{ width: '20rem', height:'20rem' }} className="focus mt-2 mb-2">
                    <Card.Img variant="top" src="https://images.idgesg.net/images/article/2017/10/wireless_network_internet_of_things_iot_thinkstock_853701554-100739367-large.jpg" height="170"/>
                        <Card.Body>
                          <Card.Title className = "body-title-style">Car Parking Reservation using Cloud Environment </Card.Title>
                        </Card.Body>
                        <Card.Body>
                            <Button variant="link" style={{ textDecoration: 'none' }} onClick={() => setModalShow(true)}>
        Know More
      </Button>

      <MyVerticallyCenteredModalJFX
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
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

function MyVerticallyCenteredModalJFX(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className = "modal-title">
          Project Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className = "modal-body">
        <h4 className = "body-style-desc">Description</h4>
        <hr/>
        <p className="modal-desc">
          A complete system for University students where students can post an Event, post a Sale, post a Job. Anyone in 
          the university can reply to those posts with the corresponding values. 
        </p>
        <h4 className = "body-style-features">Features</h4>
          <hr/>
        <p className="modal-desc">
          <li><strong>Register</strong> as a new user.</li>
          <li><strong>Sign in</strong> as an existing user.  </li>             
          <li><strong>Only admin</strong> can delete or modify the post.  </li> 
          <li><strong>Anyone</strong> can reply for a post.  </li>   
          <li>All the posts and corresponding reply information are stored in the <strong>Database and retrieved </strong>
            even after the system shutdown.  </li>         
          <li>All the posts and corresponding reply information are also stored in text files for future reference.  </li>     
        </p>
        <h4 className = "body-style-tech">Technologies used</h4>
        <hr/>
        <div className="card-text d-flex justify-content-start flex-column">
        {skills.frontend.map((skill, index) => (
                    <span className="p-2" key={index}>
                      <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                        <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                      </a>
                    </span>
                  ))}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}



export default Projects;