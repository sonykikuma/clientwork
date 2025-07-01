import React from "react";
import AnnouncementBar from "../components/AnnouncementBar";
import ContactBar from "../components/ContactBar";
import MainNavbar from "../components/MainNavbar";
import Footer from "../components/Footer";
import students from "/students.jpg";
import industrial from "/industrial.jpg";

const Students = () => {
  return (
    <>
      {/* <AnnouncementBar /> */}
      <ContactBar />
      <MainNavbar />
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            {/* === LEFT CONTENT === */}
            <div className="col-md-8 mb-4 mb-md-0">
              <div className="p-4 bg-white shadow-sm rounded-4 h-100">
                <h4 className="fw-bold mb-3">Students Activities:</h4>
                <ul className="mb-3">
                  <li>
                    10th Std (State/ CBSE/ ICSE). - Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </li>
                  <li>
                    PUC (State / CBSE / ICSE). - Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </li>
                  <li>
                    Diploma Courses. - Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua
                  </li>
                  <li>
                    Engineering Courses. - Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua{" "}
                  </li>
                  <li>
                    Master's Courses - Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </li>
                  <li>
                    Tuitions - Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </li>
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
              <div className="bg-white shadow-sm rounded-4 overflow-hidden h-100 d-flex align-items-center">
                <img
                  src={industrial}
                  alt="students"
                  className="img-fluid w-100"
                  style={{ objectFit: "cover", height: "100%" }}
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

export default Students;
