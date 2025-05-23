import React from "react";
import { MdArrowBackIos } from "react-icons/md";
import { IoCopyOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function Rechargepage() {
  const navigate = useNavigate();
  return (
    <div className="w-full max-w-[600px] min-h-screen mx-auto bg-gray-200 relative p-4 sm:p-6 md:p-8">
      <div className="top-0 z-50 w-full bg-gray-200 shadow-md text-center sticky">
        <div className="flex relative items-center h-12 sm:h-14 px-4">
          {/* Back Button */}
          <div
            onClick={() => navigate("/")}
            className="absolute left-0 p-5 flex items-center cursor-pointer"
          >
            <MdArrowBackIos className="text-lg sm:text-2xl" />
          </div>

          {/* Title */}
          <div className="text-base sm:text-xl  font-medium mx-auto truncate w-3/4">
            Recharge History
          </div>
        </div>
      </div>

      {/* Recharge section */}
      <div className="p-4 sm:p-5">
        <div className="flex flex-col gap-2 mb-2">
          <div className="flex flex-col gap-2 p-4 rounded-md bg-white">
            <div className="flex items-center justify-between">
              <span className="min-w-[32px] ml-2 text-white bg-[#18b660] rounded-md text-sm sm:text-lg md:text-2xl h-8 sm:h-10 text-center px-2 sm:px-3 flex items-center">
                Recharge
              </span>
              <div className="text-sm sm:text-lg md:text-2xl font-normal text-[#ff7172]">
                Recharge Failed
              </div>
            </div>
            <div className="w-full h-[1.6rem] py-1 text-[0.37333rem] font-normal flex justify-between items-center border-b-[0.01333rem] border-[var(--Dividing-line_color)]"></div>
            <div className="flex flex-col gap-2 text-sm sm:text-xl text-[#768096]">
              <div className="flex justify-between items-center mb-2 p-2">
                <span className="text-gray-800 text-lg sm:text-xl">Amount</span>
                <span className="text-orange-400">500</span>
              </div>

              <div className="flex justify-between items-center mb-2 p-2">
                <span className="text-gray-800 text-lg sm:text-xl">Type</span>
                <span className="text-[#768096]">7DaysPay - APP</span>
              </div>

              <div className="flex justify-between items-center mb-2 p-2">
                <span className="text-gray-800 text-lg sm:text-xl">Time</span>
                <span className="text-[#768096]">2025-01-26 20:16:10</span>
              </div>

              <div className="flex justify-between items-center mb-2 p-2">
                <span className="text-gray-800 text-base sm:text-lg">
                  Order Number
                </span>
                <div className="flex items-center text-base sm:text-xl">
                  <span className="mr-2 text-gray-800 text-sm sm:text-lg break-all">
                    RC2025012620161057826902a
                  </span>
                  <span className="text-gray-800 cursor-pointer">
                    <IoCopyOutline />
                  </span>
                </div>
              </div>

              <div
                onClick={() => navigate("/deposite")}
                className="flex w-full justify-center"
              >
                <button className="bg-blue-500 h-12 sm:h-[60px] w-[90%] text-white text-lg sm:text-xl rounded-full my-5 font-medium">
                  Submit Receipt
                </button>
              </div>
            </div>
          </div>
          <div className="text-lg text-center sm:text-2xl text-gray-400 font-medium mt-7">
            No more data
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rechargepage;
