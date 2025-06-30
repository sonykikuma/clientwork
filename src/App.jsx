import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./components/Header";
import BrochureLayout from "./components/BrochureLayout";
import ContactBar from "./components/ContactBar";
import AnnouncementBar from "./components/AnnouncementBar";
import MainNavbar from "./components/MainNavbar";
import HeroSection from "./components/HeroSection";
import TrainingSection from "./components/TrainingSection";

import "./App.css";

function App() {
  return (
    <>
      {/* <Header /> */}
      <AnnouncementBar />
      <ContactBar />
      <MainNavbar />
      <HeroSection />
      <TrainingSection />
      <div className="">
        <BrochureLayout />
      </div>
    </>
  );
}

export default App;
