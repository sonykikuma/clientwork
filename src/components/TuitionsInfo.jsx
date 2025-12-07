import React from "react";
import { Container } from "react-bootstrap";

export default function TuitionsInfo() {
  return (
    <Container className="my-5">
      <div
        className="p-4 p-md-5 mx-auto"
        style={{
          border: "4px solid #C67A2A",
          borderRadius: "10px",
          maxWidth: "900px",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        {/* Top Title */}
        <h5
          className="text-center mb-3 fw-semibold"
          style={{ fontSize: "22px" }}
        >
          Tuitions
        </h5>

        {/* Main Heading */}
        <h1 className="text-center fw-bold mb-4" style={{ fontSize: "32px" }}>
          Welcome to Our Learning & Coaching Portal
        </h1>

        {/* Description */}
        <ul
          style={{ listStyle: "disc", paddingLeft: "20px", lineHeight: "1.8" }}
        >
          <li className="mb-2">
            This platform is designed to provide coaching and academic support
            for students from Class 5 to Class 9, Class 10, PUC, Engineering,
            Master's, and PhD levels.
          </li>

          <li className="mb-2">
            Our goal is to help every learner build strong subject knowledge,
            improve performance, and achieve academic excellence through
            structured guidance and personalized coaching.
          </li>

          <li className="mb-4">
            Here it provides the access for study materials, chapter notes,
            assignments, practice papers, essential updates, and structured
            academic support.
          </li>
        </ul>

        {/* Subheading */}
        <h3 className="text-center fw-bold mb-3" style={{ fontSize: "26px" }}>
          Highlights
        </h3>

        {/* Highlights List */}
        <ul
          style={{ listStyle: "disc", paddingLeft: "20px", lineHeight: "1.8" }}
        >
          <li className="mb-2">Syllabus.</li>
          <li className="mb-2">NCERT/State board notes.</li>
          <li className="mb-2">Subject-wise chapter explanations.</li>
          <li className="mb-2">Previous year question papers.</li>
          <li className="mb-2">Model tests & worksheets.</li>
          <li className="mb-2">Exam tips.</li>
          <li className="mb-2">Career guidance.</li>
        </ul>
      </div>
    </Container>
  );
}
