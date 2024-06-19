import About from "./Components/About";
// import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Services from "./Components/Services";

const App = () => {
  return (
    <div className="bg-slate-900">
      <Navbar />
      <Home />
      <About />
      <Services />
      <Projects />
      {/* <Experiance /> */}
      {/* <Contact /> */}
      <Footer />
    </div>
  );
};

export default App;
