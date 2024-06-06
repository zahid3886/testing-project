import React from "react";

const SectionTwo = () => {
  return (
    <>
      <div>
        <div className="flex max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="relative flex flex-col justify-start items-start h-[1197px] max-md:max-w-full">
              <div className="z-10 p-8 mt-[180px] ml-10 text-7xl font-semibold text-purple-500 max-md:text-4xl">
                Why choose
                <br />
                Auto Lens?
              </div>
              <img
                loading="lazy"
                srcSet="/public/SectionTwo/car1.png"
                className="object-cover absolute inset-0 w-full h-full"
                alt="Car"
              />
            </div>
          </div>
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col max-w-[960px]">
              <div className="w-full max-md:max-w-full">
                <div className="flex max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow items-center p-7 gap-10 w-full text-white bg-purple-500 max-md:max-w-full">
                      <div className="text-5xl mt-10 font-semibold max-md:text-4xl">
                        Professional Quality
                      </div>
                      <div className="text-2xl">
                        Elevate your car listings with high-quality, consistent
                        images
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow items-start py-12 pl-12 w-full text-white bg-indigo-800 max-md:max-w-full">
                      <div className="text-5xl mt-5 font-semibold max-md:max-w-full max-md:text-4xl">
                        Efficiency
                      </div>
                      <div className="mt-6 text-2xl max-md:max-w-full">
                        Save time with our automated processes, from image
                        enhancement to car inspections
                      </div>
                      <img
                        loading="lazy"
                        srcSet="/public/SectionTwo/car2.png"
                        className="self-end mt-20 max-w-full mix-blend-hard-light aspect-[1.3] w-[260px] max-md:mt-10"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full max-md:max-w-full">
                <div className="flex gap-0 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow items-start py-16 pl-6 w-full text-white bg-indigo-800 max-md:max-w-full">
                      <div className="text-5xl font-semibold max-md:max-w-full max-md:text-4xl">
                        Customer Engagement
                      </div>
                      <div className="mt-6 text-2xl max-md:max-w-full">
                        Boost engagement with interactive 360° spin car videos
                        and immersive virtual showrooms.
                      </div>
                      <img
                        loading="lazy"
                        srcSet="/public/SectionTwo/car3.png"
                        className="self-end mt-5 max-w-full mix-blend-soft-light aspect-[1.64] w-[284px]"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow items-start px-12 py-16 w-full bg-white max-md:px-5 max-md:max-w-full">
                      <div className="text-5xl font-semibold text-purple-500 max-md:text-4xl">
                        Trust
                      </div>
                      <div className="mt-8 text-2xl text-black">
                        Build trust and credibility with detailed and accurate
                        vehicle listings.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionTwo;
