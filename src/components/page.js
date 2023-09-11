import React from "react";
import Home from "./home";
import Projects from "./projects";

function Page({ currentPage }) {
  const renderPage = () => {
    switch (currentPage.title) {
      case "home":
        return <Home />;
      case "projects":
        return <Projects />;
      default:
        return <Home />;
    }
  };
  return <section>{renderPage()}</section>;
}

export default Page;
