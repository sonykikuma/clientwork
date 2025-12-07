import React, { useState } from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";
import {
  FaBook,
  FaRegLightbulb,
  FaUserGraduate,
  FaChalkboardTeacher,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import EnquiryModal from "./EnquiryModal";

const academicData = [
  { icon: <FaChalkboardTeacher size={22} />, title: "Tuitions" },
  { icon: <FaBook size={22} />, title: "Student Projects" },
  { icon: <FaRegLightbulb size={22} />, title: "Skill Development" },
  { icon: <FaUserGraduate size={22} />, title: "Summer Camps" },
];
const industrialData = [
  { icon: <FaChalkboardTeacher size={22} />, title: "Product Design" },
  { icon: <FaBook size={22} />, title: "Project Analysis" },
  { icon: <FaRegLightbulb size={22} />, title: "Product Development" },
];

export default function AcademicActivitiesCard() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Container className="my-5">
        <Row className="justify-content-center g-4">
          {/* Academic Card */}
          <Col xs={11} sm={10} md={6} lg={5} xl={4}>
            <Card className="border-0 shadow rounded-4 text-start p-3 h-100">
              <h4 className="fw-semibold text-center mb-3">
                Academic Activities
              </h4>

              <ul className="list-unstyled ps-2 mb-4">
                {academicData.map((item, index) => (
                  <li key={index} className="d-flex align-items-center mb-2">
                    <FaCheckCircle className="text-primary me-2" />
                    <span className="fw-semibold">{item.title}</span>
                  </li>
                ))}
              </ul>

              <div className="text-center">
                <Link to="/academic" className="btn btn-primary px-4 py-2">
                  Read More
                </Link>
              </div>
            </Card>
          </Col>

          {/* Industrial Card */}
          <Col xs={11} sm={10} md={6} lg={5} xl={4}>
            <Card className="border-0 shadow rounded-4 text-start p-3 h-100">
              <h4 className="fw-semibold text-center mb-3">
                Industrial Activities
              </h4>

              <ul className="list-unstyled ps-2 mb-4">
                {industrialData.map((item, index) => (
                  <li key={index} className="d-flex align-items-center mb-2">
                    <FaCheckCircle className="text-primary me-2" />
                    <span className="fw-semibold">{item.title}</span>
                  </li>
                ))}
              </ul>

              <div className="text-center">
                <Link to="/industrial" className="btn btn-primary px-4 py-2">
                  Read More
                </Link>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
      <div className="text-center mt-4 pb-5">
        <Button
          onClick={() => setShowModal(true)}
          className="btn btn-primary px-4"
        >
          Enquire Now
        </Button>
      </div>
      <EnquiryModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        courseList={[...academicData, ...industrialData]} // all course options
      />
    </>
  );
}
