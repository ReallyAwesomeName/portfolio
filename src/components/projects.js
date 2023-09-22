import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ProjectCard from "./project-card";
import { Container } from "react-bootstrap";

// TODO: activeWIP not yet implemented - make projects sub-section for WIP projects
const projects = [
  {
    projectImage: require("../assets/images/sustain-a-plate.png"),
    projectTitle: `Sustain A Plate`,
    projectTechnologies:
      "JavaScript | MongoDB | Mongoose | GraphQL | Express | React.js | Node.js",
    projectDescription: `A webapp that allows users to explore sustainable 
    and eco-friendly food options.`,
    projectRepository: `https://github.com/Will-Riffe/Sustain-A-Plate`,
    projectDeployed: `https://sustain-a-plate-a492ad2a8239.herokuapp.com/`,
    activeWIP: false,
  },
  {
    projectImage: require("../assets/images/sights&sounds.png"),
    projectTitle: `Sights & Sounds`,
    projectTechnologies: "JavaScript | HTML | CSS | Bulma | JQueryUI",
    projectDescription: `A responsive website that allows users to search for events.
    Provides a map view of venue location and links to tickets and event info.`,
    projectRepository: `https://github.com/ReallyAwesomeName/room-for-activities`,
    projectDeployed: `https://reallyawesomename.github.io/room-for-activities/`,
    activeWIP: false,
  },
  {
    projectImage: require("../assets/images/plsl.png"),
    projectTitle: "Pascal-Like Simple Programming Language",
    projectTechnologies: "C++",
    projectDescription: `A simple interpreted programming language written in C++.
    Includes a lexical analyzer, a parser, and an interpreter.`,
    projectRepository: `https://github.com/ReallyAwesomeName/CS280/tree/master/PA3`,
    projectDeployed: null,
    activeWIP: false,
  },
  {
    projectImage: require("../assets/images/achievement-unlocked.png"),
    projectTitle: `Achievement Unlocked`,
    projectTechnologies:
      "JavaScript | Express | Node.js | MySQL | Sequelize | Bootstrap | Handlebars",
    projectDescription: `A website that allows users to connect with each other,
    discuss anything gaming and show off their gaming accolades.`,
    projectRepository: `https://github.com/Greivin13/AchievementUnlocked`,
    projectDeployed: `https://thawing-cove-75959.herokuapp.com/`,
    activeWIP: false,
  },
  {
    projectImage: null,
    projectTitle: null,
    projectTechnologies: null,
    projectDescription: null,
    projectRepository: null,
    projectDeployed: null,
    activeWIP: false,
  },
];

function ProjectsGrid() {
  return (
    <Container>
      <Row
        xs={1}
        md={2}
        xxl={true}
        className="g-4 align-items-center"
        style={{ maxWidth: "80rem" }}
      >
        {Array.from({ length: projects.length }).map((_, idx) => (
          <Col key={idx}>
            <ProjectCard
              projectImage={projects[idx].projectImage}
              projectTitle={projects[idx].projectTitle}
              projectTechnologies={projects[idx].projectTechnologies}
              projectDescription={projects[idx].projectDescription}
              projectRepository={projects[idx].projectRepository}
              projectDeployed={projects[idx].projectDeployed}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProjectsGrid;
