import React from "react";
import About from "./about";
import Contact from "./contact";
import Home from "./home";
import Projects from "./projects";

function Page({ currentPage }) {
  const renderPage = () => {
    switch (currentPage.title) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "projects":
        return <Projects />;
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };
  return <section>{renderPage()}</section>;
}

export default Page;
