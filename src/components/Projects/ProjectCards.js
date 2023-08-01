import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        {props.isLinked && (
          <Card.Title><b><a href={props.link} rel="noopener noreferrer" target="_blank"><b>{props.title}</b></a></b></Card.Title>
        )}
        {!props.isLinked && (
          <Card.Title><b>{props.title}</b></Card.Title>
        )}
        <br />
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {/* If the component don't have ghLink it will render the below component  */}

        {props.ghLink && (
          <div>
            <br />
            <Button variant="primary" href={props.ghLink} target="_blank">
              <BsGithub /> GitHub
            </Button>
          </div>
        )}
        
        {/* If not, it will render the below component  */}

        {!props.ghLink && props.enterpriseLogo && (
          <div>
            <Card.Img variant="top" href="https://www.accenture.com/fr-fr" src={props.enterpriseLogo} alt="card-img" style={{ width: "70%", height: "auto" }}/>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
