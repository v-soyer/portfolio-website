import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="blue">Valentin Soyer </span>
            from <span className="blue"> Toulouse, France.</span>
            <br /> I am a Software Developer graduated with a Master Degree in Software Engineering at
            <span className="blue"> EPITECH</span> Graduate School of Digital Innovation.
            <br />
            <br />
            Additionally, I currently am a <span className="blue">Freelance</span> developer specialized
            in <span className="blue">Back-End web development</span>.
            <br />
            <br />
            Apart from coding, some other activities that I love to do
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Practice Improvisation Theatre
            </li>
            <li className="about-activity">
              <ImPointRight /> Wakeboarding
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
          </ul>
          <br />
          <p style={{ color: "rgba(40, 110, 202, 0.95)" }}>
            "Programming is an extremely creative profession. It’s logic-based creativity."{" "}
          </p>
          <footer className="blockquote-footer">John Romero</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
