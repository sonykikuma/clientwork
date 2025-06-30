// // src/components/ImageCarousel.jsx
// import React from "react";
// import { Carousel } from "react-bootstrap";

// // ⬇ Replace these with your own images (local or hosted URLs)
// import slide1 from "/slide1.jpeg";
// import slide2 from "/slide2.jpeg";
// import slide4 from "/slide4.jpeg";

// const ImageCarousel = () => (
//   <Carousel fade interval={5000} pause="hover">
//     {/* -------- Slide 1 -------- */}
//     <Carousel.Item>
//       <img className="d-block w-100" src={slide1} alt="First slide" />
//       <Carousel.Caption>
//         <h3>First Slide Label</h3>
//         <p>Short description or call‑to‑action.</p>
//       </Carousel.Caption>
//     </Carousel.Item>

//     {/* -------- Slide 2 -------- */}
//     <Carousel.Item>
//       <img className="d-block w-100" src={slide2} alt="Second slide" />
//       <Carousel.Caption>
//         <h3>Second Slide Label</h3>
//         <p>Another caption line.</p>
//       </Carousel.Caption>
//     </Carousel.Item>

//     {/* -------- Slide 3 -------- */}
//     <Carousel.Item>
//       <img className="d-block w-100" src={slide4} alt="Third slide" />
//       <Carousel.Caption>
//         <h3>Third Slide Label</h3>
//         <p>Something catchy here, too.</p>
//       </Carousel.Caption>
//     </Carousel.Item>
//   </Carousel>
// );

// export default ImageCarousel;
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
          src={slide1}
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
          src={slide2}
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
          src={slide4}
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
