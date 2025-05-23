import React from "react";
import { MdArrowBackIos } from "react-icons/md";
import { GoQuestion } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { useForm } from "react-hook-form";

const Changebankname = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert("Form submitted with data: " + JSON.stringify(data));
  };

  return (
    <div>
      <div class="w-full max-w-[600px] min-h-screen mx-auto bg-slate-50  relative">
        {/* Sticky Header */}
        <div className="top-0 z-50 w-full bg-slate-50 shadow-md text-center sticky">
          <div className="flex relative items-center h-12 sm:h-14 px-4">
            {/* Back Button */}
            <div
              onClick={() => navigate("/")}
              className="absolute left-0 p-5 flex items-center cursor-pointer text-lg sm:text-xl"
            >
              <MdArrowBackIos className="text-2xl sm:text-3xl" />
            </div>

            {/* Title */}
            <div className="text-lg sm:text-xl font-normal max-w-[60%] mx-auto overflow-hidden text-ellipsis whitespace-nowrap">
              Change bank name
            </div>

            {/* Help Icon */}
            <div className="absolute right-4 flex items-center text-2xl sm:text-3xl text-blue-500">
              <GoQuestion />
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="relative p-4 sm:p-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Bank Number Input */}
            <div className="w-full max-w-xs sm:max-w-md lg:max-w-lg mx-auto">
              <label className="block text-sm sm:text-lg lg:text-xl text-left  text-gray-800 mb-2">
                Bank number <span className="text-red-500">*</span>
              </label>
              <div className="bg-white rounded-md p-3 sm:p-4 shadow-md">
                <input
                  {...register("bankNum", {
                    required: "Please enter Bank Card Number",
                  })}
                  type="text"
                  placeholder="Please enter Bank Card Number"
                  name="bankNum"
                  className={`block w-full bg-transparent border-none focus:outline-none text-left text-sm sm:text-base lg:text-lg ${
                    errors.bankNum ? "border-red-500" : "border-gray-300"
                  }`}
                />
              </div>
              {/* Error Message */}
              {errors.bankNum && (
                <div className="text-red-600 text-left font-normal text-xs sm:text-base lg:text-lg mt-2">
                  {errors.bankNum.message}
                </div>
              )}
            </div>

            {/* IFSC Code Input */}
            <div className="w-full max-w-xs sm:max-w-md lg:max-w-lg mx-auto mt-4">
              <label className="block text-left text-sm sm:text-lg lg:text-xl text-gray-800 mb-2">
                Correct bank name <span className="text-red-500">*</span>
              </label>
              <div className="bg-white flex rounded-md p-3 sm:p-4 shadow-md">
                <input
                  {...register("bankname", {
                    required: "Please select a bank card name",
                  })}
                  type="text"
                  placeholder="Please select a bank card name"
                  name="bankname"
                  className={`block w-full bg-transparent border-none focus:outline-none text-left text-sm sm:text-base lg:text-lg ${
                    errors.bankname ? "border-red-500" : "border-gray-300"
                  }`}
                />
                <div className="mt-2 text-xl">
                  <IoIosArrowForward />
                </div>
              </div>
              {/* Error Message */}
              {errors.bankname && (
                <div className="text-red-600 text-left font-normal text-xs sm:text-base lg:text-lg mt-2">
                  {errors.bankname.message}
                </div>
              )}
            </div>
            <footer className="flex w-full justify-center bg-slate-50 py-4 ">
              <button className="bg-blue-500 h-[50px] sm:h-[60px] w-[90%] sm:w-[80%] text-white text-lg sm:text-xl md:text-2xl rounded-full font-medium m-5">
                Confirm
              </button>
            </footer>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Changebankname;
