import React from "react";
import Nav from "react-bootstrap/Nav";
import { useNavigate } from "react-router-dom";

function Navigation() {
  const navigate = useNavigate();

  const handleSelect = (eventKey) => {
    navigate(eventKey);
  };

  return (
    <Nav
      variant="underline"
      defaultActiveKey={"about"}
      className="justify-content-center"
      onSelect={handleSelect}
    >
      <Nav.Item>
        <Nav.Link eventKey="about">About</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="projects">Projects</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navigation;
