import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiPostgresql,
  SiDjango,
  SiNestjs,
  SiC,
  SiHaskell,
  SiDocker,
  SiMongodb,
  SiTypescript,
  SiNeo4J,
  SiVercel,
  SiPowershell,
  SiElastic,
  SiKibana
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa"

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <div class="text">Javascript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaNodeJs />
        <div class="text">Node.JS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNestjs />
        <div class="text">NestJS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <div class="text">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDjango />
        <div class="text">Django</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
        <div class="text">Docker</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb />
        <div class="text">MongoDB</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <div class="text">Postgres</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNeo4J />
        <div class="text">Neo4J</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <div class="text">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript/>
        <div class="text">Typescript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPowershell />
        <div class="text">Powershell</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHaskell />
        <div class="text">Haskell</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiC />
        <div class="text">C</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <div class="text">Vercel</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiElastic />
        <div class="text">ElasticSearch</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKibana />
        <div class="text">Kibana</div>
      </Col>
    </Row>
  );
}

export default Techstack;
