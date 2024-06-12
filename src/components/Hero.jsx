import React from "react";
import { BsGithub, BsInstagram } from "react-icons/bs";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center mt-10 gap-10 md:gap-16 w-full px-4 md:px-0">
        <div className="flex flex-col w-full md:w-[600px] items-center md:items-start justify-center p-4 md:p-16">
          <h1 className="text-white font-bold text-2xl md:text-4xl mt-5 flex justify-center md:justify-start items-center">
            Hi&nbsp;<span className="text-primary">There!</span>
            <img
              src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Raised%20Back%20of%20Hand%20Light%20Skin%20Tone.png"
              alt="Raised Back of Hand Light Skin Tone"
              width="35"
              height="35"
              className="ml-2"
              style={{ marginTop: "2px" }}
            />
          </h1>
          <div className="w-full mt-5 text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-bold text-primary mb-5">
              <span className="text-white">I'M</span> Muhammad Zaldi Pratama
            </h1>
            <TypeAnimation
              className="text-2xl md:text-4xl font-bold text-primary"
              sequence={[
                "Software Developer",
                2000,
                "MERN STACK Developer",
                1000,
                "Music Producer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{ display: "inline-block" }}
              repeat={Infinity}
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-[600px] flex justify-center md:justify-end">
          <img
            src="home-main.svg"
            className="w-full md:w-auto"
            alt="Home"
          />
        </div>
      </div>
      {/* introduce myself */}
      <div className="flex md:flex-row md:gap-10 md:w-full gap-5 flex-col justify-center px-5 mt-10  bg-transparent bg-gradient-to-r from-[#021c34] via-[#550587] to-[#6c11ff] h-96 md:rounded-full">
        <div className="text-left md:mt-10">
          <h1 className="font-bold md:text-4xl mt-20 text-primary text-2xl ippercase">
            Let me introduce <span className="text-white">myself</span>
          </h1>
          <p className="md:text-2xl mt-2 mb-2 font-semibold text-primary text-xl">
            I am fluent in React Js and Node Js{" "}
          </p>
          <p className="md:text-2xl  font-semibold text-primary text-xl">
            My field of Interest's are building new Web Technologies and
            Products{" "}
          </p>
        </div>
        <div className="mt-5 md:mt-10">
          <img
            src="zal.png"
            alt="avatar"
            className="mx-auto w-56 h-56 rounded-full"
          />
        </div>
      </div>
        {/* connect */}
      <div className="px-5 mt-20">
        <h1 className="font-bold md:text-4xl text-2xl text-primary text-center">Feel free to connect <span className="text-white">with me</span></h1>
        {/* icons */}
        <div className="flex justify-center mt-5 gap-5 mb-14">
              <li>
                <a href="https://github.com/zaldyprtm" target="_blank">
                <BsGithub 
                className="text-3xl text-white hover:text-primary cursor-pointer"
                />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/zaldyprtm" target="_blank">
                <FaLinkedin
                className="text-3xl text-white hover:text-primary cursor-pointer"
                />
                </a>
              </li>
              <li>
                <a href="https://instagram.com/_zackdirmusic" target="_blank">
                <FaInstagram 
                className="text-3xl text-white hover:text-primary cursor-pointer"
                />
                </a>
              </li>
        </div>
      </div>
    </>
  );
};

export default Hero;
