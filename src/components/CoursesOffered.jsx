// src/components/CoursesOffered.jsx
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CoursesOffered = () => {
  return (
    <section className="bg-light py-5">
      <Container className="text-center">
        <h4 className="mb-4 border p-2 d-inline-block rounded-3 shadow-lg">
          Courses Offered / Courses
        </h4>

        <Row className="justify-content-center g-4 mt-3">
          {/* 10th std */}
          <Col md={3}>
            <Card className="h-100 shadow-lg rounded-4">
              <Card.Body>
                <Card.Title>10th std</Card.Title>
                <Card.Text>
                  State/CBSE/ICSE <br />
                  <ul className="text-start ps-3">
                    <li>Offline - Individual Subjects (Maths & Science)</li>
                    <li>Online - Individual Subjects</li>
                    <li>Individual students mentorship (per hr basis)</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* PUC */}
          <Col md={3}>
            <Card className="h-100 shadow-lg rounded-4">
              <Card.Body>
                <Card.Title>PUC</Card.Title>
                <Card.Text>
                  State/CBSE/ICSE <br />
                  <ul className="text-start ps-3">
                    <li>Offline - Individual Subjects (Maths & Science)</li>
                    <li>Online - Individual Subjects</li>
                    <li>Individual students mentorship (per hr basis)</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Diploma/Engineering/Master's */}
          <Col md={2}>
            <Card className="h-100 shadow-lg rounded-4">
              <Card.Body>
                <ul className="text-start ps-3">
                  <li>Diploma Courses</li>
                  <li>Engineering Courses</li>
                  <li>Master's Courses</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          {/* Tuitions */}
          <Col md={2}>
            <Card className="h-100 shadow-lg rounded-4">
              <Card.Body>
                <Card.Text>Tuitions</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* <div className="mt-4">
          <Button
            as={Link}
            to="/"
            className="btn btn-primary text-white text-decoration-none"
          >
            Enquire Now
          </Button>
        </div> */}
      </Container>
    </section>
  );
};

export default CoursesOffered;
