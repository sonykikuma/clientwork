import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CourseCard from "./CourseCard";
import { FaFlask, FaUserMd, FaLaptopCode, FaAtom } from "react-icons/fa";

const courses = [
  {
    icon: <FaLaptopCode size={24} />,
    title: "2-year Board Synchronized PU + JEE Program",
    features: [
      "2-year classroom program",
      "Integrated Board exam and JEE preparation",
      "Option for State Board and CBSE Integrated Classroom Program",
    ],
    eligibility: "10th Std students entering Class 11",
    scholarship: "On merit",
  },
  {
    icon: <FaUserMd size={24} />,
    title: "2-year Board Synchronized PU + NEET Program",
    features: [
      "2-year classroom program",
      "Integrated Board exam and NEET preparation",
      "Option for State Board and CBSE Integrated Classroom Program",
    ],
    eligibility: "10th Std students entering Class 11",
    scholarship: "On merit",
  },
  {
    icon: <FaAtom size={24} />,
    title: "2-year Board Synchronized PU + KCET Program",
    features: [
      "2-year classroom program",
      "Integrated Board exam and KCET preparation",
      "Option for State Board and CBSE Integrated Classroom Program",
    ],
    eligibility: "10th Std students entering Class 11",
    scholarship: "On merit",
  },
  {
    icon: <FaFlask size={24} />,
    title: "Foundation Program for Grades 8, 9, & 10",
    features: [
      "Concept-building in Science and Mathematics",
      "Foundation for JEE, NEET, and KCET with applied learning",
      "Open for State, CBSE and ICSE Boards",
    ],
    eligibility: "Students of Grades 8, 9, and 10",
    scholarship: "On merit",
  },
];

const CourseCardsSection = () => (
  <Container className="py-5">
    <Row className="g-4">
      {courses.map((course, idx) => (
        <Col md={6} lg={3} key={idx}>
          <CourseCard {...course} />
        </Col>
      ))}
    </Row>
    <div className="mt-4 text-center">
      <Button
        as={Link}
        to="/"
        className="btn btn-primary text-white text-decoration-none"
      >
        Enquire Now
      </Button>
    </div>
  </Container>
);

export default CourseCardsSection;
