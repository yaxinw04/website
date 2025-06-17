import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./pages/Footer";
import "./App.css";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Rocks from "./pages/Rocks";
import ReactTyped from "react-typed";
import Navbar from "./pages/Navbar";
import Unfinished from "./pages/Unfinished"; // ✅ Add this line

function App() {
  return (
    <div>
      <Router basename="/website">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/unfinished" element={<Unfinished />} />{" "}
          {/* ✅ New route */}
          {/* Add other routes as needed */}
        </Routes>
      </Router>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
