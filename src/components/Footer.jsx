// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";

// const Footer = () => {
//   return (
//     <footer className="bg-light border-top mt-5 py-4">
//       <Container>
//         <Row className="gy-4">
//           {/* === Useful Links === */}
//           <Col md={4}>
//             <div className="p-3 border rounded-4 bg-white h-100">
//               <h5 className="fw-bold mb-3">Useful Links</h5>
//               <ul className="list-unstyled mb-0">
//                 <li>
//                   <a href="#about" className="text-dark text-decoration-none">
//                     About Us
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#success" className="text-dark text-decoration-none">
//                     Success Stories
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#privacy" className="text-dark text-decoration-none">
//                     Privacy Policy
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </Col>

//           {/* === Our Services === */}
//           <Col md={4}>
//             <div className="p-3 border rounded-4 bg-white h-100">
//               <h5 className="fw-bold mb-3">Our Services</h5>
//               <ul className="list-unstyled mb-0">
//                 <li>Training Programs</li>
//                 <li>Academic Projects</li>
//                 <li>Industrial Consultancy</li>
//                 <li>Software Skill Development</li>
//                 <li>Exam Coaching</li>
//               </ul>
//             </div>
//           </Col>

//           {/* === Follow Us === */}
//           <Col md={4}>
//             <div className="p-3 border rounded-4 bg-white h-100">
//               <h5 className="fw-bold mb-3">Follow Us</h5>
//               <ul className="list-unstyled mb-0">
//                 <li>
//                   <a href="#" className="text-dark text-decoration-none">
//                     Website
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-dark text-decoration-none">
//                     LinkedIn
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-dark text-decoration-none">
//                     Instagram
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-dark text-decoration-none">
//                     YouTube
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaGlobe,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-info text-dark pt-4 pb-3 mt-5">
      <Container>
        <Row>
          {/* === Left Column: Logo & Address === */}
          <Col md={3} className="mb-4">
            <h4 className="fw-bold">SS.IIERC&TI</h4>
            <p className="mb-1">
              <FaMapMarkerAlt className="me-2" />
              #28/1, Yelechenahalli Metro Station,
              <br />
              Pillar No 96 & 97, Kanakapura Rd,
              <br />
              Bengaluru South, Karnataka 560078
            </p>
            <p className="mb-1">
              <FaEnvelope className="me-2" />
              ss2025iiercti@gmail.com
            </p>
            <p>
              <FaPhone className="me-2" />
              +91 8035621225 / +91 8217782626
            </p>
          </Col>

          {/* === Community / Career / CRIO-style links === */}
          <Col md={3} className="mb-4">
            <h6 className="fw-bold">TRAINING PROGRAMS</h6>
            <ul className="list-unstyled">
              <li>CFD / CAD</li>
              <li>Software Tools</li>
              <li>Skill Development</li>
              <li>Certified Projects</li>
            </ul>
          </Col>

          <Col md={3} className="mb-4">
            <h6 className="fw-bold">STUDENT SUPPORT</h6>
            <ul className="list-unstyled">
              <li>10th / PUC Coaching</li>
              <li>Engineering Tuitions</li>
              <li>Master’s Projects</li>
              <li>Competitive Exams (CET, GATE)</li>
            </ul>
          </Col>

          <Col md={3} className="mb-4">
            <h6 className="fw-bold">QUICK LINKS</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </Col>
        </Row>

        <Row className="pt-3 border-top">
          <Col md={6} className="text-start small">
            © 2025 SS-IIERC&TI. All rights reserved.
          </Col>
          <Col md={6} className="text-end">
            <a href="#" className="text-dark me-3">
              <FaLinkedin />
            </a>
            <a href="#" className="text-dark me-3">
              <FaInstagram />
            </a>
            <a href="#" className="text-dark me-3">
              <FaYoutube />
            </a>
            <a href="#" className="text-dark">
              <FaGlobe />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
