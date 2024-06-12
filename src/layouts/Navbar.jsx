import React, { useEffect } from "react";
import { BiCode, BiDownload } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { FaDownload, FaHome } from "react-icons/fa";
import './Navbar.css'

const Navbar = () => {

    useEffect(() => {
        window.addEventListener('scroll', handleTransparent);
        return () => {
            window.removeEventListener('scroll', handleTransparent);
        };
    }, []);

    const handleTransparent = () => {
        const navbar = document.querySelector('.navv');
        if (window.scrollY > 0) {
            navbar.classList.add('bg-transparent');
        } else {
            navbar.classList.remove('bg-transparent');
        }
    }

    return (
        <>
            {/* mobile nav */}
            <div className="navbar fixed navv z-10 top-0 shadow-xl">
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
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <a>Home</a>
                            </li>
                            <li>
                                <a>Projects</a>
                            </li>
                            <li>
                                <a>About</a>
                            </li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl text-[#ce5ff8] font-bold">MUZALPRA</a>
                </div>
                {/* desktop nav */}
                <div className="navbar-center hidden lg:flex  ">
                    <ul className="menu menu-horizontal px-1">
                        <li className="nav-item">
                            <a className="nav-link flex items-center font-bold text-lg text-[#ce5ff8]">
                                <FaHome className="mr-1" />
                                <span>Home</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link flex items-center font-bold text-lg text-[#ce5ff8]">
                                <BiCode className="mr-1" />
                                <span>Projects</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link flex items-center font-bold text-lg text-[#ce5ff8]">
                                <BsPerson className="mr-1" />
                                <span>About</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn font-bold text-md">
                        <FaDownload />
                        Resume
                    </a>
                </div>
            </div>
        </>
    );
};

export default Navbar;
