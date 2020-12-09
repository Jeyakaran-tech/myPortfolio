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
  const [modalShow4, setModalShow4] = React.useState(false);
  const [modalShow5, setModalShow5] = React.useState(false);
  const [modalShow6, setModalShow6] = React.useState(false);

  const [modalShow7, setModalShow7] = React.useState(false);
  const [modalShow8, setModalShow8] = React.useState(false);
  const [modalShow9, setModalShow9] = React.useState(false);


  const handleClose1 = () => setModalShow1(false);
  const handleClose2 = () => setModalShow2(false);
  const handleClose3 = () => setModalShow3(false);
  const handleClose4 = () => setModalShow4(false);
  const handleClose5 = () => setModalShow5(false);
  const handleClose6 = () => setModalShow6(false);

  const handleClose7 = () => setModalShow7(false);
  const handleClose8 = () => setModalShow8(false);
  const handleClose9 = () => setModalShow9(false);

    return (
        <div id="projects">
            <div className="projects">
              <h1 className="pt-5 text-center font-details-b pb-3">PROJECTS</h1>
                <Container>
                  <Row className="pt-3 pb-3 align-items-center">
                    <Col xs={12} md={4}>
                      {/*JavaFX project*/}
                      <Row className="justify-content-center mb-2 mr-2 ">
                        <Card style={{ width: '20rem', height:'20rem' }} className="focus mt-2 mb-2">
                          <Card.Img variant="top" src="https://www.akuaroworld.com/wp-content/uploads/2018/09/JAVA-FX-11.png" height="170" onClick={() => setModalShow1(true)} className="card-img"/>
                            <Card.Body>
                              <Card.Title className = "body-title-style">UniLink system - Java FX UI Implementation </Card.Title>
                            </Card.Body>
                            <Card.Body>
                              <Button variant="link" style={{ textDecoration: 'none',float: 'right' }} onClick={() => setModalShow1(true)}>
                                Know More...
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
                                  <h4 className = "body-style-desc">DESCRIPTION</h4>
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
                                <Button variant = "success" onClick={()=> window.open("https://github.com/Jeyakaran-tech/JAVA_FX-project")}>Source code</Button>
                                  <Button onClick={()=>setModalShow1(false)}>Close</Button>
                                </Modal.Footer>
                            </Modal>
                          </Card.Body>
                        </Card>         
                      </Row>
                    </Col>


                    <Col xs={12} md={4}>
                      {/*Java console project*/}
                      <Row className="justify-content-center mb-2 mr-2 ">
                        <Card style={{ width: '20rem', height:'20rem' }} className="focus mt-2 mb-2">
                          <Card.Img variant="top" src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/154514318/original/8b41a7962800d2e868833735d06e24d492c79893/develop-java-console-application.jpg" height="170" onClick={() => setModalShow4(true)} className="card-img"/>
                            <Card.Body>
                              <Card.Title className = "body-title-style">Console Application - Vehicle Management System </Card.Title>
                            </Card.Body>
                            <Card.Body>
                              <Button variant="link" style={{ textDecoration: 'none' ,float: 'right'}} onClick={() => setModalShow4(true)}>
                                Know More...
                              </Button>
                              <Modal
                              show={modalShow4}
                              size="lg"
                              aria-labelledby="contained-modal-title-vcenter"
                              centered
                              scrollable="FALSE"
                              onHide={handleClose4}>
                                <Modal.Header closeButton >
                                  <Modal.Title id="contained-modal-title-vcenter" className = "modal-title">
                                    PROJECT DETAILS
                                  </Modal.Title>
                                </Modal.Header>
                                <Modal.Body className = "modal-body">
                                  <h4 className = "body-style-desc">DESCRIPTION</h4>
                                  <hr/>
                                  <p className="modal-desc">
                                  Simple Console application where users can book vehicles. Two kinds of vehicles (i.e.,) Vehicle and 
                                  Premium Vehicle. The Vehicles have three states (i.e.,) Available, Serviced, and Hired. Switching these states 
                                  of the Vehicle according to the status is also managed well. 
                                  </p>
                                  <h4 className = "body-style-features">FEATURES</h4>
                                  <hr/>
                                  <p className="modal-desc">
                                    <li><strong>System</strong> contains two kinds of customers (i.e.,)Individual and Coporate.</li>        
                                    <li><strong>System</strong> contains two kinds of Vehicles (i.e.,)Vehicle and Premium Vehicle.</li>        
                                    <li><strong>Customers</strong> can hire vehicles with different set of payment for two types of customers</li>
                                    <li><strong>Customers can check </strong> the status of the Vehicle</li>
                                    <li><strong>Rent is calculated </strong> by daily rate of the Vehicle which varies from Vehicle to Vehicle.</li>
                                  </p>
                                  <h4 className = "body-style-tech">TECHNOLOGIES USED</h4>
                                  <hr/>
                                  <div className="card-text d-flex justify-content-start flex-column">
                                  {skills.Console.map((skill, index) => (
                                    <span className="p-2" key={index}>
                                      <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                                        <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                                      </a>
                                    </span>
                                  ))}
                                  </div>
                                </Modal.Body>
                                <Modal.Footer >
                                <Button variant = "success" onClick={()=> window.open("https://github.com/Jeyakaran-tech/Vehicle-Management")}>Source code</Button>
                                  <Button onClick={()=>setModalShow4(false)}>Close</Button>
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
                        <Card.Img variant="top" src="https://reactjs.org/logo-og.png" height="170" onClick={() => setModalShow3(true)} className="card-img"/>
                          <Card.Body>
                            <Card.Title className = "body-title-style">Personal Portfolio using React JS</Card.Title>
                          </Card.Body>
                          <Card.Body>
                            <Button variant="link" style={{ textDecoration: 'none',float: 'right' }} onClick={() => setModalShow3(true)}>
                              Know More...
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
                  <Row className="pt-3 pb-3 align-items-center">
                    <Col xs={12} md={4}>
                    {/*IOT Project*/}
                    <Row className="justify-content-center mb-2 mr-2 ">
                      <Card style={{ width: '20rem', height:'20rem' }} className="focus mt-2 mb-2">
                        <Card.Img variant="top" src="https://images.idgesg.net/images/article/2017/10/wireless_network_internet_of_things_iot_thinkstock_853701554-100739367-large.jpg" height="170" onClick={() => setModalShow2(true)} className="card-img"/>
                          <Card.Body>
                            <Card.Title className = "body-title-style">Car Parking Reservation using Cloud Environment </Card.Title>
                          </Card.Body>
                          <Card.Body>
                            <Button variant="link" style={{ textDecoration: 'none',float: 'right' }} onClick={() => setModalShow2(true)}>
                              Know More...
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


                    {/*analysis of coles and woolies*/}
                    <Col xs={12} md={4}>
                    <Row className="justify-content-center mb-2 mr-2 ">
                      <Card style={{ width: '20rem', height:'20rem' }} className="focus mt-2 mb-2">
                        <Card.Img variant="top" src="https://miro.medium.com/max/3200/0*xz50V4u-Cvz0I30e.jpg" height="170"onClick={() => setModalShow5(true)} className="card-img"/>
                          <Card.Body>
                            <Card.Title className = "body-title-style">Price analysis of Coles and Woolworths </Card.Title>
                          </Card.Body>
                          <Card.Body>
                            <Button variant="link" style={{ textDecoration: 'none',float: 'right' }} onClick={() => setModalShow5(true)}>
                              Know More...
                            </Button>
                            <Modal
                            show={modalShow5}
                            size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                            scrollable="FALSE"
                            onHide={handleClose5}
                            >
                              <Modal.Header closeButton >
                                <Modal.Title id="contained-modal-title-vcenter" className = "modal-title">
                                  PROJECT DETAILS
                                </Modal.Title>
                              </Modal.Header>
                              <Modal.Body className = "modal-body">
                                <h4 className = "body-style-desc">DESCRIPTION</h4>
                                <hr/>
                                <p className="modal-desc">
                                  A detailed Price analysis was made between <strong>Coles and Woolworths</strong> (Two famous super market chain in Australia). 
                                  The similar poducts in both the stores are extracted into the dataset and the price ranges of various products were analysed. 

                                </p>
                                <h4  style={{paddingLeft: "18rem",fontSize:"20px",fontWeight:"800"}}>STUDY METHODOLOGY</h4>
                                <hr/>
                                <p className="modal-desc">
                                  <li><strong>Detailed analysis</strong> has been made on the prices data.</li>
                                  <li><strong>Hypothesis Testing</strong> for all possible hypothesis.</li>
                                  <li><strong>Summary statistics</strong> has been studied to learn about the data points.</li>

                                          
                                </p>
                                <h4 className = "body-style-tech">TECHNOLOGIES USED</h4>
                                <hr/>
                                <div className="card-text d-flex justify-content-start flex-column">
                                  {skills.Coles.map((skill, index) => (
                                    <span className="p-2" key={index}>
                                      <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                                        <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                                      </a>
                                    </span>
                                  ))}
                                </div>
                              </Modal.Body>
                              <Modal.Footer>
                              <Button variant = "success" onClick={()=> window.open("https://github.com/Jeyakaran-tech/R-Reports/blob/main/Price%20wars.pdf")}>Source code</Button>
                                <Button onClick={()=>setModalShow5(false)}>Close</Button>
                              </Modal.Footer>
                            </Modal>
                          </Card.Body>
                        </Card>    
                      </Row>
                    </Col>

                    {/*Credit Risk*/}
                    <Col xs={12} md={4}>
                    <Row className="justify-content-center mb-2 mr-2 ">
                      <Card style={{ width: '20rem', height:'20rem' }} className="focus mt-2 mb-2">
                        <Card.Img variant="top" src="https://en.agictech.com/media/1809/machine-learning.jpg" height="170" onClick={() => setModalShow6(true)} className="card-img"/>
                          <Card.Body>
                            <Card.Title className = "body-title-style">Predicting the Credit Risk of the Customer </Card.Title>
                          </Card.Body>
                          <Card.Body>
                            <Button variant="link" style={{ textDecoration: 'none',float: 'right' }} onClick={() => setModalShow6(true)}>
                              Know More...
                            </Button>
                            <Modal
                            show={modalShow6}
                            size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                            scrollable="FALSE"
                            onHide={handleClose6}
                            >
                              <Modal.Header closeButton >
                                <Modal.Title id="contained-modal-title-vcenter" className = "modal-title">
                                  PROJECT DETAILS
                                </Modal.Title>
                              </Modal.Header>
                              <Modal.Body className = "modal-body">
                                <h4 className = "body-style-desc">DESCRIPTION</h4>
                                <hr/>
                                <p className="modal-desc">
                                  A detailed analysis of the <strong>Credit Risk</strong> of the Bank Customers. Being the most important
                                   part of the Banking Sector, predicting the customer's nature that affects the Credit Risk 
                                   will help the bank to be cautious while lending out the money. 
                                </p>
                                <h4 className = "body-style-features">OUTCOME</h4>
                                <hr/>
                                <p className="modal-desc">
                                  <li><strong>Analysis</strong> has been made on the Credit information on the bank customers.</li>
                                  <li><strong>Hypothesis Testing</strong> for all possible hypothesis.</li>
                                  <li><strong>Summary statistics</strong> has been studied to learn about the data points.</li>
                                </p>
                                <h4  style={{paddingLeft: "18rem",fontSize:"20px",fontWeight:"800"}}>STUDY METHODOLOGY</h4>
                                <hr/>
                                <div className="card-text d-flex justify-content-start flex-column">
                                  {skills.Python.map((skill, index) => (
                                    <span className="p-2" key={index}>
                                      <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                                        <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                                      </a>
                                    </span>
                                  ))}
                                </div>
                              </Modal.Body>
                              <Modal.Footer>
                              <Button variant = "success" onClick={()=> window.open("https://github.com/Jeyakaran-tech/ML-Reports/blob/main/Analysis%20of%20credit%20risk%20of%20the%20customer.pdf")}>Source code</Button>
                                <Button onClick={()=>setModalShow6(false)}>Close</Button>
                              </Modal.Footer>
                            </Modal>
                          </Card.Body>
                        </Card>    
                      </Row>
                    </Col>
                    </Row>



                    {/*Third row*/}
                    <Row className="pt-3 pb-3 align-items-center">
                    <Col xs={12} md={4}>
                    {/*IOT Project*/}
                    <Row className="justify-content-center mb-2 mr-2 ">
                      <Card style={{ width: '20rem', height:'20rem' }} className="focus mt-2 mb-2">
                        <Card.Img variant="top" src="https://en.agictech.com/media/1809/machine-learning.jpg" height="170" onClick={() => setModalShow7(true)} className="card-img"/>
                          <Card.Body>
                            <Card.Title className = "body-title-style">Analysis of Impact of different protein in Mice </Card.Title>
                          </Card.Body>
                          <Card.Body>
                            <Button variant="link" style={{ textDecoration: 'none',float: 'right' }} onClick={() => setModalShow7(true)}>
                              Know More...
                            </Button>
                            <Modal
                            show={modalShow7}
                            size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                            scrollable="FALSE"
                            onHide={handleClose7}
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
                                The data set for the mice protein expression was created to study the effect of learning with
                                <strong> Down Syndrome (DS)</strong> between normal and trisomic mice or mice.
                                </p>
                                <h4  style={{paddingLeft: "18rem",fontSize:"20px",fontWeight:"800"}}>STUDY METHODOLOGY</h4>
                                <hr/>
                                <p className="modal-desc">
                                  <li><strong>Data Preprocessing</strong> has been practised.</li>
                                  <li><strong>Data Visualisation</strong> has been done to compare the relations between
                                  different attributes  </li>    
                                  <li><strong>Machine Learning models</strong> has been incorporate to support the study better.  </li>    

                                </p>
                                <h4 className = "body-style-tech">TECHNOLOGIES USED</h4>
                                <hr/>
                                <div className="card-text d-flex justify-content-start flex-column">
                                  {skills.Python.map((skill, index) => (
                                    <span className="p-2" key={index}>
                                      <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                                        <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                                      </a>
                                    </span>
                                  ))}
                                </div>
                              </Modal.Body>
                              <Modal.Footer>
                              <Button variant = "success" onClick={()=> window.open("https://github.com/Jeyakaran-tech/ML-Reports/blob/main/Mice%20protein%20analysis.pdf")}>Source code</Button>
                                <Button onClick={()=>setModalShow7(false)}>Close</Button>
                              </Modal.Footer>
                            </Modal>
                          </Card.Body>
                        </Card>    
                      </Row>
                    </Col>


                    {/*analysis of coles and woolies*/}
                    <Col xs={12} md={4}>
                    <Row className="justify-content-center mb-2 mr-2 " >
                      <Card style={{ width: '20rem', height:'20rem' }} className="focus mt-2 mb-2" >
                        <Card.Img variant="top" src="https://techynology.com/wp-content/uploads/2020/07/1614824.jpg" height="170" onClick={() => setModalShow8(true)} className="card-img"/>
                          <Card.Body>
                            <Card.Title className = "body-title-style">Impact of COVID-19 on Indian Stocks </Card.Title>
                          </Card.Body>
                          <Card.Body>
                            <Button variant="link" style={{ textDecoration: 'none',float: 'right' }} onClick={() => setModalShow8(true)}>
                              Know More...
                            </Button>
                            <Modal
                            show={modalShow8}
                            size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                            scrollable="FALSE"
                            onHide={handleClose8}
                            >
                              <Modal.Header closeButton >
                                <Modal.Title id="contained-modal-title-vcenter" className = "modal-title">
                                  PROJECT DETAILS
                                </Modal.Title>
                              </Modal.Header>
                              <Modal.Body className = "modal-body">
                                <h4 className = "body-style-desc">DESCRIPTION</h4>
                                <hr/>
                                <p className="modal-desc">
                                A very detailed analysis on how Indian Stock market behaved during the 
                                COVID-19 Pandemic and the factors that saved few companies also discussed briefly.
                                </p>
                                <h4  style={{paddingLeft: "18rem",fontSize:"20px",fontWeight:"800"}}>STUDY METHODOLOGY</h4>
                                <hr/>
                                <p className="modal-desc">
                                  <li>A <strong>Complete Data Science</strong> process has been carried out.Starting from the Data COllection to Analysis</li>
                                  <li><strong>Data Analysis</strong> has been done using Tableau.</li>
                                  <li><strong>Every companies</strong> has been studied thoroughly and comparison has been made.</li>   
                                  <li><strong>LSTM</strong> algorithm has been used to predict the future stocks with utmost accuracy.</li>    
 
                                </p>
                                <h4 className = "body-style-tech">TECHNOLOGIES USED</h4>
                                <hr/>
                                <div className="card-text d-flex justify-content-start flex-column">
                                  {skills.Python.map((skill, index) => (
                                    <span className="p-2" key={index}>
                                      <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                                        <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                                      </a>
                                    </span>
                                  ))}
                                </div>
                              </Modal.Body>
                              <Modal.Footer>
                                <Button variant = "success" onClick={()=> window.open("https://github.com/Jeyakaran-tech/ML-Reports/blob/main/Case%20studies%20on%20COVID-19.pdf")}>Source code</Button>
                                <Button onClick={()=>setModalShow8(false)}>Close</Button>
                              </Modal.Footer>
                            </Modal>
                          </Card.Body>
                        </Card>    
                      </Row>
                    </Col>

                    {/*Credit Risk*/}
                    <Col xs={12} md={4}>
                    <Row className="justify-content-center mb-2 mr-2 ">
                      <Card style={{ width: '20rem', height:'20rem' }} className="focus mt-2 mb-2">
                        <Card.Img variant="top" src="https://aithority.com/wp-content/uploads/2019/05/aws.amazon.jpg" height="170" onClick={() => setModalShow9(true)} className="card-img"/>
                          <Card.Body>
                            <Card.Title className = "body-title-style">Performing word count on EMR clusters </Card.Title>
                          </Card.Body>
                          <Card.Body>
                            <Button variant="link" style={{ textDecoration: 'none',float: 'right' }} onClick={() => setModalShow9(true)}>
                              Know More...
                            </Button>
                            <Modal
                            show={modalShow9}
                            size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                            scrollable="FALSE"
                            onHide={handleClose9}
                            >
                              <Modal.Header closeButton >
                                <Modal.Title id="contained-modal-title-vcenter" className = "modal-title">
                                  PROJECT DETAILS
                                </Modal.Title>
                              </Modal.Header>
                              <Modal.Body className = "modal-body">
                                <h4 className = "body-style-desc">DESCRIPTION</h4>
                                <hr/>
                                <p className="modal-desc">
                                  The Usage of <strong>AWS EMR</strong> cluster has been studied thoroughly. To perform the operation Java has been used. 
                                  The clusters have been boosted and the corresponding CPU timimgs were noted to check the performance of the cluster. 
                                </p>
                                <h4  style={{paddingLeft: "18rem",fontSize:"20px",fontWeight:"800"}}>STUDY METHODOLOGY</h4>
                                <hr/>
                                <p className="modal-desc">
                                  <li><strong>Usage of EMR cluster</strong> has been studied.</li>
                                  <li><strong>The performance of the clusters</strong>  after boosting them is been clearly studied.</li>
                                  <li><strong>The operation</strong> used here was word count of a file.</li>

                                </p>
                                <h4 className = "body-style-tech">TECHNOLOGIES USED</h4>
                                <hr/>
                                <div className="card-text d-flex justify-content-start flex-column">
                                  {skills.EMR.map((skill, index) => (
                                    <span className="p-2" key={index}>
                                      <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                                        <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                                      </a>
                                    </span>
                                  ))}
                                </div>
                              </Modal.Body>
                              <Modal.Footer>
                              <Button variant = "success" onClick={()=> window.open("https://github.com/Jeyakaran-tech/EMR-Cluster-performance")}>Source code</Button>
                                <Button onClick={()=>setModalShow9(false)}>Close</Button>
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