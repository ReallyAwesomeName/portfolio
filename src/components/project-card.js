import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

function ProjectCard() {
  return (
    <Card className="m-4" border="info">
      <Card.Img variant="top" src="https://placehold.co/600x200/555555/eee" />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a longer card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
