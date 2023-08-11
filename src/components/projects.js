import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ProjectCard from "./project-card";
import { Container } from "react-bootstrap";

function ProjectsGrid() {
  return (
    <Container>
      <Row xs={1} md={2} className="g-4" style={{ maxWidth: "80rem" }}>
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col key={idx}>
            <ProjectCard />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProjectsGrid;
