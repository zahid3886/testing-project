import React from "react";

const SectionThree = () => {
  return (
    <>
      <div className="flex justify-center items-center px-16 py-20 w-full bg-indigo-800 max-md:px-5 max-md:max-w-full">
        <div className="mt-8 mb-5 w-full max-w-[1546px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[61%] max-md:ml-0 max-md:w-full">
              <div className="flex z-10 flex-col max-md:max-w-full">
                <div className="text-8xl font-semibold text-white max-md:max-w-full max-md:text-4xl">
                  Insights from our customers
                </div>
                <div className="flex flex-col px-20 py-20 mt-28 rounded-3xl backdrop-blur-[25px] bg-white bg-opacity-20 w-[800px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
                  <div className="mr-16 text-9xl font-semibold text-indigo-800 max-md:mr-2.5 max-md:max-w-full max-md:text-4xl">
                    “
                  </div>
                  <div className="mt-9 mr-16 mb-1.5 text-4xl font-medium text-white max-md:mr-2.5 max-md:max-w-full">
                    Thanks to Autolens, our dealership has seen remarkable
                    results. Their AI-powered solution not only saves time and
                    costs but also boosts leads and customer engagement. Highly
                    recommended for driving sales!
                  </div>
                </div>
                <div className="self-start mt-8 ml-20 text-lg text-white max-md:ml-2.5">
                  John Doe, CEO and founder of carrow
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[39%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="/public/SectionThree/man.png"
                className="grow mt-5 w-full aspect-[0.79] max-md:max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionThree;
