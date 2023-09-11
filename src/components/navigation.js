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
      defaultActiveKey={"home"}
      className="justify-content-center"
      onSelect={handleSelect}
    >
      <Nav.Item>
        <Nav.Link eventKey="">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="projects">Projects</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navigation;
