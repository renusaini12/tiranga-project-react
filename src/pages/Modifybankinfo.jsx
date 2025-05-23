import React from "react";
import { MdArrowBackIos } from "react-icons/md";
import { GoQuestion } from "react-icons/go";
import { TbPhotoUp } from "react-icons/tb";
import { MdOutlineDriveFolderUpload } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { useForm } from "react-hook-form";

const Modifybankinfo = () => {
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
              Modify Bank Information
            </div>

            {/* Help Icon */}
            <div className="absolute right-4 flex items-center text-2xl sm:text-3xl text-blue-500">
              <GoQuestion />
            </div>
          </div>
        </div>

        <div className="relative">
          <form onSubmit={handleSubmit(onSubmit)} action="">
            <div>
              <div className="relative p-4 sm:p-6 w-full text-gray-800 text-base sm:text-2xl flex flex-col items-center">
                {/* Input Wrapper */}
                <div className="w-full max-w-xs sm:max-w-md lg:max-w-lg">
                  <div className="text-left mb-2 sm:mb-3">
                    <label
                      htmlFor="selectmodify"
                      className="text-sm sm:text-lg lg:text-xl"
                    >
                      Select modification :{" "}
                      <span className="text-red-500">*</span>
                    </label>
                  </div>

                  {/* Input Box */}
                  <div className="flex min-h-5 bg-white rounded-md p-3 sm:p-5 lg:p-6 shadow-md items-center w-full">
                    <input
                      {...register("selectmodify", {
                        required: "Category Selection",
                      })}
                      type="text"
                      id="selectmodify"
                      placeholder="Category Selection"
                      name="UTR number"
                      className={`block w-full bg-transparent border-none focus:outline-none text-left text-sm sm:text-base lg:text-lg ${
                        errors.selectmodify
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    />
                    <div className="mt-2 text-xl">
                      <IoIosArrowForward />
                    </div>
                  </div>

                  {/* Error Message */}
                  {errors.selectmodify && (
                    <div className="text-red-600 text-left font-normal text-xs sm:text-base lg:text-lg mt-2">
                      {errors.selectmodify.message}
                    </div>
                  )}
                </div>
              </div>

              <div className="relative p-4 sm:p-6 w-full text-gray-800 text-base sm:text-2xl flex flex-col items-center">
                {/* Input Wrapper */}
                <div className="w-full max-w-xs sm:max-w-md lg:max-w-lg">
                  <div className="text-left mb-2 sm:mb-3">
                    <label
                      htmlFor="oldbankname"
                      className="text-sm sm:text-lg lg:text-xl"
                    >
                      OLD Bank Name <span className="text-red-500">*</span>
                    </label>
                  </div>

                  {/* Input Box */}
                  <div className="flex min-h-5 bg-white rounded-md p-3 sm:p-5 lg:p-6 shadow-md items-center w-full">
                    <input
                      {...register("oldbankname", {
                        required: "Please enter Bank Card Name",
                      })}
                      type="text"
                      id="oldbankname"
                      placeholder="Please enter Bank Card Name"
                      name="oldbankname"
                      className={`block w-full bg-transparent border-none focus:outline-none text-left text-sm sm:text-base lg:text-lg ${
                        errors.oldbankname
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    />
                  </div>

                  {/* Error Message */}
                  {errors.oldbankname && (
                    <div className="text-red-600 text-left font-normal text-xs sm:text-base lg:text-lg mt-2">
                      {errors.oldbankname.message}
                    </div>
                  )}
                </div>
              </div>

              <div className="relative p-4 sm:p-6 w-full text-gray-800 text-base sm:text-2xl flex flex-col items-center">
                {/* Input Wrapper */}
                <div className="w-full max-w-xs sm:max-w-md lg:max-w-lg">
                  <div className="text-left mb-2 sm:mb-3">
                    <label
                      htmlFor="oldbenename"
                      className="text-sm sm:text-lg lg:text-xl"
                    >
                      OLD Beneficiary Name
                      <span className="text-red-500">*</span>
                    </label>
                  </div>

                  {/* Input Box */}
                  <div className="flex min-h-5 bg-white rounded-md p-3 sm:p-5 lg:p-6 shadow-md items-center w-full">
                    <input
                      {...register("oldbenename", {
                        required: "Please enter content",
                      })}
                      type="text"
                      id="oldbenename"
                      placeholder="Please enter content"
                      name="UTR number"
                      className={`block w-full bg-transparent border-none focus:outline-none text-left text-sm sm:text-base lg:text-lg ${
                        errors.oldbenename
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    />
                  </div>

                  {/* Error Message */}
                  {errors.oldbenename && (
                    <div className="text-red-600 text-left font-normal text-xs sm:text-base lg:text-lg mt-2">
                      {errors.oldbenename.message}
                    </div>
                  )}
                </div>
              </div>

              <div className="relative p-4 sm:p-6 w-full text-gray-800 text-base sm:text-2xl flex flex-col items-center">
                {/* Input Wrapper */}
                <div className="w-full max-w-xs sm:max-w-md lg:max-w-lg">
                  <div className="text-left mb-2 sm:mb-3">
                    <label
                      htmlFor="account"
                      className="text-sm sm:text-lg lg:text-xl"
                    >
                      OLD Account No <span className="text-red-500">*</span>
                    </label>
                  </div>

                  {/* Input Box */}
                  <div className="flex min-h-5 bg-white rounded-md p-3 sm:p-5 lg:p-6 shadow-md items-center w-full">
                    <input
                      {...register("account", {
                        required: "Please enter Bank Card Number",
                      })}
                      type="text"
                      id="account"
                      placeholder="Please enter Bank Card Number"
                      name="UTR number"
                      className={`block w-full bg-transparent border-none focus:outline-none text-left text-sm sm:text-base lg:text-lg ${
                        errors.account ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                  </div>

                  {/* Error Message */}
                  {errors.account && (
                    <div className="text-red-600 text-left font-normal text-xs sm:text-base lg:text-lg mt-2">
                      {errors.account.message}
                    </div>
                  )}
                </div>
              </div>

              <div className="relative p-4 sm:p-6 w-full text-gray-800 text-base sm:text-2xl flex flex-col items-center">
                {/* Input Wrapper */}
                <div className="w-full max-w-xs sm:max-w-md lg:max-w-lg">
                  <div className="text-left mb-2 sm:mb-3">
                    <label
                      htmlFor="tirangaID"
                      className="text-sm sm:text-lg lg:text-xl"
                    >
                      OLD IFSC Code <span className="text-red-500">*</span>
                    </label>
                  </div>

                  {/* Input Box */}
                  <div className="flex min-h-5 bg-white rounded-md p-3 sm:p-5 lg:p-6 shadow-md items-center w-full">
                    <input
                      {...register("oldifsc", {
                        required: "Please enter IFSC",
                      })}
                      type="text"
                      id="oldifsc"
                      placeholder="Please enter IFSC"
                      name="UTR number"
                      className={`block w-full bg-transparent border-none focus:outline-none text-left text-sm sm:text-base lg:text-lg ${
                        errors.oldifsc ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                  </div>

                  {/* Error Message */}
                  {errors.oldifsc && (
                    <div className="text-red-600 text-left font-normal text-xs sm:text-base lg:text-lg mt-2">
                      {errors.oldifsc.message}
                    </div>
                  )}
                </div>
              </div>

              <div className="relative p-4 sm:p-6 w-full text-gray-800 text-base sm:text-2xl flex flex-col items-center">
                {/* Input Wrapper */}
                <div className="w-full max-w-xs sm:max-w-md lg:max-w-lg">
                  <div className="text-left mb-2 sm:mb-3">
                    <label
                      htmlFor="newbank"
                      className="text-sm sm:text-lg lg:text-xl"
                    >
                      NEW Bank Name <span className="text-red-500">*</span>
                    </label>
                  </div>

                  {/* Input Box */}
                  <div className="flex min-h-5 bg-white rounded-md p-3 sm:p-5 lg:p-6 shadow-md items-center w-full">
                    <input
                      {...register("newbank", {
                        required: "Please select a bank card name",
                      })}
                      type="text"
                      id="newbank"
                      placeholder="Please select a bank card name"
                      name="UTR number"
                      className={`block w-full bg-transparent border-none focus:outline-none text-left text-sm sm:text-base lg:text-lg ${
                        errors.newbank ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    <div className="mt-2 text-xl">
                      <IoIosArrowForward />
                    </div>
                  </div>

                  {/* Error Message */}
                  {errors.newbank && (
                    <div className="text-red-600 text-left font-normal text-xs sm:text-base lg:text-lg mt-2">
                      {errors.newbank.message}
                    </div>
                  )}
                </div>
              </div>

              <div className="relative p-4 sm:p-6 w-full text-gray-800 text-base sm:text-2xl flex flex-col items-center">
                {/* Input Wrapper */}
                <div className="w-full max-w-xs sm:max-w-md lg:max-w-lg">
                  <div className="text-left mb-2 sm:mb-3">
                    <label
                      htmlFor="newbenename"
                      className="text-sm sm:text-lg lg:text-xl"
                    >
                      NEW Beneficiary Name{" "}
                      <span className="text-red-500">*</span>
                    </label>
                  </div>

                  {/* Input Box */}
                  <div className="flex min-h-5 bg-white rounded-md p-3 sm:p-5 lg:p-6 shadow-md items-center w-full">
                    <input
                      {...register("newbenename", {
                        required: "Please enter content",
                      })}
                      type="text"
                      id="newbenename"
                      placeholder="Please enter content"
                      name="UTR number"
                      className={`block w-full bg-transparent border-none focus:outline-none text-left text-sm sm:text-base lg:text-lg ${
                        errors.newbenename
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    />
                  </div>

                  {/* Error Message */}
                  {errors.newbenename && (
                    <div className="text-red-600 text-left font-normal text-xs sm:text-base lg:text-lg mt-2">
                      {errors.newbenename.message}
                    </div>
                  )}
                </div>
              </div>

              <div className="relative p-4 sm:p-6 w-full text-gray-800 text-base sm:text-2xl flex flex-col items-center">
                {/* Input Wrapper */}
                <div className="w-full max-w-xs sm:max-w-md lg:max-w-lg">
                  <div className="text-left mb-2 sm:mb-3">
                    <label
                      htmlFor="newAccno"
                      className="text-sm sm:text-lg lg:text-xl"
                    >
                      NEW Account No<span className="text-red-500">*</span>
                    </label>
                  </div>

                  {/* Input Box */}
                  <div className="flex min-h-5 bg-white rounded-md p-3 sm:p-5 lg:p-6 shadow-md items-center w-full">
                    <input
                      {...register("newAccno", {
                        required: "Please enter Bank Card Number",
                      })}
                      type="text"
                      id="newAccno"
                      placeholder="Please enter Bank Card Number"
                      name="UTR number"
                      className={`block w-full bg-transparent border-none focus:outline-none text-left text-sm sm:text-base lg:text-lg ${
                        errors.newAccno ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                  </div>

                  {/* Error Message */}
                  {errors.newAccno && (
                    <div className="text-red-600 text-left font-normal text-xs sm:text-base lg:text-lg mt-2">
                      {errors.newAccno.message}
                    </div>
                  )}
                </div>
              </div>

              <div className="relative p-4 sm:p-6 w-full text-gray-800 text-base sm:text-2xl flex flex-col items-center">
                {/* Input Wrapper */}
                <div className="w-full max-w-xs sm:max-w-md lg:max-w-lg">
                  <div className="text-left mb-2 sm:mb-3">
                    <label
                      htmlFor="newifsccode"
                      className="text-sm sm:text-lg lg:text-xl"
                    >
                      NEW IFSC Code <span className="text-red-500">*</span>
                    </label>
                  </div>

                  {/* Input Box */}
                  <div className="flex min-h-5 bg-white rounded-md p-3 sm:p-5 lg:p-6 shadow-md items-center w-full">
                    <input
                      {...register("newifsccode", {
                        required: "Please enter IFSC",
                      })}
                      type="text"
                      id="newifsccode"
                      placeholder="Please enter IFSC"
                      name="UTR number"
                      className={`block w-full bg-transparent border-none focus:outline-none text-left text-sm sm:text-base lg:text-lg ${
                        errors.newifsccode
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    />
                  </div>

                  {/* Error Message */}
                  {errors.newifsccode && (
                    <div className="text-red-600 text-left font-normal text-xs sm:text-base lg:text-lg mt-2">
                      {errors.newifsccode.message}
                    </div>
                  )}
                </div>
              </div>

              <div className="relative p-6 w-full overflow-hidden text-gray-800 text-2xl">
                {/* Label */}
                <div className="flex w-full text-left mb-3">
                  <label htmlFor="" className="text-sm sm:text-lg lg:text-xl">
                    Identity Card
                    <span className="text-red-500">*</span>
                  </label>
                </div>

                {/* Upload Box - Now Left-Aligned */}
                <div className="overflow-visible relative text-left font-normal text-gray-500">
                  <div
                    {...register("IdentityCard", {
                      required: "Upload file cannot be empty",
                    })}
                    className="min-h-5 bg-white rounded-md p-6 shadow-xl flex flex-col items-center w-full sm:w-[60%] md:w-[40%] lg:w-[30%]"
                  >
                    <div className="bg-transparent p-0 flex flex-col items-center text-left resize-none">
                      <div className="p-2">
                        <MdOutlineDriveFolderUpload className="text-5xl" />
                      </div>
                      <span className="text-xl p-2 cursor-pointer">Upload</span>
                    </div>
                  </div>

                  {/* Error Message */}
                  {errors.IdentityCard && (
                    <div className="text-red-600 text-left font-normal text-xs sm:text-base lg:text-lg mt-2">
                      {errors.IdentityCard.message}
                    </div>
                  )}
                </div>
              </div>

              <div className="relative p-6 w-full overflow-hidden text-gray-800 text-2xl">
                {/* Label */}
                <div className="flex w-full text-left mb-3">
                  <label htmlFor="" className="text-sm sm:text-lg lg:text-xl">
                    NEW Identity Card *for change bank with different
                    beneficiary name*{" "}
                  </label>
                </div>

                {/* Upload Box - Now Left-Aligned */}
                <div className="overflow-visible relative text-left font-normal text-gray-500">
                  <div className="min-h-5 bg-white rounded-md p-6 shadow-xl flex flex-col items-center w-full sm:w-[60%] md:w-[40%] lg:w-[30%]">
                    <div className="bg-transparent p-0 flex flex-col items-center text-left resize-none">
                      <div className="p-2">
                        <TbPhotoUp className="text-5xl" />
                      </div>
                      <span className="text-xl p-2 cursor-pointer">Photo</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative p-6 w-full overflow-hidden text-gray-800 text-2xl">
                {/* Label */}
                <div className="flex w-full text-left mb-3">
                  <label htmlFor="" className="text-sm sm:text-lg lg:text-xl">
                    OLD Passbook/Digital Banking{" "}
                    <span className="text-red-500">*</span>
                  </label>
                </div>

                {/* Upload Box - Now Left-Aligned */}
                <div className="overflow-visible relative text-left font-normal text-gray-500">
                  <div
                    {...register("OLDPassbook", {
                      required: "Upload photo cannot be empty",
                    })}
                    className="min-h-5 bg-white rounded-md p-6 shadow-xl flex flex-col items-center w-full sm:w-[60%] md:w-[40%] lg:w-[30%]"
                  >
                    <div className="bg-transparent p-0 flex flex-col items-center text-left resize-none">
                      <div className="p-2">
                        <TbPhotoUp className="text-5xl" />
                      </div>
                      <span className="text-xl p-2 cursor-pointer">Photo</span>
                    </div>
                  </div>
                  {/* Error Message */}
                  {errors.OLDPassbook && (
                    <div className="text-red-600 text-left font-normal text-xs sm:text-base lg:text-lg mt-2">
                      {errors.OLDPassbook.message}
                    </div>
                  )}
                </div>
              </div>

              <div className="relative p-6 w-full overflow-hidden text-gray-800 text-2xl">
                {/* Label */}
                <div className="flex w-full text-left mb-3">
                  <label htmlFor="" className="text-sm sm:text-lg lg:text-xl">
                    NEW Passbook/Digital Banking{" "}
                  </label>
                </div>

                {/* Upload Box - Now Left-Aligned */}
                <div className="overflow-visible relative text-left font-normal text-gray-500">
                  <div className="min-h-5 bg-white rounded-md p-6 shadow-xl flex flex-col items-center w-full sm:w-[60%] md:w-[40%] lg:w-[30%]">
                    <div className="bg-transparent p-0 flex flex-col items-center text-left resize-none">
                      <div className="p-2">
                        <TbPhotoUp className="text-5xl" />
                      </div>
                      <span className="text-xl p-2 cursor-pointer">Photo</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative p-6 w-full overflow-hidden text-gray-800 text-2xl">
                {/* Label */}
                <div className="flex w-full text-left mb-3">
                  <label htmlFor="" className="text-sm sm:text-lg lg:text-xl">
                    Latest Deposit Receipt Proof 1
                    <span className="text-red-500">*</span>
                  </label>
                </div>

                {/* Upload Box - Now Left-Aligned */}
                <div className="overflow-visible relative text-left font-normal text-gray-500">
                  <div
                    {...register("LatestDeposit", {
                      required: "Upload photo cannot be empty",
                    })}
                    className="min-h-5 bg-white rounded-md p-6 shadow-xl flex flex-col items-center w-full sm:w-[60%] md:w-[40%] lg:w-[30%]"
                  >
                    <div className="bg-transparent p-0 flex flex-col items-center text-left resize-none">
                      <div className="p-2">
                        <TbPhotoUp className="text-5xl" />
                      </div>
                      <span className="text-xl p-2 cursor-pointer">Photo</span>
                    </div>
                  </div>
                  {/* Error Message */}
                  {errors.LatestDeposit && (
                    <div className="text-red-600 text-left font-normal text-xs sm:text-base lg:text-lg mt-2">
                      {errors.LatestDeposit.message}
                    </div>
                  )}
                </div>
              </div>

              <div className="relative p-6 w-full overflow-hidden text-gray-800 text-2xl">
                {/* Label */}
                <div className="flex w-full text-left mb-3">
                  <label htmlFor="" className="text-sm sm:text-lg lg:text-xl">
                    Latest Deposit Receipt Proof 2
                  </label>
                </div>

                {/* Upload Box - Now Left-Aligned */}
                <div className="overflow-visible relative text-left font-normal text-gray-500">
                  <div className="min-h-5 bg-white rounded-md p-6 shadow-xl flex flex-col items-center w-full sm:w-[60%] md:w-[40%] lg:w-[30%]">
                    <div className="bg-transparent p-0 flex flex-col items-center text-left resize-none">
                      <div className="p-2">
                        <TbPhotoUp className="text-5xl" />
                      </div>
                      <span className="text-xl p-2 cursor-pointer">Photo</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative p-6 w-full overflow-hidden text-gray-800 text-2xl">
                {/* Label */}
                <div className="flex w-full text-left mb-3">
                  <label htmlFor="" className="text-sm sm:text-lg lg:text-xl">
                    PDF File
                  </label>
                </div>

                {/* Upload Box - Now Left-Aligned */}
                <div className="overflow-visible relative text-left font-normal text-gray-500">
                  <div className="min-h-5 bg-white rounded-md p-6 shadow-xl flex flex-col items-center w-full sm:w-[60%] md:w-[40%] lg:w-[30%]">
                    <div className="bg-transparent p-0 flex flex-col items-center text-left resize-none">
                      <div className="p-2">
                        <MdOutlineDriveFolderUpload className="text-5xl" />
                      </div>
                      <span className="text-xl p-2 cursor-pointer">Upload</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative p-6 w-full overflow-hidden text-gray-800 text-2xl">
                {/* Label */}
                <div className="flex w-full text-left mb-3">
                  <label htmlFor="" className="text-sm sm:text-lg lg:text-xl">
                    Video holding : Identity Card, Passbook, Piece of paper with
                    today's date written on it
                    <span className="text-red-500">*</span>
                  </label>
                </div>

                {/* Upload Box - Now Left-Aligned */}
                <div className="overflow-visible relative text-left font-normal text-gray-500">
                  <div
                    {...register("Videoholding", {
                      required: " Upload file cannot be empty",
                    })}
                    className="min-h-5 bg-white rounded-md p-6 shadow-xl flex flex-col items-center w-full sm:w-[60%] md:w-[40%] lg:w-[30%]"
                  >
                    <div className="bg-transparent p-0 flex flex-col items-center text-left resize-none">
                      <div className="p-2">
                        <MdOutlineDriveFolderUpload className="text-5xl" />
                      </div>
                      <span className="text-xl p-2 cursor-pointer">Upload</span>
                    </div>
                  </div>

                  {/* Error Message */}
                  {errors.Videoholding && (
                    <div className="text-red-600 text-left font-normal text-xs sm:text-base lg:text-lg mt-2">
                      {errors.Videoholding.message}
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

export default Modifybankinfo;
