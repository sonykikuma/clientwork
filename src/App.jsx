import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./components/Header";
import About from "./components/About";
import Activities from "./components/Activities";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BrochureLayout from "./components/BrochureLayout";

function App() {
  return (
    <>
      <div className="">
        {/* <Header />
        <About />
        <Activities />
        <Contact />
        <Footer /> */}
        <BrochureLayout />
      </div>
    </>
  );
}

export default App;
