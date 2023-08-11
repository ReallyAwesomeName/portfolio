import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

function ProjectCard() {
  return (
    <Container>
      <h2>Project Card!</h2>
      <p>
        Businesses partnering with us reduce food waste, increase revenue, and
        contribute to a more sustainable future. Every portion saved is one less
        wasted portion and one more step toward a better bottom line.
      </p>
      <Link to="/" className="cta-button">
        Put link to repo here
      </Link>
    </Container>
  );
}

export default ProjectCard;
