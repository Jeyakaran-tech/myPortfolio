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
  const [modalShow1, setModalShow1] = React.useState(false);
  const [modalShow2, setModalShow2] = React.useState(false);
  const [modalShow3, setModalShow3] = React.useState(false);


  const handleClose1 = () => setModalShow1(false);
  const handleClose2 = () => setModalShow2(false);
  const handleClose3 = () => setModalShow3(false);



    return (
        <div id="projects">
            <div className="projects">
              <h1 className="pt-5 text-center font-details-b pb-3">PROJECTS</h1>
                <Container>
                  <Row className="pt-3 pb-5 align-items-center">
                    <Col xs={12} md={4}>
                      {/*JavaFX project*/}
                      <Row className="justify-content-center mb-2 mr-2 ">
                        <Card style={{ width: '20rem', height:'20rem' }} className="focus mt-2 mb-2">
                          <Card.Img variant="top" src="https://www.akuaroworld.com/wp-content/uploads/2018/09/JAVA-FX-11.png" height="170"/>
                            <Card.Body>
                              <Card.Title className = "body-title-style">UniLink system - Java FX UI Implementation </Card.Title>
                            </Card.Body>
                            <Card.Body>
                              <Button variant="link" style={{ textDecoration: 'none' }} onClick={() => setModalShow1(true)}>
                                Know More
                              </Button>
                              <Modal
                              show={modalShow1}
                              size="lg"
                              aria-labelledby="contained-modal-title-vcenter"
                              centered
                              scrollable="FALSE"
                              onHide={handleClose1}>
                                <Modal.Header closeButton >
                                  <Modal.Title id="contained-modal-title-vcenter" className = "modal-title">
                                    PROJECT DETAILS
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
                                <Modal.Footer >
                                  <Button onClick={()=>setModalShow1(false)}>Close</Button>
                                  <Button onClick={()=> window.open("https://github.com/Jeyakaran-tech/JAVA_FX-project")}>GitHub Link</Button>
                                </Modal.Footer>
                            </Modal>
                          </Card.Body>
                        </Card>         
                      </Row>
                    </Col>
                    <Col xs={12} md={4}>
                    {/*IOT Project*/}
                    <Row className="justify-content-center mb-2 mr-2 ">
                      <Card style={{ width: '20rem', height:'20rem' }} className="focus mt-2 mb-2">
                        <Card.Img variant="top" src="https://images.idgesg.net/images/article/2017/10/wireless_network_internet_of_things_iot_thinkstock_853701554-100739367-large.jpg" height="170"/>
                          <Card.Body>
                            <Card.Title className = "body-title-style">Car Parking Reservation using Cloud Environment </Card.Title>
                          </Card.Body>
                          <Card.Body>
                            <Button variant="link" style={{ textDecoration: 'none' }} onClick={() => setModalShow2(true)}>
                              Know More
                            </Button>
                            <Modal
                            show={modalShow2}
                            size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                            scrollable="FALSE"
                            onHide={handleClose2}
                            >
                              <Modal.Header closeButton>
                                <Modal.Title id="contained-modal-title-vcenter" className = "modal-title">
                                  PROJECT DETAILS
                                </Modal.Title>
                              </Modal.Header>
                              <Modal.Body className = "modal-body">
                                <h4 className = "body-style-desc">DESCRIPTION</h4>
                                <hr/>
                                <p className="modal-desc">
                                  A Prototype was developed to show an IOT environment where anyone can book the 
                                  parking slot through mobile application where the data flows through cloud environment to check the 
                                  status of the slot. The Payment gateway is also made available to make the customers pay through application.
                                </p>
                                <h4 className = "body-style-features">FEATURES</h4>
                                <hr/>
                                <p className="modal-desc">
                                  <li><strong>Register</strong> as a new user.</li>
                                  <li><strong>Book</strong> a parking slot.  </li>             
                                  <li><strong>Payment</strong> for the slot once booked.  </li> 
                                  <li><strong>Payment cancellation</strong> made available to a certain period.</li>   
                                  <li>When the vehicle enters the parking slot, then the user is verified upon entering OTP else the buzzer rings to
                                  notify unauthorized vehicle entry.  </li>         
                                </p>
                                <h4 className = "body-style-tech">Technologies used</h4>
                                <hr/>
                                <div className="card-text d-flex justify-content-start flex-column">
                                  {skills.IOT.map((skill, index) => (
                                    <span className="p-2" key={index}>
                                      <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                                        <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                                      </a>
                                    </span>
                                  ))}
                                </div>
                              </Modal.Body>
                              <Modal.Footer>
                                <Button onClick={()=>setModalShow2(false)}>Close</Button>
                              </Modal.Footer>
                            </Modal>
                          </Card.Body>
                        </Card>    
                      </Row>
                    </Col>
                  <Col xs={12} md={4}>

                {/*Portfolio*/}
                <Row className="justify-content-center mb-2 mr-2 ">
                <Card style={{ width: '20rem', height:'20rem' }} className="focus mt-2 mb-2">
                    <Card.Img variant="top" src="https://reactjs.org/logo-og.png" height="170"/>
                        <Card.Body>
                          <Card.Title className = "body-title-style">Personal Portfolio using React JS</Card.Title>
                        </Card.Body>
                        <Card.Body>
                            <Button variant="link" style={{ textDecoration: 'none' }} onClick={() => setModalShow3(true)}>
        Know More
      </Button>

<Modal
       show={modalShow3}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      scrollable="FALSE"
      onHide={handleClose3}

    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className = "modal-title">
          PROJECT DETAILS
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className = "modal-body">
        <h4 className = "body-style-desc">DESCRIPTION</h4>
        <hr/>
        <p className="modal-desc">
          Showcased my personal details into a portfolio website using <strong>React JS, React Bootstrap, Material UI, HTML ,CSS.</strong>
        </p>
        <h4 className = "body-style-tech">Technologies used</h4>
        <hr/>
        <div className="card-text d-flex justify-content-start flex-column">
        {skills.Folio.map((skill, index) => (
                    <span className="p-2" key={index}>
                      <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                        <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                      </a>
                    </span>
                  ))}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={()=>setModalShow3(false)}>Close</Button>
      </Modal.Footer>
    </Modal>
                        </Card.Body>
                </Card>    

                </Row>
              </Col>
              </Row>









{/*second row*/}
              <Row className="pt-3 pb-5 align-items-center">
                    <Col xs={12} md={4}>
                      {/*JavaFX project*/}
                      <Row className="justify-content-center mb-2 mr-2 ">
                        <Card style={{ width: '20rem', height:'20rem' }} className="focus mt-2 mb-2">
                          <Card.Img variant="top" src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/154514318/original/8b41a7962800d2e868833735d06e24d492c79893/develop-java-console-application.jpg" height="170"/>
                            <Card.Body>
                              <Card.Title className = "body-title-style">Console Application - Enrolment system </Card.Title>
                            </Card.Body>
                            <Card.Body>
                              <Button variant="link" style={{ textDecoration: 'none' }} onClick={() => setModalShow1(true)}>
                                Know More
                              </Button>
                              <Modal
                              show={modalShow1}
                              size="lg"
                              aria-labelledby="contained-modal-title-vcenter"
                              centered
                              scrollable="FALSE"
                              onHide={handleClose1}>
                                <Modal.Header closeButton >
                                  <Modal.Title id="contained-modal-title-vcenter" className = "modal-title">
                                    PROJECT DETAILS
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
                                <Modal.Footer >
                                  <Button onClick={()=>setModalShow1(false)}>Close</Button>
                                  <Button onClick={()=> window.open("https://github.com/Jeyakaran-tech/JAVA_FX-project")}>GitHub Link</Button>
                                </Modal.Footer>
                            </Modal>
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