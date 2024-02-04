import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Approach from "./pages/Approach";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy"

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/approach" element={<Approach />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/policy" element={<Policy/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
