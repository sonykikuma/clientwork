import React from "react";

function Activities() {
  return (
    <section className="container my-5">
      <h2>Our Activities</h2>
      <div className="row">
        <div className="col-md-4">
          <h4>Industry Activities</h4>
          <ul>
            <li>Industrial Projects</li>
            <li>Consultancy</li>
            <li>Industrial Skill Development</li>
            <li>Innovative Product Design</li>
            <li>Software Skill Development</li>
          </ul>
        </div>
        <div className="col-md-4">
          <h4>Academic Activities</h4>
          <ul>
            <li>Mini / Major Projects</li>
            <li>Certified Training Programs</li>
            <li>Software Training</li>
            <li>Competitive Exam Coaching (CET / NEET / JEE / GATE)</li>
            <li>CAD & CFD Training</li>
          </ul>
        </div>
        <div className="col-md-4">
          <h4>Student Activities</h4>
          <ul>
            <li>10th (State / CBSE / ICSE)</li>
            <li>PUC</li>
            <li>Diploma</li>
            <li>Engineering</li>
            <li>Master’s Courses</li>
            <li>Tuitions</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Activities;
