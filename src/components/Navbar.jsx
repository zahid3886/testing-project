import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex gap-5 justify-between items-center self-center px-5 w-full font-semibold max-w-[1799px] max-md:flex-wrap max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="/Navbar/logo.png"
          className="shrink-0 self-stretch my-auto max-w-full aspect-[4] w-[223px]"
        />
        <div className="flex gap-5 justify-center self-stretch my-auto text-lg whitespace-nowrap text-black text-opacity-80 max-md:flex-wrap max-md:max-w-full">
          <div>Products</div>
          <div className="flex gap-2.5 justify-center">
            <div>Solutions</div>
            <img
              loading="lazy"
              src="/Navbar/arrow.png"
              className="shrink-0 my-auto w-3 aspect-[2]"
            />
          </div>
          <div>Platforms</div>
          <div className="flex gap-2.5 justify-center">
            <div>Company</div>
            <img
              loading="lazy"
              src="/Navbar/arrow.png"
              className="shrink-0 my-auto w-3 aspect-[2]"
            />
          </div>
          <div>Resources</div>
        </div>
        <div className="justify-center self-stretch px-6 py-5 text-xl text-white bg-purple-500 rounded-xl max-md:px-5">
          Book a Demo
        </div>
      </div>
    </>
  );
};

export default Navbar;
