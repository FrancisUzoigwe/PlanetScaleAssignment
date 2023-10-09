import { GiHamburgerMenu } from "react-icons/gi";
import { SiJetpackcompose } from "react-icons/si";
import { Link } from "react-router-dom";

const Side = () => {
  return (
    <div className="flex flex-col items-center w-[100%]">
      <div className="w-[90%] flex justify-between items-center">
        <div className=" h-[50px] justify-between items-center w-[100%] hidden medium:flex">
          <Link to="/">
            <div>
              <SiJetpackcompose className="text-2xl" />
            </div>
          </Link>
          <div className="w-[200px]   flex justify-between items-center">
            <div className="">Sign in</div>
            <div className="px-[10px]  py-[7px] border border-gray-400 rounded-full cursor-pointer hover:border-orange-500 hover:text-orange-400 transition-all duration-300">
              Get Started
            </div>
            <div className="">
              <GiHamburgerMenu className="text-2xl" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] h-[50px] flex items-center justify-center">
        <div className="w-[90%] rounded-full bg-black h-[40px] text-white flex justify-center items-center font-bold max-sm:hidden hover:cursor-pointer hover:text-orange-400 duration-500 transition-all text-[12px] shadow-md hover:shadow-lg text-center">
          <span className="border border-orange-400 mr-[6px] px-[8px] py-[1px] rounded-full text-[13px] ml-2  text-orange-400">
            New
          </span>{" "}
          PlanetScale is bringing vector search and storage to MySQL
        </div>
        <div className="min-w-[70%] text-[13px] rounded-full bg-black h-[40px] text-white justify-center items-center font-bold hidden max-sm:flex px-5">
          Vectors are coming to MySQL
        </div>
      </div>
    </div>
  );
};

export default Side;
