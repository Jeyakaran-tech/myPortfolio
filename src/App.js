import React from "react";
import MyNavbar from "./components/my-navbar/my-navbar.component";
import Landing from "./pages/landing-page/landing_page";
import About from './pages/about/about.component';
import Fade from 'react-reveal/Fade';
import { Parallax } from 'react-parallax';
import Container from "react-bootstrap/Container";
import Experience from './pages/experience/experience.component';
import Projects from './pages/projects/projects.component';
import Particles from "react-particles-js";
 import { particlesOptions } from "./particlesOptions";
 import Footer from './pages/Footer/footer.component';
 import Contact from './pages/Contact/contact';
import "./App.css";

const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
      <Landing/>
    
    <MyNavbar/>
    <Particles
        className="particles particles-box"
        params={particlesOptions}
      />
    <div>
        <Parallax
          blur={{ min: -30, max: 60 }}
          bgImage={require("./assets/img/parallex/white_1.jpg")}
          bgImageAlt=""
          strength={200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={1000}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
    </div>
          <Container className="container-box rounded">
          <Fade duration={1000}>
            <hr />
            <Experience />
          </Fade>
        </Container>
      
        <Container className="container-box rounded">
          <Fade duration={1000}>
            <hr />
            <Projects />
          </Fade>
        </Container>
        <hr/>
<Contact/>
        <hr/>
<Footer/>

    </div>
  );
};

export default App;
