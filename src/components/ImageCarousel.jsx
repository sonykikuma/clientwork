import React from "react";
import { Carousel } from "react-bootstrap";
import slide1 from "/slide1.jpeg";
import slide2 from "/slide2.jpeg";
import slide4 from "/slide4.jpeg";

const ImageCarousel = () => (
  <div className="carousel-wrapper">
    <Carousel fade interval={5000} pause="hover">
      <Carousel.Item>
        <img
          className="d-block w-100 "
          style={{ height: "100vh", objectFit: "cover" }}
          src="/client5.jpeg"
          //{slide1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Our new office</h3>
          <p>Short description or call‑to‑action.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src="/client7.jpeg" //{slide2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Our new office</h3>
          <p> caption2</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src="/client9.jpeg" //{slide4}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Our new office</h3>
          <p>caption3</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
);

export default ImageCarousel;
