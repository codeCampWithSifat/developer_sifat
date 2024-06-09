import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Services from "./Components/Services";
import Work from "./Components/Work";

const App = () => {
  return (
    <div className="bg-slate-900">
      <Navbar />
      <Home />
      <About />
      <Services />
      <Work />
      {/* <Experiance /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
