import React from "react";

const AnnouncementBar = () => (
  <div className="bg-orange text-white small py-1">
    <div className="overflow-auto">
      <div className="scroll-marquee px-3" style={{ whiteSpace: "nowrap" }}>
        We Offer 100% Job Guarantee Courses (Any Degree / Diploma Candidates /
        Year GAP / Non‑IT / Any Passed Outs).&nbsp;
        <a
          href="/placement-records"
          className="text-yellow fw-semibold text-decoration-underline"
        >
          Placement Records
        </a>
      </div>
    </div>
  </div>
);

export default AnnouncementBar;
