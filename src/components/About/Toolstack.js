import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiGithub,
  SiGitlab,
  SiJenkins,
  SiLinux,
} from "react-icons/si";
import { TbBrandOffice } from "react-icons/tb";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
        <div class="text">Linux</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
        <div class="text">Github</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGitlab />
        <div class="text">Gitlab</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <div class="text">VS Code</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <div class="text">Postman</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJenkins />
        <div class="text">Jenkins</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandOffice />
        <div class="text">Office 365</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
