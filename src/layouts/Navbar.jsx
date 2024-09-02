import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { BiCode, BiDownload } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { FaDownload, FaHome } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  useEffect(() => {
    window.addEventListener("scroll", handleTransparent);
    return () => {
      window.removeEventListener("scroll", handleTransparent);
    };
  }, []);

  const handleTransparent = () => {
    const navbar = document.querySelector(".navv");
    if (window.scrollY > 0) {
      navbar.classList.add("bg-transparent");
    } else {
      navbar.classList.remove("bg-transparent");
    }
  };

  const handleHome = () => {
    window.Location("./");
    window.location.reload();
  };

  return (
    <>
      {/* mobile nav */}
      <div className="navbar navv sticky z-10 top-0 shadow-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 bg-base-100 z-10 p-2 shadow-2xl backdrop-blur-3xl rounded-box w-52"
            >
              <li>
                <Link to="/" className="font-semibold text-primary">
                  <FaHome />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" className="font-semibold text-primary">
                  <BiCode className="mr-1" />
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/about" className="font-semibold text-primary">
                  <BsPerson className="mr-1" />
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div className="btn btn-ghost text-xl text-[#ce5ff8] font-bold glow-blue">
            <Link to="/" onClick={handleHome}>
              MUZALPRA
            </Link>
          </div>
        </div>
        {/* desktop nav */}
        <div className="navbar-center hidden lg:flex sticky top-0 z-10 ">
          <ul className="menu menu-horizontal px-1">
            <li className="">
              <Link
                to="/"
                className="nav-link flex items-center font-bold text-lg text-[#ce5ff8]"
              >
                <FaHome className="mr-1" />
                <span>Home</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/projects"
                className="nav-link flex items-center font-bold text-lg text-[#ce5ff8]"
              >
                <BiCode className="mr-1" />
                <span>Projects</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className="nav-link flex items-center font-bold text-lg text-[#ce5ff8]"
              >
                <BsPerson className="mr-1" />
                <span>About</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a
            className="btn font-bold text-md bg-indigo-600 text-white"
            onClick={() => window.open("RESUMEMuhammadZaldiPratama.pdf")}
          >
            <FaDownload />
            Resume
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
