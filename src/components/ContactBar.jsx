// import React from "react";

// const ContactBar = () => (
//   <div className="bg-primary text-white small py-1">
//     <div className="overflow-auto">
//       <div
//         className="scroll-marquee px-3"
//         style={{ whiteSpace: "nowrap", minWidth: "100%" }}
//       >
//         Chennai: +91‑8099707070  |  Bangalore: +91‑8767260270  | ️ Online:
//         +91‑9707250260  |  USA: +1‑201‑949‑7520 &nbsp;&nbsp;|&nbsp;
//         <span className="fw-semibold">Hire Talent (HR): +91‑9707 240 250</span>
//       </div>
//     </div>
//   </div>
// );

// export default ContactBar;
// //   +91 8035621225 / +91 8217782626

import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

const ContactBar = () => (
  <div className="bg-primary text-white small py-1">
    <div className="overflow-auto">
      <div
        className="scroll-marquee px-3 d-flex gap-4 align-items-center"
        style={{ whiteSpace: "nowrap", minWidth: "100%" }}
      >
        <span className="fw-bold">SS.IIERC&TI</span> |
        <FaMapMarkerAlt className="me-1" />
        #28/1, Yelechenahalli Metro Station, Pillar No 96 & 97, Kanakapura Rd,
        Bengaluru South, Karnataka 560078 | <FaPhone className="me-1" /> +91
        8035621225 / +91 8217782626 | <FaEnvelope className="me-1" />{" "}
        ss2025iiercti@gmail.com
      </div>
    </div>
  </div>
);

export default ContactBar;
