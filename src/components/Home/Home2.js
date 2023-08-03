import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="blue"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I decided to make
              something great with it as a {" "}
              <i><b className="blue">Freelance </b></i>
              back-end developer.
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="blue"> Javascript and Python. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="blue">Web Tools and Products </b>
              </i> and also in areas related to{" "}
              <i>
                <b className="blue">
                  Back-End Technologies.
                </b>
              </i>
              <br />
              <br />I also love to share my knowledge, that's why I came back to my school
              <i>
                <b className="blue"> EPITECH </b>
              </i> &nbsp; as a
              <i>
                <b className="blue"> External Speaker </b>
              </i> &nbsp; in the scope of the
              <i>
                <b className="blue"> Functionnal Programming </b>
              </i> &nbsp; module using
              <i>
                <b className="blue"> Haskell Language. </b>
              </i>
              <br />
              <br />
              Whenever possible, I enjoy developing innovative products with
              <i>
                <b className="blue">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i> &nbsp;like
              <i><b className="blue">Node.js</b></i> and
              <i>
                <b className="blue"> NestJS.</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvatar">
            <br />
            <br />
            <br />
            <br />
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/v-soyer"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/valentin-soyer/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
