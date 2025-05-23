import React from "react";
import { MdArrowBackIos } from "react-icons/md";
import { GoQuestion } from "react-icons/go";
import eye from "../assets/download.png";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Loginpasswordself = () => {
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
        <div className="top-0 z-50 w-full bg-slate-50 shadow-md text-center sticky">
          <div className="flex relative items-center h-14 px-4 sm:px-6">
            {/* Back Button */}
            <div
              onClick={() => navigate("/")}
              className="absolute left-4 flex items-center cursor-pointer text-base"
            >
              <MdArrowBackIos className="text-2xl sm:text-3xl" />
            </div>

            {/* Title - Responsive Text Wrapping */}
            <div className="text-lg sm:text-2xl font-normal mx-auto truncate whitespace-normal break-words text-center max-w-xs sm:max-w-md">
              Self-service Change Password
            </div>

            {/* Help Icon */}
            <div className="absolute right-4 flex items-center text-2xl sm:text-3xl">
              <GoQuestion className="text-blue-500" />
            </div>
          </div>
        </div>

        <div className="relative p-4 sm:p-6 w-full">
          <form onSubmit={handleSubmit(onSubmit)} action="">
            <div className="w-full text-gray-800  sm:text-xl">
              {/* New Password Section */}
              <div className="relative p-4 sm:p-6 w-full">
                <div className="text-left mb-3">
                  <label htmlFor="new-password">
                    New Password <span className="text-red-500">*</span>
                  </label>
                </div>

                <div className="relative font-normal text-gray-500">
                  <div className="flex bg-white rounded-md  shadow-xl items-center">
                    <input
                      {...register("NewPassword", {
                        required: "Please enter a new password",
                      })}
                      type="password"
                      placeholder="Please enter a new password"
                      name="new-password"
                      className="block w-full p-5 focus:outline-none bg-transparent border-none text-left"
                    />
                    <div className="p-2 cursor-pointer">
                      <img src={eye} alt="Toggle visibility" />
                    </div>
                  </div>
                  {/* Error Message */}
                  {errors.NewPassword && (
                    <div className="text-red-600 text-left font-normal text-xs sm:text-base lg:text-lg mt-2">
                      {errors.NewPassword.message}
                    </div>
                  )}
                </div>
              </div>

              {/* Phone Number & OTP Section */}
              <div className="relative p-4 sm:p-6 w-full">
                <div className="text-left mb-3">
                  <label htmlFor="otp">
                    Register phone number to receive OTP{" "}
                    <span className="text-red-500">*</span>
                  </label>
                </div>

                <div className="relative font-normal text-gray-500">
                  <div className="flex flex-col sm:flex-row bg-white rounded-md  shadow-xl items-center">
                    <input
                      {...register("Register", {
                        required: "Captcha cannot be empty",
                      })}
                      type="text"
                      placeholder="Please enter email/SMS verification code"
                      name="otp"
                      className="block w-full p-5 focus:outline-none bg-transparent border-none text-left"
                    />
                    <div className="mt-3 sm:mt-0 sm:ml-4 flex-shrink-0">
                      <button className="w-full sm:w-auto px-4 py-2 text-base sm:text-lg bg-blue-500 text-white rounded-md cursor-pointer transition-opacity">
                        Send Verification Code
                      </button>
                    </div>
                  </div>
                  {/* Error Message */}
                  {errors.Register && (
                    <div className="text-red-600 text-left font-normal text-xs sm:text-base lg:text-lg mt-2">
                      {errors.Register.message}
                    </div>
                  )}
                </div>
              </div>
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

export default Loginpasswordself;
