import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiNodejs,
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
  SiTypescript
} from "react-icons/si";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNestjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDjango />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHaskell />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiC />
      </Col>
    </Row>
  );
}

export default Techstack;
