import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import itabaza from "../../Assets/Projects/itabaza-best.png";
import dreamize from "../../Assets/Projects/dreamize.png";
import coryde from "../../Assets/Projects/coryde-best.png";
import eveneza from "../../Assets/Projects/eveneza.png";
import bitpesa from "../../Assets/Projects/bitpesa.png";
import fishot from "../../Assets/Projects/fishot.png";
import ProjectCardsss from "./ProjectCardsss";
import ProjectCards2 from "./ProjectCards2";
import ProjectCards3 from "./ProjectCards3";




function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently, some are still in progress.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCards2
              imgPath={itabaza}
              isBlog={false}
              title="Itabaza"
              description="A platform in Rwanda links families with reliable funeral service vendors, ensuring timely delivery
               and seamless coordination to reduce stress and support families during difficult times."
              ghLink="https://github.com/Astrie-num/ITABAZA"
              figmaLink="https://www.figma.com/design/Odvk7q40n0lZ5PYzECOPhp/Itabaza-app?node-id=0-1&t=ELd0tKkKZxD50CKW-1"
           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCardsss
              imgPath={bitpesa}
              isBlog={false}
              title="Bitpesa"
              description="The project aims to build a platform for cross-border transactions with reliable tracking, 
              effective communication, secure payments, and tax compliance to streamline international finance."
              figmaLink="https://www.figma.com/design/ny3egW29JSAobdy3Eq3Kik/BitPesa?node-id=3-118&t=VntGRqZyeGonT9AT-1"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCardsss
              imgPath={eveneza}
              isBlog={false}
              title="Eveneza"
              description="A web and mobile app helps plan home events with invitation templates and forms for food and drinks.
              It also aids in obtaining documents like marriage or death certificates."
              figmaLink="https://www.figma.com/design/zq6Nv9FXj9Hw2aUy1po30F/eveneza?node-id=696-23686&t=jIYksEUm9bsJIhjl-1"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards3
              imgPath={dreamize}
              isBlog={false}
              title="DreamizeAfrica"
              description="DreamizeAfrica's Project-First, Mentorship-Driven Platform trains industry-ready programmers 
              in 7 months, focusing on building real, deployable products from ideas."
              figmaLink="https://www.figma.com/design/6EE7w6M0GgKkwlHBpbUBw6/DreamizeAfricaNewDesign?node-id=7-1715&t=8en2p3FmE8myGJtQ-1"
              demoLink="https://dreamizeafrica.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCardsss
              imgPath={coryde}
              isBlog={false}
              title="CoRyde"
              description="Coryde connects passengers with trusted drivers in Rwanda, ensuring timely, reliable transportation and seamless coordination.

Its app offers real-time tracking for a safe, efficient ride-sharing experience."
              figmaLink="https://www.figma.com/design/DJXoCTcfaKbMHy2YXKcl0I/coRyde?node-id=0-1&t=6nes3TpofyCsYOf7-1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards2
              imgPath={fishot}
              isBlog={false}
              title="Fishot"
              description="
              A fish-inspired robot with advanced sensors tackles water pollution by consuming small pollutants, 
              attaching and disposing of larger ones, and solidifying liquid wastes."
              figmaLink="https://www.figma.com/design/8RNacxizvM9iKtzSiibdNQ/Fishot?node-id=0-1&t=6rT3PZKDRqS4SGHR-1"
              ghLink="https://github.com/Gisele-123/full_fishot"
              
             
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
