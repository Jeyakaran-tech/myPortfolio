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
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://drive.google.com/file/d/1CfMY4NM1G7gFlmYXcK9_o554vHCdAVQn/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/Jeyakaran-tech" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/jeyakaran-karnan-a5a77a126/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
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
                <br />A passionate programmer, from India who successfully completed Under-graduation in Engineering with specialization in <strong>'Information Technology' in 2017.</strong> I love learning and update myself 
                in technology, which is changing day to day.
                <br />
                After which I worked in a Multi National Corporate Company, which went really well. Working with Clients and amazing leads in my company, 
                I learnt delivering the products with high efficiency and accuracy. After two years, I 
                really wanted to shape my career deep in <strong>Data Science.</strong>  
                <br/>After which, I came to Australia to pursue my <strong>Masters in Data Science.</strong> With all my power in knowledge gained so far and with my ambitious interest in learning and update myself, 
                I am Seeking to leverage the data solutions to the maximum to solve the different business problems which results in the welfare of the Society.
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
