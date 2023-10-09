import { FiChevronDown, FiChevronRight } from "react-icons/fi";

const PricingScreen = () => {
  return (
    <div className="w-[100%] items-center h-auto flex flex-col">
      <div className="w-[100%] items-center h-auto flex justify-center ">
        <div className="w-[1px] h-[15px] bg-red-500 mr-4"></div>
        <div className="text-gray-600">FAQ</div>
      </div>
      <div className="text-3xl font-semibold mt-1 px-[3px] small:text-[15px]">
        Frequently asked questions
      </div>
      <div className="border-t-2 w-[100%] flex justify-center mt-3 py-5">
        <div className="w-[90%] h-full ">
          <div className="flex justify-between items-center hover:text-orange-500 hover:duration-300 hover:transition cursor-pointer">
            <div className="medium:text-[15px] small:text-[12px] ">
              How many read and rows written calculated on the Hobby Scaler
              plan?
            </div>
            <div>
              <FiChevronDown />
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-2 w-[100%] flex justify-center mt-3 py-5">
        <div className="w-[90%] h-full ">
          <div className="flex justify-between items-center hover:text-orange-500 hover:duration-300 hover:transition cursor-pointer">
            <div className="medium:text-[15px] small:text-[12px] ">
              Can i upgrade my Hobby or Scaler Pro plan to the Scaler Pro plan?
            </div>
            <div>
              <FiChevronDown />
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-2 w-[100%] flex justify-center mt-3 py-5">
        <div className="w-[90%] h-full ">
          <div className="flex justify-between items-center hover:text-orange-500 hover:duration-300 hover:transition cursor-pointer">
            <div className="medium:text-[15px] small:text-[12px] ">
              Can I downgrade from the Scaler Pro plan to the Scaler plan?
            </div>
            <div>
              <FiChevronDown />
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-2 w-[100%] flex justify-center mt-3 py-5">
        <div className="w-[90%] h-full ">
          <div className="flex justify-between items-center hover:text-orange-500 hover:duration-300 hover:transition cursor-pointer">
            <div className="medium:text-[15px] small:text-[12px] ">
              Can I downgrade from the Scaler plan to the Hobby plan?
            </div>
            <div>
              <FiChevronDown />
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-2 w-[100%] flex justify-center mt-3 py-5">
        <div className="w-[90%] h-full ">
          <div className="flex justify-between items-center hover:text-orange-500 hover:duration-300 hover:transition cursor-pointer">
            <div className="medium:text-[15px] small:text-[12px] ">
              Will I be charged for usage and storage for database branches?
            </div>
            <div>
              <FiChevronDown />
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-2 w-[100%] flex justify-center mt-3 py-5">
        <div className="w-[90%] h-full ">
          <div className="flex justify-between items-center hover:text-orange-500 hover:duration-300 hover:transition cursor-pointer">
            <div className="medium:text-[15px] small:text-[12px] ">
              What happens if I exceed the usage and storage limits for my Hobby
              database?
            </div>
            <div>
              <FiChevronDown />
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-2 w-[100%] flex justify-center mt-3 py-5">
        <div className="w-[90%] h-full ">
          <div className="flex justify-between items-center hover:text-orange-500 hover:duration-300 hover:transition cursor-pointer">
            <div className="medium:text-[15px] small:text-[12px] ">
              Can I change my cluster size at any time on the Scaler Pro plan?
            </div>
            <div>
              <FiChevronDown />
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-2 w-[100%] flex justify-center mt-3 py-5">
        <div className="w-[90%] h-full ">
          <div className="flex justify-between items-center hover:text-orange-500 hover:duration-300 hover:transition cursor-pointer">
            <div className="medium:text-[15px] small:text-[12px] ">
              Do you offer any Scaler Pro annual plans with discounts?
            </div>
            <div>
              <FiChevronDown />
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-2 border-b-2 w-[100%] flex justify-center mt-3 py-5">
        <div className="w-[90%] h-full ">
          <div className="flex justify-between items-center hover:text-orange-500 hover:duration-300 hover:transition cursor-pointer">
            <div className="medium:text-[15px] small:text-[12px] ">
              Is Scaler Pro always an improvement compared to Scaler?
            </div>
            <div>
              <FiChevronDown />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-[100%] mt-10">
        <div className="w-[90%] min-h-[250px] rounded-2xl shadow-md border flex items-center justify-center ">
          <div className="flex items-center flex-col">
            <div className="text-3xl font-bold mb-5 text-center">
              Straightforward pricing that scales
            </div>
            <div className="text-gray-400 font-semibold mb-5 w-[70%] text-center">
              PlanetScale offers plans built for the needs of your application.
              Spend less time managing your databse and more time on your
              business.
            </div>
            <div className="mt-2  flex justify-between small:w-[95%] mb-2">
              <button className="px-5 py-3 rounded-full small:text-[13px] small:px-[12px] small:py-2  bg-orange-400 text-white font-semibold flex items-center mr-[10px]">
                Choose your plan{" "} <span><FiChevronRight className="text-xl mt-1"/></span>
              </button>
              <button className="px-5 py-3 rounded-full border border-orange-400 text-black font-semibold flex items-center small:text-[13px] small:px-[12px] small:py-2">
                Talk to us {" "}<span><FiChevronRight className="text-xl mt-1 text-orange-400"/></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingScreen;
