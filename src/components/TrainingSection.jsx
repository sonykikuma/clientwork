import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Accordion,
  ButtonGroup,
  ToggleButton,
} from "react-bootstrap";
import QuoteRequestForm from "./QuoteRequestForm";

const TrainingSection = () => {
  const [key, setKey] = useState("0"); // accordion open panel
  return (
    <section className="py-5 bg-white">
      <Container>
        <h2 className="text-center mb-4">
          <span className="text-primary">Besant Technologies,</span> Software
          Training &amp; Placements in India
        </h2>

        <Row className="">
          {/* ------------------- Left Accordion ------------------- */}
          <Col lg={7} className="mt-5">
            <Accordion activeKey={key} onSelect={(k) => setKey(k)}>
              {/* 1️⃣  Introduction */}
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  Introduction about Besant Technologies
                </Accordion.Header>
                <Accordion.Body>
                  Besant Technologies has quickly established itself as a leader
                  in the IT Software Training and Placements sector, securing a
                  prominent and essential position. Effective company management
                  involves planning, control, coordination, and motivation, and
                  Besant Technologies in Chennai and Bangalore exemplifies this
                  approach. Our dedicated coordinators expertly manage subjects,
                  lectures, and problem‑solving to ensure comprehensive training
                  and successful outcomes for our students.
                </Accordion.Body>
              </Accordion.Item>

              {/* 2️⃣  Our Features – keep exactly the same bullet list */}
              <Accordion.Item eventKey="1">
                <Accordion.Header>Our Features</Accordion.Header>
                <Accordion.Body>
                  <ul className="mb-0">
                    <li>Real‑Time Case Studies</li>
                    <li>Corporate Style Training</li>
                    <li>Syllabus Based on Companies</li>
                    <li>Placement Oriented Courses</li>
                    <li>Own Prepared Materials</li>
                    <li>Flexible Learning Schedules</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>

              {/* 3️⃣  Online Training & Certification – unchanged paragraph */}
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  Besant Technologies Online Training and Certification for
                  Trending Technologies
                </Accordion.Header>
                <Accordion.Body>
                  Besant Technologies offers the best online training courses on
                  trending technologies such as Fullstack Development, Data
                  Analytics, Cloud Computing, Software Testing, Data Science,
                  Selenium, Python, Java, DevOps, Angular, Azure, Machine
                  Learning, AI, Ethical Hacking, IoT, R Programming, SQL, and
                  more, all with placement assistance.
                  <br />
                  <br />
                  We are rated as the{" "}
                  <span className="fw-semibold text-danger">
                    No. 1 Instructor‑Led Online Training
                  </span>{" "}
                  provider in India at Chennai, Bangalore, Pune, Mumbai, Kochi,
                  Coimbatore, Delhi, Hyderabad, Kolkata, Noida, Gurgaon,
                  Madurai, Visakhapatnam cities.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>

          {/* ------------------- Right Quote Card ------------------- */}
          <Col lg={5}>
            <QuoteRequestForm />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TrainingSection;
