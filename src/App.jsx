// The main application component, responsible for setting up routes and displaying pages
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import History from "./pages/History";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      {/* The Navbar is displayed on all pages */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home Page */}
        <Route path="/history" element={<History />} /> {/* History Page */}
      </Routes>
    </Router>
  );
};

export default App;
