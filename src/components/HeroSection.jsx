import React from "react";
import { Container } from "react-bootstrap";
import SearchBar from "./SearchBar";

const HeroSection = () => (
  <section className="hero-gradient text-white text-center py-5">
    <Container>
      <h1 className="display-5 fw-bold">Besant Technologies</h1>
      <p className="lead">
        Best Online &amp; Classroom Training Institute&nbsp;
        <a
          href="/placement-statistics"
          className="text-yellow text-decoration-underline fw-semibold"
        >
          Placement Statistics
        </a>
      </p>

      {/* Search */}
      <SearchBar />
    </Container>
  </section>
);

export default HeroSection;
