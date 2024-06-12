import React from "react";
import { TypeAnimation } from 'react-type-animation';


const Hero = () => {
  return (
    <>

      <div className="flex flex-row justify-center mt-1 gap-16 w-full">
        <div className="flex flex-col w-[600px] items-center justify-center p-16">
          <h1 className="text-white font-bold text-4xl flex justify-center items-center text-left"> 
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

          <div className="w-full mt-5 text-left">
            <h1 className="text-3xl font-bold text-primary mb-5"><span className="text-white">I'M</span> Muhammad Zaldi Pratama</h1>
            <TypeAnimation
              className="text-4xl text-left font-bold  text-primary"
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Software Developer",
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                "MERN STACK Developer",
                1000,
                "Music Producer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />
          </div>
        </div>
        <div>
          <img src="./public/home-main.svg" className="w-[600px]" alt="Home" />
        </div>
      </div>
    </>
  );
};

export default Hero;
