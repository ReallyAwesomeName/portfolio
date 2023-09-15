import React from "react";
import About from "./about";
import Projects from "./projects";

function Page({ currentPage }) {
  const renderPage = () => {
    switch (currentPage.title) {
      case "about":
        return <About />;
      case "projects":
        return <Projects />;
      default:
        return <About />;
    }
  };
  return <section>{renderPage()}</section>;
}

export default Page;
