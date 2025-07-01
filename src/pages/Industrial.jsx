import React from "react";
import AnnouncementBar from "../components/AnnouncementBar";
import ContactBar from "../components/ContactBar";
import MainNavbar from "../components/MainNavbar";
import Footer from "../components/Footer";
import industrial from "/industrial.jpg";

const Industrial = () => {
  return (
    <>
      {" "}
      {/* <AnnouncementBar /> */}
      <ContactBar />
      <MainNavbar />
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            {/* === LEFT CONTENT === */}
            <div className="col-md-8 mb-md-0">
              <div className="p-4 bg-white shadow-sm rounded-4 h-100">
                <h4 className="fw-bold mb-3">Industrial Activities:</h4>
                <ul className="mb-3">
                  <li>Industrial Projects</li>
                  <li>Consultancy</li>
                  <li>Industrial Skill Development</li>
                  <li>Innovative Design & Product Development </li>
                  <li>Software skill Development</li>
                </ul>
                <p className="mb-0">
                  <strong>Dummy text filler:</strong>
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>

            {/* === RIGHT IMAGE === */}
            <div className="col-md-4">
              <div className="bg-white shadow-sm rounded-4 overflow-hidden d-flex align-items-center">
                <img
                  src={industrial}
                  alt="industrial"
                  className="img-fluid w-100 h-100"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Industrial;
