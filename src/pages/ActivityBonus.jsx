import React from "react";
import { MdArrowBackIos } from "react-icons/md";
import { GoQuestion } from "react-icons/go";
import { TbPhotoUp } from "react-icons/tb";
import { MdOutlineDriveFolderUpload } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const ActivityBonus = () => {
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
    <div className="w-full max-w-[600px] min-h-screen mx-auto bg-slate-50 relative p-4">
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
            Activity Bonus
          </div>

          {/* Help Icon */}
          <div className="absolute right-4 flex items-center text-2xl sm:text-3xl">
            <GoQuestion className="text-blue-500" />
          </div>
        </div>
      </div>

      <div className="relative mt-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="text-gray-800 text-lg sm:text-xl">
            <label className="block mb-2 text-left">
              Explain clearly bonus that you want to claim{" "}
              <span className="text-red-500">*</span>
            </label>
            <div
              {...register("bonus", {
                required: "Please enter content",
              })}
              className="bg-white rounded-md p-4 shadow-xl"
            >
              <textarea
                name="bonus"
                placeholder="Please enter content"
                className="w-full h-24 p-2 bg-transparent border-0 resize-none focus:outline-none"
              ></textarea>
            </div>
            <div className="mt-2 text-gray-600 text-xl text-right">0/500</div>
            {/* Error Message */}
            {errors.bonus && (
              <div className="text-red-600 text-left font-normal text-xs sm:text-base lg:text-lg mt-2">
                {errors.bonus.message}
              </div>
            )}
          </div>

          <div className="text-gray-800 text-lg sm:text-xl mt-6">
            <label className="block mb-2 text-left">
              Tiranga ID <span className="text-red-500">*</span>
            </label>
            <div className="bg-white rounded-md shadow-xl">
              <input
                {...register("tiranga", {
                  required: "Please enter User ID",
                })}
                type="text"
                placeholder="Please enter User ID"
                className="w-full bg-transparent p-5  border-0 focus:outline-none"
              />
            </div>
            {/* Error Message */}
            {errors.tiranga && (
              <div className="text-red-600 text-left font-normal text-xs sm:text-base lg:text-lg mt-2">
                {errors.tiranga.message}
              </div>
            )}
          </div>

          <div className="text-gray-800 text-lg sm:text-xl mt-6">
            <label className="block mb-2 text-left">
              Screenshot of winning record 2
            </label>
            <div className="bg-white rounded-md p-6 shadow-xl flex justify-center w-full sm:w-[30%]">
              <div className="text-center">
                <TbPhotoUp className="text-5xl" />
                <span className="block text-xl cursor-pointer">Photo</span>
              </div>
            </div>
          </div>

          <div className="text-gray-800 text-lg sm:text-xl mt-6">
            <label className="block mb-2 text-left">Attach Video</label>
            <div className="bg-white rounded-md p-6 shadow-xl flex justify-center w-full sm:w-[30%]">
              <div className="text-center">
                <MdOutlineDriveFolderUpload className="text-5xl" />
                <span className="block text-xl cursor-pointer">Upload</span>
              </div>
            </div>
          </div>

          <div className="text-gray-800 text-lg sm:text-xl mt-6">
            <label className="block mb-2 text-left">
              Screenshot of winning record 1{" "}
              <span className="text-red-500">*</span>
            </label>
            <div
              {...register("Screenshot", {
                required: "Upload photo cannot be empty",
              })}
              className="bg-white rounded-md p-6 shadow-xl flex justify-center w-full sm:w-[30%]"
            >
              <div className="text-center">
                <TbPhotoUp className="text-5xl" />
                <span className="block text-xl cursor-pointer">Photo</span>
              </div>
            </div>
            {/* Error Message */}
            {errors.Screenshot && (
              <div className="text-red-600 text-left font-normal text-xs sm:text-base lg:text-lg mt-2">
                {errors.Screenshot.message}
              </div>
            )}
          </div>
          <footer className="flex justify-center bg-slate-50 py-4 mt-5">
            <button className="bg-blue-500 h-12 w-full sm:w-[80%] text-white text-lg sm:text-xl rounded-full font-medium">
              Confirm
            </button>
          </footer>
        </form>
      </div>
    </div>
  );
};

export default ActivityBonus;
