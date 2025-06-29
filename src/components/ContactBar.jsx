import React from "react";
import { Container } from "react-bootstrap";

const ContactBar = () => (
  <div className="bg-primary text-white small py-1">
    <Container className="d-flex flex-column flex-md-row justify-content-between text-center gap-2">
      <span>
        Chennai: +91‑8099707070&nbsp; | &nbsp;Bangalore: +91‑8767260270&nbsp; |
        &nbsp;Online: +91‑9707250260&nbsp; | &nbsp;USA: +1‑201‑949‑7520
      </span>
      <span className="fw-semibold">
        Hire Talent (HR):&nbsp;+91‑9707 240 250
      </span>
    </Container>
  </div>
);

export default ContactBar;
