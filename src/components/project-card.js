import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ProjectCard(props) {
  const {
    projectImage,
    projectTitle,
    projectDescription,
    projectTechnologies,
    projectRepository,
    projectDeployed,
  } = props;

  if (!projectTitle) {
    return null;
  }

  return (
    <Card className="m-4" border="info">
      {projectImage ? <Card.Img variant="top" src={projectImage} /> : null}
      <Card.Body>
        <Card.Title style={{ textDecoration: "underline", fontWeight: "bold" }}>
          {projectTitle}
        </Card.Title>
        <Card.Text>{projectTechnologies}</Card.Text>
        <hr></hr>
        <Card.Text>{projectDescription}</Card.Text>
      </Card.Body>
      <section className="mb-4">
        {projectRepository ? (
          <Button className="mx-2" variant="primary" href={projectRepository}>
            Repository
          </Button>
        ) : null}
        {projectDeployed ? (
          <Button className="mx-2" variant="primary" href={projectDeployed}>
            Deployment
          </Button>
        ) : null}
      </section>
    </Card>
  );
}

export default ProjectCard;
