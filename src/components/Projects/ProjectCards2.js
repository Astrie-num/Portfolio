import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
import { FaFigma } from "react-icons/fa";


function ProjectCards(props) {
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
        {"\n"}
        {"\n"}


        {!props.isBlog && props.ghLink && (
          <Button
            variant="primary"
            href={props.ghLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            
            <BsGithub /> &nbsp;
            {"Github"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
