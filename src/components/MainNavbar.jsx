import React from "react";
import { Navbar, Container, Nav, Dropdown } from "react-bootstrap";
import MultiLevelDropdown from "./MultiLevelDropdown";
import logo from "../assets/logo.jpeg";

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
  { label: "Academic Activities", url: "/academic" },
  { label: "Industry Activities", url: "/industrial" },
  { label: "Student Activities", url: "/students" },

  // { label: "Master Program", url: "#" },
  // { label: "Cloud Computing", url: "#" },
  // { label: "Data Analytics", url: "#" },
  // { label: "Programming", url: "#" },
  // { label: "Software Testing", url: "#" },
  // { label: "DevOps", url: "#" },
  // { label: "Web Designing", url: "#" },
  // { label: "Project Management", url: "#" },
  // { label: "Other Training", url: "#" },
];
// --------------------

const MainNavbar = () => (
  <Navbar expand="lg" bg="white" className="shadow-sm">
    <Container>
      <Navbar.Brand href="/">
        <img
          src={logo}
          alt="Logo"
          className="brand-logo d-inline-block align-top"
        />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="mainNav" />
      <Navbar.Collapse id="mainNav">
        {/* ---------------------------------  RIGHT SIDE  -------------------------------- */}
        <Nav className="ms-auto gap-lg-3 align-items-lg-center">
          {/*  Recommended Courses (solid‑blue pill) */}
          <Nav.Link href="/">Home</Nav.Link>

          {/* <Dropdown as={Nav.Item}>
            <Dropdown.Toggle
              as={Nav.Link}
              className="bg-primary text-white px-3 py-2 rounded"
              style={{ border: "none" }}
            >
              Home {/* Recommended Courses 
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {recommended.map((label) => (
                <Dropdown.Item href="#" key={label}>
                  {label}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown> */}

          {/*  All Courses (multi‑level) */}
          <MultiLevelDropdown title="Our Services " items={allCourses} />

          {[
            { href: "/about", label: "About Us" },
            { href: "/", label: "Testimonials" },
            { href: "/", label: "Contact Us" },
            // { href: "/hire-talent", label: "Hire Talent" },
            // { href: "/job-seekers", label: "Job Seekers" },
          ].map((l) => (
            <Nav.Link href={l.href} key={l.label}>
              {l.label}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default MainNavbar;
