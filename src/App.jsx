import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Planets } from "react-preloaders";
import Hero from "./components/Hero";
import Navbar from "./layouts/Navbar";
import Particle from "./components/Particle";
// import Footer from "./layouts/Footer";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./layouts/Footer";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [delay, setDelay] = useState(5000); // Default delay 5 seconds

  useEffect(() => {
    // Get network information
    const connection =
      navigator.connection ||
      navigator.mozConnection ||
      navigator.webkitConnection;

    // Set delay based on connection type
    if (connection) {
      switch (connection.effectiveType) {
        case "4g":
          setDelay(2000); // Fast connection, shorter delay
          break;
        case "3g":
          setDelay(5000); // Moderate connection, default delay
          break;
        case "2g":
        case "slow-2g":
          setDelay(10000); // Slow connection, longer delay
          break;
        default:
          setDelay(5000); // Default delay
          break;
      }
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    // Cleanup the timeout if the component unmounts
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <>
    <Router>
      <Particle />
      <Navbar />
      {isLoading ? (
        <Planets background={"#091724"} />
      ) : (
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/about" element={<About />} />
          {/* Add more routes as needed */}
        </Routes>
      )}

    </Router>
<Footer />
</>
  );
}

export default App;
