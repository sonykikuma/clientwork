import React, { useState } from "react";
import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";
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
const API_URL = "https://client-backend-ten.vercel.app/client";

const CourseCardsSection = () => {
  const [show, setShow] = useState(false);
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    phone: "",
    classBoard: "",
    course: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      });

      if (response.ok) {
        alert("form submitted successfully");
        setShow(false);
        setFormdata({
          name: "",
          email: "",
          phone: "",
          classBoard: "",
          course: "",
        });
      } else {
        alert("Error submitting form. Please try again.");
      }
    } catch (error) {
      console.log("Error:", error);
      alert("Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
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
          className="btn btn-primary text-white text-decoration-none"
          onClick={handleShow}
        >
          Enquire Now
        </Button>
      </div>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Student Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Your Name*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formdata.value}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Your Email Address*</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formdata.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Your Phone Number*</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter your phone number"
                name="phone"
                value={formdata.phone}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Class & Board of Child*</Form.Label>
              <Form.Select
                name="classBoard"
                value={formdata.classBoard}
                onChange={handleChange}
                required
              >
                <option>-- Select --</option>
                <option>Class 10 - CBSE</option>
                <option>Class 10 - State Board</option>
                {/* Add other options as required */}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Course Interested In*</Form.Label>
              <Form.Select
                name="course"
                value={formdata.course}
                onChange={handleChange}
                required
              >
                <option>-- Select --</option>
                {courses.map((course, idx) => (
                  <option key={idx}>{course.title}</option>
                ))}
              </Form.Select>
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="w-100"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting...." : "Submit"}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default CourseCardsSection;
