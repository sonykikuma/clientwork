import React from "react";
import AnnouncementBar from "../components/AnnouncementBar";
import ContactBar from "../components/ContactBar";
import MainNavbar from "../components/MainNavbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      {/* <AnnouncementBar /> */}
      <ContactBar />
      <MainNavbar />
      {/* body */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="mb-4">About SS-IIERC&TI</h2>
          <div className="row align-items-center">
            <div className="col-md-7 mb-4 mb-md-0">
              <div className="p-4 bg-white shadow-sm rounded-4">
                <p>
                  SS-IIERC&TI is a well-established institute offering a wide
                  range of services in research, consultancy, and training for
                  students, academic, and industry professionals. The institute
                  provides both offline and online courses, supported by expert
                  instructors from IITs, NITs, and reputed national and
                  international universities.
                </p>
                {/* <p>
                  With 100% job-oriented programs, project mentoring, and
                  international exposure, we support learners from 10th grade to
                  post-graduate level, both in India and abroad.
                </p> */}
                <p>
                  This programs covers student activities such as academic
                  support for 10th (State/CBSE/ICSE), PUC, Diploma, Engineering,
                  and Master's courses, both within India and Abroad.
                  Industry-oriented activities include industrial projects,
                  innovative product design and development, consultancy, and
                  skill enhancement. Academic services include mini and major
                  projects, certified training programs, software training
                  (including CFD tools), and coaching for competitive exams like
                  CET, NEET, JEE, and GATE. The institute also offers technical
                  courses in programming languages such as Java, Python, and
                  other industry-relevant software skills to equip learners with
                  practical and in-demand knowledge.
                  <br />
                  <br /> <b>INSTRUCTORS FROM:</b>{" "}
                  <span className="bg-warning p-2">
                    IITs, NITs, International, National Reputed Universities &
                    Industries.{" "}
                  </span>
                </p>
              </div>
            </div>
            {/* IMAGE BLOCK */}
            <div className="col-md-5">
              <div className="bg-white shadow-sm rounded-4 overflow-hidden">
                <img
                  src="/slide3.jpeg"
                  alt="About us"
                  className="img-fluid w-100"
                  style={{ height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="py-5 bg-light">
        <div className="container">
          <h1 className="mb-4">About SS-IIERC&TI</h1>
          <p>
            SS-IIERC&TI is a premier institute offering comprehensive training,
            consultancy, and project support for students and professionals.
            With instructors from IITs, NITs, and reputed universities, we
            deliver quality education across programming, software tools,
            industrial design, and competitive exam prep.
          </p>
          <p>
            We support students from 10th grade to Master’s level, and also help
            industry professionals with real-world project execution and
            upskilling.
          </p>
        </div>
      </section> */}

      <Footer />
    </>
  );
};

export default About;
