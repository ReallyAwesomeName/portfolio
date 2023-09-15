import React from "react";
// import resume from "../assets/Jason_Geoghegan_Resume.pdf";
// import { Document, Page } from "react-pdf";

function About() {
  return (
    <div className="about">
      <h1>About</h1>
      {/* FIXME: this no work */}
      {/* <Document
        file={resume}
        onLoadError={console.error}
        style={{ width: "100vw", height: "auto" }}
      >
        <Page pageIndex={0} />
      </Document> */}
    </div>
  );
}

export default About;
