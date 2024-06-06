import React from "react";

const SectionOne = () => {
  return (
    <>
      <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-20 mt-8 w-full font-semibold min-h-[1081px] max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="/public/SectionOne/bg.png"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col mt-40 mb-1.5 max-w-full w-[776px] max-md:mt-10">
          <div className="text-7xl text-white max-md:max-w-full max-md:text-4xl">
            Welcome to AutoLens
          </div>
          <div className="self-center text-gray-300 mt-10 mb-2 text-4xl leading-10 text-center bg-clip-text w-[585px] max-md:mt-10">
            Revolutionizing Car Merchandising with AI
          </div>
          <img
            loading="lazy"
            srcSet="/public/SectionOne/car.png"
            className="w-full aspect-[1.54] max-md:max-w-full"
          />
          <div className="justify-center items-center self-center px-6 py-3.5 mt-5 max-w-full text-2xl text-white text-center bg-purple-500 rounded-lg w-[308px] max-md:px-5">
            Learn More
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionOne;
