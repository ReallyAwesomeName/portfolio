import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "./project-card";
import { Card } from "react-bootstrap";

function Projects() {
  return (
    <section className="card-section">
      <h2>Projects</h2>
      <Card className="card-list">
        <ProjectCard />
      </Card>
    </section>
  );
}

export default Projects;
