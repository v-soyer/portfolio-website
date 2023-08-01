import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import entertainement from "../../Assets/Projects/entertainement.png";
import dekg from "../../Assets/Projects/DEKG.png";
import acnLogo from "../../Assets/Enterprises/Accenture-Logo.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="blue">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dekg}
              title="DEKG"
              description="The Decentralized Enteprise Knowledge Graph (a.k.a. DEKG) is a project using Neo4J and Micro-Services to gather all the siloed data of an enterprise
              stored in different data sources and to store it inside a unique Graph to make it easier to explore and request.(Original Thesis Work by Bastien Vidé)."
              enterpriseLogo={acnLogo}
              isLinked={true}
              link="https://hal.science/hal-03304542v1/file/Designing_BusinessView_Vide.pdf"
            />
          </Col>  

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={entertainement}
              isBlog={false}
              title="Entertainement Bases API"
              description="The purpose is to have an API able to handle user authentication and provide information about hobbies centers, it is linked to openWeatherMap to provide in real time weather information for your bases."
              ghLink="https://github.com/v-soyer/entairtainment-base-API"
              isLinked={false}
            />
          </Col>
        </Row>
      </Container>
      <Particle />
    </Container>
  );
}

export default Projects;
