import About from "./Components/About";
import Contact from "./Components/Contact";
import Experiance from "./Components/Experience";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Work from "./Components/Work";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Work />
      <Experiance />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
