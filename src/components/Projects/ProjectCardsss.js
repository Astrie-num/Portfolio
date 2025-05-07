import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaFigma } from "react-icons/fa";

function ProjectCardsss(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.figmaLink} target="_blank">
          <FaFigma /> &nbsp;
          {props.isBlog ? "Blog" : "Figma"}
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCardsss;