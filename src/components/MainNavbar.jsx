// src/components/MainNavbar.jsx
import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Dropdown, // ⬅ using Dropdown directly so we can style the toggle as a button
} from "react-bootstrap";
import MultiLevelDropdown from "./MultiLevelDropdown";
import logo from "../assets/dev-logo.svg";

// --- sample data ---
const recommended = [
  "Full Stack Developer",
  "Data Analytics",
  "Cloud Computing",
  "Data Science",
  "Software Testing",
  "Combo Courses",
];

const allCourses = [
  { label: "Master Program", url: "#" },
  { label: "Cloud Computing", url: "#" },
  { label: "Data Analytics", url: "#" },
  { label: "Programming", url: "#" },
  { label: "Software Testing", url: "#" },
  { label: "DevOps", url: "#" },
  { label: "Web Designing", url: "#" },
  { label: "Project Management", url: "#" },
  { label: "Other Training", url: "#" },
];
// --------------------

const MainNavbar = () => (
  <Navbar expand="lg" bg="white" className="shadow-sm">
    <Container>
      <Navbar.Brand href="/">
        <img src={logo} alt="Logo" height="42" />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="mainNav" />
      <Navbar.Collapse id="mainNav">
        {/* ---------------------------------  RIGHT SIDE  -------------------------------- */}
        <Nav className="ms-auto gap-lg-3 align-items-lg-center">
          {/* >>>> Recommended Courses (solid‑blue pill) */}
          <Dropdown as={Nav.Item}>
            <Dropdown.Toggle
              as={Nav.Link}
              className="bg-primary text-white px-3 py-2 rounded"
              style={{ border: "none" }}
            >
              Recommended Courses
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {recommended.map((label) => (
                <Dropdown.Item href="#" key={label}>
                  {label}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          {/* >>>> All Courses (multi‑level) */}
          <MultiLevelDropdown title="All Courses " items={allCourses} />

          {/* >>>> Standard links */}
          {[
            { href: "/branches", label: "Branches" },
            { href: "/online-training", label: "Online Training" },
            { href: "/corporate-training", label: "Corporate Training" },
            { href: "/hire-talent", label: "Hire Talent" },
            { href: "/job-seekers", label: "Job Seekers" },
          ].map((l) => (
            <Nav.Link href={l.href} key={l.label}>
              {l.label}
            </Nav.Link>
          ))}
        </Nav>
        {/* ------------------------------------------------------------------------------- */}
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default MainNavbar;
