import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/navigation.component";
import ParticlesComponent from "./components/particles/particles-background";
import About from "./routes/about/about.route";
import Contact from "./routes/contact/contact.route";
import Home from "./routes/home/home.route";
import Projects from "./routes/projects/projects.route";

function App() {
  return (
    <div className="App">
      <ParticlesComponent id="tsparticles" />
      <span className="below-nav">
        <Navbar />
      </span>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
