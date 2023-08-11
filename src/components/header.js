import React from "react";

function Header(props) {
  return (
    <header className="header">
      <div className="header-title">
        <h1>React-Redux-Saga-Webpack-Boilerplate</h1>
      </div>
      {props.children}
    </header>
  );
}

export default Header;
