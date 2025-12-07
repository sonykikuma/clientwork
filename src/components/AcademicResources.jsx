import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function AcademicResources() {
  const [selected, setSelected] = useState(null);

  const openSection = (key) => {
    setSelected(selected === key ? null : key);
  };

  // ===================== CONFIG ===================== //
  // control which section has notes & papers
  const sectionConfig = {
    class10: { hasNotes: true, hasPapers: true },
    puc: { hasNotes: true, hasPapers: true },
    cet: { hasNotes: false, hasPapers: false },
    engineering: { hasNotes: false, hasPapers: false },
  };

  const currentConfig = selected ? sectionConfig[selected] : {};

  return (
    <Container className="my-5">
      <Row className="justify-content-center g-4">
        {/* Left list */}
        <Col xs={11} md={6} lg={5}>
          <div
            className="p-4"
            style={{
              border: "4px solid #C67A2A",
              borderRadius: "12px",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            <ol style={{ fontSize: "18px", lineHeight: "1.8" }}>
              <li
                onClick={() => openSection("class10")}
                style={{ fontWeight: 600, cursor: "pointer" }}
              >
                Secondary Level Coaching (Class 10)
                <span style={{ marginLeft: 8, color: "#C67A2A" }}>
                  {selected === "class10" ? "−" : "+"}
                </span>
              </li>

              <li
                onClick={() => openSection("puc")}
                style={{ fontWeight: 600, cursor: "pointer" }}
              >
                PUC Coaching (1st & 2nd Year)
                <span style={{ marginLeft: 8, color: "#C67A2A" }}>
                  {selected === "puc" ? "−" : "+"}
                </span>
              </li>

              <li
                onClick={() => openSection("cet")}
                style={{ fontWeight: 600, cursor: "pointer" }}
              >
                Competitive Exam Training (CET / NEET / JEE)
                <span style={{ marginLeft: 8, color: "#C67A2A" }}>
                  {selected === "cet" ? "−" : "+"}
                </span>
              </li>
              <li
                onClick={() => openSection("engineering")}
                style={{ fontWeight: 600, cursor: "pointer" }}
              >
                Engineering Coaching
                <span style={{ marginLeft: 8, color: "#C67A2A" }}>
                  {selected === "engineering" ? "−" : "+"}
                </span>
              </li>

              {/* <li>Engineering Coaching</li> */}
              <li>Master’s Level Coaching</li>
            </ol>
          </div>
        </Col>

        {/* Right Section */}
        {selected === "class10" && (
          <Col xs={11} md={6} lg={5}>
            <div
              className="p-4"
              style={{
                border: "4px solid #C67A2A",
                borderRadius: "12px",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              <h4 className="fw-bold text-center mb-3">Syllabus:</h4>
              <ol style={{ fontSize: "17px", lineHeight: "1.8" }}>
                <li>
                  10<sup>th</sup> State Syllabus <br />
                  <span style={{ color: "red" }}>File Attachment…</span>
                </li>
                <li className="mt-3">
                  10<sup>th</sup> CBSE Syllabus <br />
                  <span style={{ color: "red" }}>File Attachment…</span>
                </li>
                <li className="mt-3">
                  10<sup>th</sup> ICSE Syllabus <br />
                  <span style={{ color: "red" }}>File Attachment…</span>
                </li>
              </ol>
            </div>
          </Col>
        )}

        {selected === "puc" && (
          <Col xs={11} md={6} lg={5}>
            <div
              className="p-4"
              style={{
                border: "4px solid #C67A2A",
                borderRadius: "12px",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              <h4 className="fw-bold text-center mb-3">Syllabus:</h4>
              <ol style={{ fontSize: "17px", lineHeight: "1.8" }}>
                <li>
                  1<sup>st</sup> PUC Syllabus (State, CBSE, ICSE) <br />
                  <span style={{ color: "red" }}>File Attachment…</span>
                </li>

                <li className="mt-3">
                  2<sup>nd</sup> PUC Syllabus (State, CBSE, ICSE) <br />
                  <span style={{ color: "red" }}>File Attachment…</span>
                </li>
              </ol>
            </div>
          </Col>
        )}

        {selected === "cet" && (
          <Col xs={11} md={6} lg={5}>
            <div
              className="p-4"
              style={{
                border: "4px solid #C67A2A",
                borderRadius: "12px",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              <h4 className="fw-bold text-center mb-3">Syllabus:</h4>
              <ol style={{ fontSize: "17px", lineHeight: "1.8" }}>
                <li>
                  CET Syllabus <br />
                  <span style={{ color: "red" }}>File Attachment…</span>
                </li>

                <li className="mt-3">
                  JEE Syllabus <br />
                  <span style={{ color: "red" }}>File Attachment…</span>
                </li>

                <li className="mt-3">
                  NEET Syllabus <br />
                  <span style={{ color: "red" }}>File Attachment…</span>
                </li>
              </ol>
            </div>
          </Col>
        )}
        {selected === "engineering" && (
          <Col xs={11} md={6} lg={5}>
            <div
              className="p-4"
              style={{
                border: "4px solid #C67A2A",
                borderRadius: "12px",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              <h4 className="fw-bold text-center mb-3">Syllabus:</h4>
              <p style={{ fontSize: "17px", fontWeight: 500 }}>
                All branches
                <br />
                <span style={{ color: "red" }}>File Attachment…</span>
              </p>
            </div>
          </Col>
        )}
      </Row>

      {/* ======== Notes & Previous Paper ======== */}
      {selected && currentConfig.hasNotes && (
        <Row className="justify-content-center mt-4">
          <Col xs={11} md={10}>
            <div
              className="p-4"
              style={{
                border: "4px solid #C67A2A",
                borderRadius: "12px",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              <h4 className="fw-bold text-center mb-3">Notes:</h4>
              <p style={{ fontSize: "17px" }}>All subject notes attachment.</p>
              <span style={{ color: "red" }}>File Attachment…</span>
            </div>
          </Col>
        </Row>
      )}

      {selected && currentConfig.hasPapers && (
        <Row className="justify-content-center mt-4">
          <Col xs={11} md={10}>
            <div
              className="p-4"
              style={{
                border: "4px solid #C67A2A",
                borderRadius: "12px",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              <h4 className="fw-bold mb-2">Previous year question papers:</h4>
              <span style={{ color: "red" }}>File Attachment…</span>
            </div>
          </Col>
        </Row>
      )}
    </Container>
  );
}
