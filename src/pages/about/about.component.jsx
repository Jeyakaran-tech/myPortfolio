import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button'

import Profile from "../../assets/img/profile/profile.jpg"
import Image from 'react-bootstrap/Image'
import "./about.styles.css";


const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-5 text-center font-details pb-3">ABOUT ME</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
              </Row>
              <Row className="d-flex justify-content-center flex-wrap">
              <div>
                    <a href="#contact">
                      <Button variant="dark" className="m-2" >
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://drive.google.com/file/d/1nB_4BWEx2SuVpJ-tiuEksApk1Zhqp6gC/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Button variant="dark" className="m-2" >
                        My Résumé
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/Jeyakaran-tech" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/jeyakaran-karnan-a5a77a126/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="dark">
                        LinkedIn
                      </Button>
                    </a>
                  </div>

              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-left p-2 my-details rounded">
               
                Hi! I am <strong>&nbsp;Jeyakaran Karnan</strong>
                <p>
                <br />An avid programmer with the love and urge for untagling complex fixtures through any form of code. You've got a tough problem? - <strong>You've got me :)</strong>

                <br />
                Having built up a strong base of coding through my bachelor of technology in IT, I'm on the climb to constant updation and improvement. 
                I joined the workforce in 2017 December at <strong>Cognizant</strong>, through which i was able to be an aid to the team of developers as a programing analyst. 
I was able to exert my knowledge and practice for the benefit of the healthcare sector services of Cognizant and completely fullfil the requirements
of the clients.
<br />
Apart from working along for an MNC, I was also able to learn to overcome all forms of programming hurdles. 
The two years of employment taught me a great deal of personal values, professional values and most importantly stregthened domain knowledge. 
               <br />
                 </p>
    
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
