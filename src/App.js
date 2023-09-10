import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Rocks from "./pages/Rocks";
import ReactTyped from "react-typed";
import Navbar from "./pages/Navbar"; // Adjust the path if needed

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        {/* ... other routes ... */}
      </Routes>
    </Router>
  );
}

export default App;

// const App = () => {
//   return (
//     <div>
//       {/* Routing */}
//       <Router>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/portfolio" element={<Portfolio />} />
//           <Route path="/resume" element={<Resume />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/rocks" element={<Rocks />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// };

// // export default App;
