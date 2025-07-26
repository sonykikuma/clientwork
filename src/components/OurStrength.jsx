import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const OurStrength = () => {
  return (
    <section className="py-5 bg-white">
      <Container>
        <h2 className="mb-4 text-primary">Our Strength</h2>
        <Row>
          {/* About Facilities */}
          <Col md={4}>
            <Card className="mb-4 shadow-sm h-100">
              <Card.Body>
                <Card.Title className="text-primary">
                  About Facilities
                </Card.Title>
                <Card.Text>
                  Our institution is equipped with infrastructure that supports
                  academic excellence and practical learning. This includes
                  modern labs, classrooms, and digital tools.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* About Faculties */}
          <Col md={4}>
            <Card className="mb-4 shadow-sm h-100">
              <Card.Body>
                <Card.Title className="text-primary">
                  About Faculties
                </Card.Title>
                <ul className="mb-0">
                  <li>Qualified, experienced, and approachable educators</li>
                  <li>Continuous faculty development programs</li>
                  <li>Mentoring and personalized guidance</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          {/* Industry Connect */}
          <Col md={4}>
            <Card className="mb-4 shadow-sm h-100">
              <Card.Body>
                <Card.Title className="text-primary">
                  Industry Connect / Placement
                </Card.Title>
                <ul className="mb-0">
                  <li>Internship and apprenticeship opportunities</li>
                  <li>
                    Dedicated mentors to guide students toward successful
                    careers
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OurStrength;
