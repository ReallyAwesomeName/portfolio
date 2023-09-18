import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import About from "./components/about";
import Navigation from "./components/navigation";
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
      title: "about",
      path: "/",
    },
    {
      title: "projects",
      path: "/projects",
    },
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div className="App">
      <ErrorBoundry>
        <Header>
          {/* basename required for single page app on gh-pages */}
          <BrowserRouter basename="/portfolio">
            <Navigation
              pages={pages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            ></Navigation>
            <hr />
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </BrowserRouter>
        </Header>

        <main></main>

        <Footer></Footer>
      </ErrorBoundry>
    </div>
  );
}

export default App;
