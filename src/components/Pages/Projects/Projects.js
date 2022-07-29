import {ArrowRightIcon, CodeIcon, DocumentTextIcon, EyeIcon, RssIcon, } from "@heroicons/react/solid";
import React from "react";
import image1 from "../../../Images/about.jpg";

const Projects = () => {
  return (
    <div className="bg-secondary md:px-12 px-8 py-8">
      <h1 className="text-4xl font-bold text-primary "> Recent<span className="text-white text-4xl font-bold"> Projects</span>
        </h1>
        <p className="my-2 font-ralway text-white font-semibold">
            What type of service i can offer?</p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols gap-6 pt-4">
        {/* Projects One  */}
        <div>
          <img
            className="h-[280px] hover:scale-105 transition-all duration-500  rounded-md  w-full"
            src={image1}
            alt=""
          />
          <div className="flex justify-between items-center pt-2">
            <h1 className=" text-center text-white text-lg font-ralway  font-bold ">
              Projects One{" "}
            </h1>
            <div className="mt-2 mb-2 px-2 ">
              <p className="flex justify-center gap-2">
                <a
                  className="bg-primary font-bold text-white hover:bg-slate-800 transition-all duration-300 ease-in p-1  rounded-full  cursor-pointer"
                  href=""
                  target="_blank"
                  rel="noreferrer"
                >
                  <CodeIcon className="w-4 h-4 font-bold " />
                </a>
                <a
                  className="bg-primary font-bold text-white hover:bg-slate-800 transition-all duration-300 ease-in p-1  rounded-full  cursor-pointer"
                  href=""
                  target="_blank"
                  rel="noreferrer"
                >
                  <EyeIcon className="w-4 h-4 font-bold " />
                </a>
                <a
                  className="bg-primary font-bold text-white hover:bg-slate-800 transition-all duration-300 ease-in p-1  rounded-full  cursor-pointer"
                  href=""
                  target="_blank"
                  rel="noreferrer"
                >
                  <ArrowRightIcon className="w-4 h-4 font-bold " />
                </a>
              </p>
            </div>
          </div>
        </div>
        <div>
          <img
            className="h-[280px] hover:scale-105 transition-all duration-500  rounded-md  w-full"
            src={image1}
            alt=""
          />
          <div className="flex justify-between items-center pt-2">
            <h1 className=" text-center text-white text-lg font-ralway  font-bold ">
              Projects One{" "}
            </h1>
            <div className="mt-2 mb-2 px-2 ">
              <p className="flex justify-center gap-2">
                <a
                  className="bg-primary font-bold text-white hover:bg-slate-800 transition-all duration-300 ease-in p-1  rounded-full  cursor-pointer"
                  href=""
                  target="_blank"
                  rel="noreferrer"
                >
                  <CodeIcon className="w-4 h-4 font-bold " />
                </a>
                <a
                  className="bg-primary font-bold text-white hover:bg-slate-800 transition-all duration-300 ease-in p-1  rounded-full  cursor-pointer"
                  href=""
                  target="_blank"
                  rel="noreferrer"
                >
                  <EyeIcon className="w-4 h-4 font-bold " />
                </a>
                <a
                  className="bg-primary font-bold text-white hover:bg-slate-800 transition-all duration-300 ease-in p-1  rounded-full  cursor-pointer"
                  href=""
                  target="_blank"
                  rel="noreferrer"
                >
                  <ArrowRightIcon className="w-4 h-4 font-bold " />
                </a>
              </p>
            </div>
          </div>
        </div>
        <div>
          <img
            className="h-[280px] hover:scale-105 transition-all duration-500  rounded-md  w-full"
            src={image1}
            alt=""
          />
          <div className="flex justify-between items-center pt-2">
            <h1 className=" text-center text-white text-lg font-ralway  font-bold ">
              Projects One{" "}
            </h1>
            <div className="mt-2 mb-2 px-2 ">
              <p className="flex justify-center gap-2">
                <a
                  className="bg-primary font-bold text-white hover:bg-slate-800 transition-all duration-300 ease-in p-1  rounded-full  cursor-pointer"
                  href=""
                  target="_blank"
                  rel="noreferrer"
                >
                  <CodeIcon className="w-4 h-4 font-bold " />
                </a>
                <a
                  className="bg-primary font-bold text-white hover:bg-slate-800 transition-all duration-300 ease-in p-1  rounded-full  cursor-pointer"
                  href=""
                  target="_blank"
                  rel="noreferrer"
                >
                  <EyeIcon className="w-4 h-4 font-bold " />
                </a>
                <a
                  className="bg-primary font-bold text-white hover:bg-slate-800 transition-all duration-300 ease-in p-1  rounded-full  cursor-pointer"
                  href=""
                  target="_blank"
                  rel="noreferrer"
                >
                  <ArrowRightIcon className="w-4 h-4 font-bold " />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
