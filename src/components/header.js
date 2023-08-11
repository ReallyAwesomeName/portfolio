import React from "react";

function Header(props) {
  return (
    <header className="header">
      <div className="header-title">
        <h2>Jason Geoghegan</h2>
      </div>
      {props.children}
    </header>
  );
}

export default Header;
