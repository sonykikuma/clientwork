import React from "react";
import "./BrochureLayout.css";
import { Container, Row, Col } from "react-bootstrap";

const BrochureLayout = () => {
  return (
    <Container className="brochure-main-card">
      <Row className="g-3 ">
        {/* Left: Logo + Heading + Image + About */}
        <Col
          md={3}
          className="brochure-card brochure-left border border-success me-4"
        >
          <div className="brochure-logo-heading ">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png"
              alt="Logo"
              className="brochure-logo"
            />
            <div className="brochure-title-main">
              S.S International Integrated Engineering
              <br />
              Research Consultancy & Training
              <br />
              Institute Private Limited
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
            alt="Office"
            className="brochure-office-img img-fluid"
          />
          <div className="brochure-about-title">ABOUT SS-IIERC&TI:</div>
          <div className="brochure-about-text">
            SS-IIERC&TI is a well-established institute offering a wide range of
            services in research, consultancy, and training for students,
            academic, and industry professionals. The institute provides both
            offline and online courses, supported by expert instructors from
            IITs, NITs, and reputed national and international universities.
          </div>
        </Col>
        {/* Middle: Long descriptive paragraph */}
        <Col
          md={4}
          className="brochure-card brochure-middle border border-success me-4"
        >
          <div className="brochure-middle-text">
            This programs covers student activities such as academic support for
            10th (State/CBSE/ICSE), PUC, Diploma, Engineering, and Master's
            courses, both within India and Abroad. Industry-oriented activities
            include industrial projects, innovative product design and
            development, consultancy, and skill enhancement. Academic services
            include mini and major projects, certified training programs,
            software training (including CFD tools), and coaching for
            competitive exams like CET, NEET, JEE, and GATE. The institute also
            offers technical courses in programming languages such as Java,
            Python, and other industry-relevant software skills to equip
            learners with practical and in-demand knowledge.
          </div>
          <div className="brochure-section-title blue container">
            INDUSTRY ACTIVITIES:
          </div>
          <ul>
            <li>Industrial Projects.</li>
            <li>Consultancy.</li>
            <li>Industrial Skill Development.</li>
            <li>Innovative Design & Product Development.</li>
            <li>Software skill Development.</li>
          </ul>
        </Col>
        {/* Right: Activities, Instructor, Contact */}
        <Col
          md={4}
          className="brochure-card brochure-right border border-success"
        >
          <div className="brochure-box brochure-activities">
            {/* <div className="brochure-section-title blue">INDUSTRY ACTIVITIES:</div>
            <ul>
              <li>Industrial Projects.</li>
              <li>Consultancy.</li>
              <li>Industrial Skill Development.</li>
              <li>Innovative Design & Product Development.</li>
              <li>Software skill Development.</li>
            </ul> */}
            <div className="brochure-section-title blue">
              ACADEMIC ACTIVITIES:
            </div>
            <ul>
              <li>Mini / Major Projects.</li>
              <li>Certified Training Programs.</li>
            </ul>
            <ul>
              <li>Software's Training.</li>
              <li>
                Coaching for Competitive Exams. (CET / NEET / JEE / GATE).
              </li>
              <li>CAD & CFD Software Training.</li>
            </ul>
            <div className="brochure-section-title blue">
              STUDENT ACTIVITIES:
            </div>
            <ul>
              <li>10th Std (State/ CBSE/ ICSE).</li>
              <li>PUC (State / CBSE / ICSE).</li>
              <li>Diploma Courses.</li>
              <li>Engineering Courses.</li>
              <li>Master's Courses.</li>
              <li>Tuitions.</li>
            </ul>
          </div>
          <div className="brochure-box brochure-instructors">
            <span className="bold">INSTRUCTORS FROM:</span> IITs, NITs,
            International, National Reputed Universities & Industries.
          </div>
          <div className="brochure-box brochure-contact">
            <div>
              <span className="red bold">MANAGER:</span> Mrs. Ranjitha Chandra
              Shekar
            </div>
            <div className="brochure-section-title blue">
              CONTACT INFORMATION:
            </div>
            <div>
              Contact Details: +91 8035621225, +91 8217782626 (Call: 9 AM to 9
              PM)
            </div>
            <div>
              Email id:{" "}
              <a href="mailto:ss2025iiercti@gmail.com">
                ss2025iiercti@gmail.com
              </a>
            </div>
            <div>
              Address: #28/1, Yelechenahalli Metro Station, Pillar No 96 & 97,
              Opposite to Royal Enfield Showroom, Kanakapura Main Road,
              Bengaluru South 560078 Karnataka, India.
            </div>
          </div>
        </Col>
      </Row>
      <div className="brochure-footer">LEARN, GROW, SUCCEED....</div>
    </Container>
  );
};

export default BrochureLayout;
