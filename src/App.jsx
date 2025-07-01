import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./components/Header";
import BrochureLayout from "./components/BrochureLayout";
import ContactBar from "./components/ContactBar";
import AnnouncementBar from "./components/AnnouncementBar";
import MainNavbar from "./components/MainNavbar";
import HeroSection from "./components/HeroSection";
import TrainingSection from "./components/TrainingSection";
import ImageCarousel from "./components/ImageCarousel";

import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* <AnnouncementBar /> */}
      <ContactBar />
      <MainNavbar />
      {/* <HeroSection /> */}
      <ImageCarousel />
      {/* <div className="">
        <BrochureLayout />
      </div> */}
      <Footer />
    </>
  );
}

export default App;
