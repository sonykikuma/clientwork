import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const StudyMaterials = () => {
  return (
    <section className="py-5 bg-light">
      <Container>
        {/* Section Title */}
        <h2 className="mb-4 text-primary">Study Materials</h2>

        {/* Study Material Cards */}
        <Row className="mb-4">
          <Col md={4}>
            <Card className="mb-3 shadow-sm h-100">
              <Card.Body>
                <Card.Title>KSEEB</Card.Title>
                <Card.Text>
                  Karnataka State Board textbooks, guides, and previous years’
                  question papers.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="mb-3 shadow-sm h-100">
              <Card.Body>
                <Card.Title>CBSE</Card.Title>
                <Card.Text>
                  Syllabus, study resources, and solved papers.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="mb-3 shadow-sm h-100">
              <Card.Body>
                <Card.Title>ICSE</Card.Title>
                <Card.Text>
                  Reference materials and model assessments.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="mb-3 shadow-sm h-100">
              <Card.Body>
                <Card.Title>Diploma Material</Card.Title>
                <Card.Text>
                  Notes and project resources across streams.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="mb-3 shadow-sm h-100">
              <Card.Body>
                <Card.Title>Engineering Material</Card.Title>
                <Card.Text>
                  Subject-wise lecture notes, question banks, and lab manuals.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="mb-3 shadow-sm h-100">
              <Card.Body>
                <Card.Title>Internship Material</Card.Title>
                <Card.Text>
                  Report templates and skill development guides.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* CTA Section */}

        {/* Benefits Section */}
        <h3 className="mb-3 text-primary">Benefits</h3>
        <Card className="shadow-sm">
          <Card.Body>
            <ul>
              <li>Personalized learning support</li>
              <li>Regular parent-student progress updates</li>
              <li>Skill development workshops</li>
              <li>Industry exposure and career guidance</li>
              <li>Scholar support programs</li>
            </ul>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};

export default StudyMaterials;
