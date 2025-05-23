import React from "react";
import { MdArrowBackIos } from "react-icons/md";
import { GoQuestion } from "react-icons/go";
import { TbPhotoUp } from "react-icons/tb";
import { MdOutlineDriveFolderUpload } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Gameproplems = () => {
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
              Game Proplems
            </div>

            {/* Help Icon */}
            <div className="absolute right-4 flex items-center text-2xl sm:text-3xl">
              <GoQuestion className="text-blue-500" />
            </div>
          </div>
        </div>
        <div className="relative mt-4">
          <form onSubmit={handleSubmit(onSubmit)} action="">
            <div>
              <div className="relative p-4 sm:p-6 w-full text-gray-800 text-base sm:text-2xl">
                <div className="flex flex-col text-left mb-2 sm:mb-3">
                  <label htmlFor="issue" className="text-xl">
                    Explain the issue that happened to you inside the game
                    clearly and in detail
                    <span className="text-red-500">*</span>
                  </label>
                </div>

                <div className="relative text-left text-gray-500">
                  <div
                    {...register("issue", {
                      required: "Please enter content",
                    })}
                    className="bg-white rounded-md p-4 sm:p-6 shadow-md"
                  >
                    <textarea
                      id="issue"
                      name="message"
                      placeholder="Please enter content"
                      className="block w-full h-24 resize-none  focus:outline-none p-3 text-base sm:text-xl rounded-md"
                    ></textarea>
                  </div>
                  <div className="mt-2 sm:mt-3 text-gray-600 text-right text-sm sm:text-xl">
                    <span>0/500</span>
                  </div>
                  {/* Error Message */}
                  {errors.issue && (
                    <div className="text-red-600 text-left font-normal text-xs sm:text-base lg:text-lg mt-2">
                      {errors.issue.message}
                    </div>
                  )}
                </div>
              </div>

              <div className="relative p-6 w-full overflow-hidden text-gray-800 text-xl">
                <div className="flex w-full text-left mb-3">
                  <label htmlFor=" ">Attach Photo</label>
                </div>
                <div className="overflow-visible relative text-right align-middle break-words font-normal text-gray-500">
                  <div className="min-h-5 bg-white rounded-md p-4 shadow-xl items-center w-full sm:w-[30%]">
                    <div className="bg-transparent p-0 justify-center cursor-default flex items-center min-h-5 text-left resize-none">
                      <div className="">
                        <div className="p-2">
                          <TbPhotoUp className="text-5xl" />
                        </div>
                        <span className="text-xl p-2 cursor-pointer m-auto">
                          Photo
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative p-6 w-full overflow-hidden text-gray-800 text-xl">
                <div className="flex w-full text-left mb-3">
                  <label htmlFor=" ">Attach PDF file</label>
                </div>
                <div className="overflow-visible relative text-right align-middle break-words font-normal text-gray-500">
                  <div className="min-h-5 bg-white rounded-md p-4 shadow-xl items-center w-full sm:w-[30%]">
                    <div className="bg-transparent p-0 justify-center cursor-default flex items-center min-h-5 text-left resize-none">
                      <div className="">
                        <div className="p-2">
                          <MdOutlineDriveFolderUpload className="text-5xl" />
                        </div>
                        <span className="text-xl p-2 cursor-pointer">
                          Upload
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative p-6  w-full overflow-hidden text-gray-800 text-xl">
                <div className="flex w-100% text-left mb-3">
                  <label htmlFor=" ">Attach Video</label>
                </div>{" "}
                <div className="overflow-visible relative text-right align-middle break-words font-normal text-gray-500">
                  <div className=" min-h-5 bg-white rounded-md p-4 shadow-xl items-center sm:w-[30%]">
                    <div className="bg-transparent p-0 justify-center cursor-default flex items-center min-h-5 text-left  resize-none">
                      <div className="">
                        <div className="p-2">
                          <MdOutlineDriveFolderUpload className="text-5xl" />
                        </div>
                        <span className="text-xl p-2 cursor-pointer">
                          Upload
                        </span>
                      </div>
                    </div>
                  </div>
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

export default Gameproplems;
