import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";

const API_URL = "https://client-backend-ten.vercel.app/client";

export default function EnquiryModal({ show, handleClose, courseList }) {
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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formdata),
      });

      if (response.ok) {
        alert("Form submitted successfully!");
        handleClose();
        setFormdata({
          name: "",
          email: "",
          phone: "",
          classBoard: "",
          course: "",
        });
      } else {
        alert("Submission failed. Try again.");
      }
    } catch (err) {
      console.log(err);
      alert("Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
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
              name="name"
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email*</Form.Label>
            <Form.Control
              type="email"
              name="email"
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Phone*</Form.Label>
            <Form.Control
              type="tel"
              name="phone"
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Class & Board*</Form.Label>
            <Form.Select name="classBoard" onChange={handleChange} required>
              <option>-- Select --</option>
              <option>Class 10 - CBSE</option>
              <option>Class 10 - State Board</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Interested In*</Form.Label>
            <Form.Select name="course" onChange={handleChange} required>
              <option>-- Select --</option>
              {courseList.map((item, i) => (
                <option key={i}>{item.title}</option>
              ))}
            </Form.Select>
          </Form.Group>

          <Button type="submit" className="w-100" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
