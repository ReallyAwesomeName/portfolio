import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./components/home";
import Navigation from "./components/navigation";
import Page from "./components/page";
import Projects from "./components/projects";

// error boundry
class ErrorBoundry extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

function App() {
  const [pages] = useState([
    {
      title: "home",
      path: "/",
    },
    {
      title: "about",
      path: "/about",
    },
    {
      title: "projects",
      path: "/projects",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div className="App">
      <ErrorBoundry>
        <Header>
          <Router>
            <Navigation
              pages={pages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            ></Navigation>
            <hr />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Router>
        </Header>

        <main></main>

        <Footer></Footer>
      </ErrorBoundry>
    </div>
  );
}

export default App;
