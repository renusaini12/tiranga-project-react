import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import logo from "../assets/logo.png";
import banner from "../assets/banner.png";
import icon1 from "../assets/img1.png";
import icon2 from "../assets/img2.png";
import icon3 from "../assets/img3.png";
import icon4 from "../assets/img4.png";
import icon5 from "../assets/img5.png";
import icon6 from "../assets/img6.png";
import icon7 from "../assets/img7.png";
import icon8 from "../assets/img8.png";
import icon9 from "../assets/img9.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleSubmit = (data) => {
    navigate(data);
    setOpen(false);
  };
  return (
    <div>
      <div className="w-full max-w-[600px] min-h-screen mx-auto  bg-gray-200  relative ">
        <div class="relative text-centerselect-none">
          {/* Navbar */}
          <div className="relative z-10 leading-[1.5] text-center select-none">
            <div className="flex items-center justify-between h-14 px-4 md:px-6">
              <AiOutlineHome className="text-3xl cursor-pointer" />
              <h2 className="text-lg md:text-2xl font-semibold text-gray-800 truncate">
                Self Service Center
              </h2>
              <div className="flex items-center space-x-2 cursor-pointer">
                <img
                  src={logo}
                  alt="logo"
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full"
                />
                <span className="text-sm md:text-lg font-medium">English</span>
              </div>
            </div>
          </div>
        </div>

        {/* banner */}
        <div className="w-full mt-0">
          <div className="relative">
            <img src={banner} alt="" />
          </div>
        </div>

        {/* self service */}
        <div className="p-5">
          <h2 className="text-xl font-normal mb-5 sm:text-lg md:text-lg sm:mb-4 sm:mr-0 md:mr-[80%]">
            Self Service
          </h2>
          <ul className="bg-white text-white list-none p-8 ">
            <li
              onClick={() => navigate("/recharge")}
              className="w-full h-[1.6rem] py-10 text-[0.37333rem] font-normal flex justify-between items-center border-b-[0.01333rem] border-[var(--Dividing-line_color)]"
            >
              <div className="flex items-center space-x-3">
                <div className="relative inline-block w-[40px] h-[40px]">
                  <img src={icon1} alt="" className="w-[100%] h-[100%] block" />
                </div>
                <span className="text-[#333333] text-sm sm:text-lg md:text-xl whitespace-nowrap">
                  Deposit Not Receive
                </span>
              </div>
              <div className="mr-8">
                <IoIosArrowForward className="text-black text-sm sm:text-lg md:text-2xl" />
              </div>
            </li>

            <li
              onClick={() => navigate("/withdrawal")}
              className="w-full h-[1.6rem] py-10 text-[0.37333rem] font-normal flex justify-between items-center border-b-[0.01333rem] border-[var(--Dividing-line_color)]"
            >
              <div className="flex items-center space-x-3">
                <div className="relative inline-block w-[40px] h-[40px]">
                  <img src={icon2} alt="" className="w-[100%] h-[100%] block" />
                </div>
                <span className="text-[#333333] text-sm sm:text-lg md:text-xl whitespace-nowrap">
                  Withdrawal problem
                </span>
              </div>
              <div className="mr-8">
                <IoIosArrowForward className="text-black text-sm sm:text-lg md:text-2xl" />
              </div>
            </li>

            <li
              onClick={() => navigate("/ifsc")}
              className="w-full h-[1.6rem] py-10 text-[0.37333rem] font-normal flex justify-between items-center border-b-[0.01333rem] border-[var(--Dividing-line_color)]"
            >
              <div className="flex items-center space-x-3">
                <div className="relative inline-block w-[40px] h-[40px]">
                  <img src={icon3} alt="" className="w-[100%] h-[100%] block" />
                </div>
                <span className="text-[#333333] text-sm sm:text-lg md:text-xl whitespace-nowrap">
                  IFSC Modification
                </span>
              </div>
              <div className="mr-8">
                <IoIosArrowForward className="text-black text-sm sm:text-lg md:text-2xl" />
              </div>
            </li>

            <li
              // onClick={() => navigate("/login")}
              onClick={() => setOpen(true)}
              className="w-full h-[1.6rem] py-10 text-[0.37333rem] font-normal flex justify-between items-center border-b-[0.01333rem] border-[var(--Dividing-line_color)]"
            >
              <div className="flex items-center space-x-3">
                <div className="relative inline-block w-[40px] h-[40px]">
                  <img src={icon4} alt="" className="w-[100%] h-[100%] block" />
                </div>
                <span className="text-[#333333] text-sm sm:text-lg md:text-xl whitespace-nowrap">
                  Change ID Login Password
                </span>
              </div>

              <div className="mr-8">
                <IoIosArrowForward className="text-black text-sm sm:text-lg md:text-2xl" />
              </div>
            </li>

            {open && (
              <div className="fixed inset-0 w-full h-full bg-black bg-opacity-50 z-[2001]  ">
                <div className="z-[2001] top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] overflow-hidden w-[40%] text-2xl bg-white rounded-xl backface-hidden transition-opacity duration-300 fixed max-h-full">
                  <div className="flex items-center min-h-5">
                    <div className="flex-1 p-[10%] px-5 overflow-y-auto text-center text-2xl leading-2 whitespace-pre-wrap break-words">
                      Cannot receive verification code?
                    </div>
                  </div>
                  <div className="relative flex overflow-hidden select-none mb-5">
                    <button
                      onClick={() => handleSubmit("/login")}
                      className="text-blue-500 flex-1 w-full bg-white relative inline-block text-center cursor-pointer h-full justify-center items-center"
                    >
                      <span>Can Receive</span>
                    </button>
                    <button
                      onClick={() => handleSubmit("/changeid")}
                      className="text-blue-500 flex-1 w-full bg-white relative inline-block text-center cursor-pointer h-full justify-center items-center"
                    >
                      <span>Cannot Receive</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            <li
              onClick={() => navigate("/changebank")}
              className="w-full h-[1.6rem] py-10 text-[0.37333rem] font-normal flex justify-between items-center border-b-[0.01333rem] border-[var(--Dividing-line_color)]"
            >
              <div className="flex items-center space-x-3">
                <div className="relative inline-block w-[40px] h-[40px]">
                  <img src={icon5} alt="" className="w-[100%] h-[100%] block" />
                </div>
                <span className="text-[#333333] text-sm sm:text-lg md:text-xl whitespace-nowrap">
                  Change bank name
                </span>
              </div>
              <div className="mr-8">
                <IoIosArrowForward className="text-black text-sm sm:text-lg md:text-2xl" />
              </div>
            </li>

            <li
              onClick={() => navigate("/modifybank")}
              className="w-full h-[1.6rem] py-10 text-[0.37333rem] font-normal flex justify-between items-center border-b-[0.01333rem] border-[var(--Dividing-line_color)]"
            >
              <div className="flex items-center space-x-3">
                <div className="relative inline-block w-[40px] h-[40px]">
                  <img src={icon6} alt="" className="w-[100%] h-[100%] block" />
                </div>
                <span className="text-[#333333] text-sm sm:text-lg md:text-xl whitespace-nowrap">
                  Modify Bank Information
                </span>
              </div>
              <div className="mr-8">
                <IoIosArrowForward className="text-black text-sm sm:text-lg md:text-2xl" />
              </div>
            </li>

            <li
              onClick={() => navigate("/address")}
              className="w-full h-[1.6rem] py-10 text-[0.37333rem] font-normal flex justify-between items-center border-b-[0.01333rem] border-[var(--Dividing-line_color)]"
            >
              <div className="flex items-center space-x-3">
                <div className="relative inline-block w-[40px] h-[40px]">
                  <img src={icon7} alt="" className="w-[100%] h-[100%] block" />
                </div>
                <span className="text-[#333333] text-sm sm:text-lg md:text-xl whitespace-nowrap">
                  Add USDT Address
                </span>
              </div>
              <div className="mr-8">
                <IoIosArrowForward className="text-black text-sm sm:text-lg md:text-2xl" />
              </div>
            </li>

            <li
              onClick={() => navigate("/activitybonus")}
              className="w-full h-[1.6rem] py-10 text-[0.37333rem] font-normal flex justify-between items-center border-b-[0.01333rem] border-[var(--Dividing-line_color)]"
            >
              <div className="flex items-center space-x-3">
                <div className="relative inline-block w-[40px] h-[40px]">
                  <img src={icon8} alt="" className="w-[100%] h-[100%] block" />
                </div>
                <span className="text-[#333333] text-sm sm:text-lg md:text-xl whitespace-nowrap">
                  Activity Bonus
                </span>
              </div>
              <div className="mr-8">
                <IoIosArrowForward className="text-black text-sm sm:text-lg md:text-2xl" />
              </div>
            </li>

            <li
              onClick={() => navigate("/gameproplems")}
              className="w-full h-[1.6rem] py-10 text-[0.37333rem] font-normal flex justify-between items-center border-b-[0.01333rem] border-[var(--Dividing-line_color)]"
            >
              <div className="flex items-center space-x-3">
                <div className="relative inline-block w-[40px] h-[40px]">
                  <img src={icon9} alt="" className="w-[100%] h-[100%] block" />
                </div>
                <span className="text-[#333333] text-sm sm:text-lg md:text-xl whitespace-nowrap">
                  Game Problems
                </span>
              </div>
              <div className="mr-8">
                <IoIosArrowForward className="text-black text-sm sm:text-lg md:text-2xl" />
              </div>
            </li>
          </ul>
        </div>

        <div className="p-2 sm:p-4">
          <h2 className="text-base sm:text-lg md:text-xl font-normal mr-auto sm:mr-[50%] md:mr-[80%]">
            Kind Tips
          </h2>
          <div className="text-sm sm:text-base md:text-lg text-start text-gray-600 p-2 sm:p-4 max-w-full">
            <p>
              1. Please select the corresponding question and submit it for
              review. After successful submission, the customer service
              specialist will handle it for you within 10 minutes. Please wait
              patiently.
            </p>
            <p>
              2. 15 minutes after submitting for review, you can use [Progress
              Query] to view the review results of the work order you submitted.
            </p>
            <p>
              3. Always visit our official website at
              <a
                href="https://tirangagame.win/"
                className="text-blue-500 underline"
              >
                https://tirangagame.win/
              </a>
            </p>
          </div>
        </div>

        <footer
          onClick={() => navigate("/progress")}
          className="flex w-full justify-center bg-slate-200 py-4"
        >
          <button className="bg-blue-500 h-[50px] sm:h-[60px] w-[90%] sm:w-[80%] text-white text-lg sm:text-xl md:text-2xl rounded-full font-medium">
            Progress Query
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Navbar;
