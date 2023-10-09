import { SiJetpackcompose } from "react-icons/si";
import { FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";
// import Side from "./Side";
const Header = () => {
  return (
    <div className="w-[100%] h-[45px] flex justify-center items-center medium:hidden ">
      <div className="w-[90%] h-[45px] flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/">
            <div className="px-1 py-1 rounded-full mr-1">
              <SiJetpackcompose className="text-2xl " />
            </div>
          </Link>
          <div className="flex justify-between w-[470px]">
            <div className="flex items-center hover:cursor-pointer hover:text-orange-500 transition-all duration-300">
              Products{" "}
              <div>
                <FiChevronDown className="ml-[2px] mt-1" />
              </div>
            </div>
            <div className="flex items-center hover:cursor-pointer hover:text-orange-500 transition-all duration-300">
              Solutions{" "}
              <div>
                <FiChevronDown className="ml-[2px] mt-1" />
              </div>
            </div>
            <div className="flex items-center hover:cursor-pointer hover:text-orange-500 transition-all duration-300">
              Resources{" "}
              <div>
                <FiChevronDown className="ml-[2px] mt-1" />
              </div>
            </div>
            <div className="flex items-center hover:cursor-pointer hover:text-orange-500 transition-all duration-300">
              Documentations{" "}
              <div>
                <FiChevronDown className="ml-[2px] mt-1" />
              </div>
            </div>
            <Link to="/pricing">
              <div className="flex items-center hover:cursor-pointer hover:text-orange-500 transition-all duration-300">
                Pricing{" "}
              </div>
            </Link>
          </div>
        </div>
        <div className="flex w-[230px] large:w-[50px] h-[50px] justify-between items-center">
          <div className="main:hidden hover:text-orange-400 hover:cursor-pointer transition-all duration-300">
            Contact
          </div>
          <div className="large:hidden hover:text-orange-400 hover:cursor-pointer transition-all duration-300">
            Sign in
          </div>
          <div className="px-[10px] large:hidden py-[7px] border border-gray-400 rounded-full cursor-pointer hover:border-orange-500 hover:text-orange-400 transition-all duration-300">
            Get Started
          </div>
          {/* <div className="hidden main:flex ">
            <GiHamburgerMenu className="text-2xl" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
