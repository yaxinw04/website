import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Unfinished from "./pages/Unfinished";

import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";

import "./App.css";

// This wrapper gives us route awareness for conditionally styling or hiding elements
function LayoutWrapper() {
  const location = useLocation();
  const isUnfinishedPage = location.pathname === "/unfinished";

  return (
    <div
      className={isUnfinishedPage ? "unfinished-wrapper" : "default-wrapper"}
    >
      {!isUnfinishedPage && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/unfinished" element={<Unfinished />} />
      </Routes>

      {!isUnfinishedPage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router basename="/website">
      <LayoutWrapper />
    </Router>
  );
}

export default App;
