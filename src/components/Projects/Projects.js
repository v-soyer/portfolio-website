import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import entertainement from "../../Assets/Projects/entertainement.png";
import dekg from "../../Assets/Projects/DEKG.png";
import pdf from "../../Assets/Projects/PDF-Reconstruct.png"
import enterpriseLogo from "../../Assets/enterprise.png";

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
              stored in different data sources and to store it inside a unique Graph to make it easier to explore and request. (Original Thesis Work by Bastien Vidé)."
              enterpriseLogo={enterpriseLogo}
              isLinked={true}
              link="https://hal.science/hal-03304542v1/file/Designing_BusinessView_Vide.pdf"
            />
          </Col>  

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pdf}
              isBlog={false}
              title="PDF Reconstruction into Graph"
              description="The idea is to take a PDF as an input file and to translate it into a graph with the section, subsection, images and text it contains in order to make the document easier to modify, explore and compare with others. In order to do so, we used Python and Neo4J. "
              enterpriseLogo={enterpriseLogo}
              isLinked={false}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={entertainement}
              isBlog={false}
              title="Entertainement Bases API"
              description="The purpose is to provide information (including real time weather) for entertainment bases. in order to do so, I created an API able to handle user authentication store hobbies centers information. It is also linked to openWeatherMap get the weather info."
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
