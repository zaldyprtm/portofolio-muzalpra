import { BiLogoTailwindCss, BiWindows } from "react-icons/bi";
import {
  DiHtml5,
  DiJavascript,
  DiJavascript1,
  DiMongodb,
  DiReact,
  DiVisualstudio,
  DiWordpress,
} from "react-icons/di";
import { FaNodeJs, FaWindows } from "react-icons/fa";
import { RiImageLine } from "react-icons/ri";
import { SiExpress, SiLaragon } from "react-icons/si";
import "./About.css";
import { VscCode } from "react-icons/vsc";
const About = () => {
  return (
    <>
      <div className="flex md:flex-row md:w-full justify-evenly mt-20 px-5 w-96 ">
        <div className="font-semibold text-white mt-2">
          <h1 className="font-bold text-4xl text-primary ">Here i am</h1>
          <p className="mt-4">
            Im junior frontend developer based on Indonesia
          </p>
          <p>Im interested with programming since when im in high school</p>
          <p>
            Mostly programming languange that i use is React Js, Node Js and
            express Js
          </p>
          <div>
            <h1>
              Beside that im also music composer especially Electronic Dance
              Music since 2019
            </h1>
          </div>
        </div>
        <div>
          <img src="avatar.svg" alt="" />
        </div>
      </div>
      {/* Skills */}
      <div className="flex flex-col justify-center items-center bg-transparent bg-gradient-to-r from-[#021c34] via-[#550587] to-[#6c11ff]  rounded-xl md:rounded-full mt-10">
        <div>
          <h1 className="font-bold text-4xl text-primary text-center p-4">
            My <span className="text-white">Skills</span>
          </h1>
        </div>
        <div className="flex flex-wrap md:flex-nowrap">
          <DiJavascript1 className="w-24 h-24 fill-yellow-500 p-2 text-white hover:scale-110 transition-all ease-in-out duration-300 glow" />
          <DiReact className="w-24 h-24 fill-blue-500 p-2 text-white hover:scale-110 transition-all ease-in-out duration-300 glow-blue" />
          <DiMongodb className="w-24 h-24 fill-green-500 p-2 text-white hover:scale-110 transition-all ease-in-out duration-300 glow-green" />
          <DiHtml5 className="w-24 h-24 fill-red-500 p-2 text-white hover:scale-110 transition-all ease-in-out duration-300 glow-html" />
          <BiLogoTailwindCss className="w-24 h-24 fill-sky-500 p-2 text-white glow-blue" />

          <DiWordpress className="w-24 h-24 fill-purple-500 p-2 text-white hover:scale-110 transition-all ease-in-out duration-300 glow-indigp" />
          <FaNodeJs className="w-24 h-24 fill-green-500 p-2 text-white hover:scale-110 transition-all ease-in-out duration-300 glow-green" />

          <SiExpress className="w-24 h-24 fill-blue-500 p-2 text-white hover:scale-110 transition-all ease-in-out duration-300 glow" />

          <img
            src="fls.png"
            className="w-32 h-20 hover:scale-110 transition-all ease-in-out duration-300 glow "
          />
        </div>
      </div>
      <div className="mt-20 bg-transparent bg-gradient-to-r from-[#021c34] via-[#550587] to-[#6c11ff] rounded-full mb-20">
        <h1 className="text-4xl text-primary font-bold text-center p-5">
          Tools I <span className="text-white">use</span>
        </h1>

        <div className="px-5 gap-6 flex justify-center flex-wrap md:flex-wrap">
          <DiVisualstudio className="w-24 h-24 fill-blue-500 p-2 text-white hover:scale-110 transition-all ease-in-out duration-300 glow-blue" />
          <SiLaragon className="w-24 h-24 fill-blue-500 p-2 text-white hover:scale-110 transition-all ease-in-out duration-300 glow-blue" />

          <img
            src="fls.png"
            className="w-32 h-20 hover:scale-110 transition-all ease-in-out duration-300 glow "
          />

          <FaWindows className="w-24 h-24 fill-blue-500 p-2 text-white hover:scale-110 transition-all ease-in-out duration-300 glow-blue" />

          <img
            src="mongodb.svg"
            className="w-32 h-20 hover:scale-110 transition-all ease-in-out duration-300 glow-green "
          />
        </div>
      </div>
    </>
  );
};

export default About;
