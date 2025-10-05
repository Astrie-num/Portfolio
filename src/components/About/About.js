import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import passport from "../../Assets/passport.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Who <strong className="purple">Am I?</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={passport} alt="Asterie passport"
            className="img-fluid"
            style={{ maxHeight: "400px", borderRadius:100 , marginTop:-60}}
             />
          </Col>
        </Row>
        <h1 className="project-heading">
          My <strong className="purple">Tech Toolbox</strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Favorite Tools</strong>
        </h1>
        <Toolstack />

        {/* <Github /> */}
      </Container>
    </Container>
  );
}

export default About;