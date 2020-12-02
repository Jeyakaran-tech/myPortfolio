import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_Cognizant from "../../assets/img/experience/ctslogo.png";
import Tilt from "react-tilt";

import "./experience.styles.css";

const Experience = () => {
  return (
    <div id="experience" className = "heading">
      <h1 className="pt-5 text-center font-details-b pb-3" >EXPERIENCE</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 30 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap card-header">
                <Card.Img variant="top" className="img-resize" src={L_Cognizant} alt="Accenture logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div className = "title-style">
                  <Card.Title className="text-center">
                    <strong className = "body-title-style">Programmer analyst</strong>
                  </Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Back-end Developer</strong>
                    <br />
                    <strong>Technology:</strong> Oracle, Pl/Sql
                    <br />
                    <strong>Duration:</strong> Dec 2017 - June 2019
                    <br/>
                    <strong className="body-title-style" > Description </strong>
                    <ul className="text-left">
                      
                      <li><strong>Created</strong> objects like tables, views, Directories, stored procedures, function.</li>
                      <li><strong>Involved</strong> in analysis, design, coding and Testing.  </li>
                      <li><strong>Involved</strong> in modifying various existing packages, procedures and functions according to the new business needs.. 
                      </li>
                      <li><strong>Created</strong> Database design and converting them into database objects.</li>
                      {/* <li><strong>Co-created</strong> React Document used as a guide for new developers.</li> */}

                    </ul>
                    
                    
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
       
        </Container>
        
      </Jumbotron>
     
    </div>
  );
};

export default Experience;
