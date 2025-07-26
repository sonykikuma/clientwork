import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Offerings = () => {
  return (
    <section className="pt-2 pb-5 bg-light">
      <Container>
        <h2 className="mb-4 text-primary">Courses Offered</h2>
        <Row className="mb-4">
          <Col md={6}>
            <Card className="mb-3 shadow-sm">
              <Card.Body>
                <Card.Title>10th Std (State / CBSE / ICSE)</Card.Title>
                <ul>
                  <li>Offline – individual subjects (Maths and Science)</li>
                  <li>Online – individual subjects</li>
                  <li>Individual student mentorship (per hour basis)</li>
                </ul>
              </Card.Body>
            </Card>
            <Card className="mb-3 shadow-sm">
              <Card.Body>
                <Card.Title>PUC (State / CBSE / ICSE)</Card.Title>
                <ul>
                  <li>Offline – individual subjects (Maths and Science)</li>
                  <li>Online – individual subjects</li>
                  <li>Individual student mentorship (per hour basis)</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="mb-3 shadow-sm">
              <Card.Body>
                <Card.Title>Other Courses</Card.Title>
                <ul>
                  <li>Diploma Courses</li>
                  <li>Engineering Courses</li>
                  <li>Master's Courses</li>
                  <li>Tuitions</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Academic Activities */}
        <h2 className="mb-4 text-primary">Academic Activities</h2>
        <Row className="mb-4">
          <Col md={6}>
            <Card className="mb-3 shadow-sm">
              <Card.Body>
                <ul>
                  <li>Mini / Major Projects</li>
                  <li>Certified Training Programs</li>
                  <li>Software Training</li>
                  <li>
                    Coaching for Competitive Exams (CET / NEET / JEE / GATE)
                  </li>
                  <li>CAD & CFD Software Training</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Industrial Activities */}
        <h2 className="mb-4 text-primary">Industrial Activities</h2>
        <Row className="mb-4">
          <Col md={6}>
            <Card className="mb-3 shadow-sm">
              <Card.Body>
                <ul>
                  <li>Industrial Projects</li>
                  <li>Consultancy</li>
                  <li>Industrial Skill Development</li>
                  <li>Innovative Design & Product Development</li>
                  <li>Software Skill Development</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* CTA Section */}
        <h2 className="mb-3 text-primary">Enrollment</h2>
        <Card className="p-4 shadow-sm text-center">
          <h4>Ready to join us?</h4>
          <p>Complete your application quickly and securely online.</p>
          <Button variant="success" href="/students">
            Online Admission Form
          </Button>
        </Card>
      </Container>
    </section>
  );
};

export default Offerings;
