import React from "react";

function Header(props) {
  return (
    <header className="header">
      <div className="header-title">
        <h1>Jason Geoghegan</h1>
        <h3>Full-Stack Software Developer</h3>
      </div>
      {props.children}
    </header>
  );
}

export default Header;
