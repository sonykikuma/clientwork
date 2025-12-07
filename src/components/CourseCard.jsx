import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";

const CourseCard = ({ icon, title, features, eligibility, scholarship }) => {
  return (
    <Card className="border-0 shadow rounded-4 h-100 text-start">
      <Card.Body>
        {/* Icon */}
        <div className="d-flex justify-content-center mb-3">
          <div className="bg-primary text-white p-3 rounded-circle">{icon}</div>
        </div>

        {/* Title */}
        <Card.Title className="fw-semibold text-center fs-5">
          {title}
        </Card.Title>

        {/* Features */}
        <p className="fw-bold mt-3 mb-1 text-primary">Course Features</p>
        <div className="mb-3">
          {features?.map((item, idx) => (
            <div key={idx} className="d-flex align-items-start mb-2">
              <FaCheckCircle className="text-primary me-2 mt-1" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Details */}
        {/* <p className="mb-1">
          <strong>Course Eligibility:</strong> {eligibility}
        </p>
        <p className="mb-0">
          <strong>Scholarship:</strong> {scholarship}
        </p> */}
      </Card.Body>
    </Card>
  );
};

export default CourseCard;
