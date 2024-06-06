import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-gray-100">
      <div className="flex flex-col md:flex-row max-w-screen-xl mx-auto">
        <div className="flex flex-col w-full md:w-2/3 p-6 md:p-10">
          <div className="flex flex-col text-black text-opacity-70">
            <div className="text-4xl md:text-7xl font-semibold text-black text-opacity-80 mb-4 md:mb-10">
              Get in touch!
            </div>
            <div className="text-lg md:text-2xl text-black text-opacity-80 mb-10 md:mr-24">
              Contact us today and let’s start a conversation.
              <br className="hidden md:block" />
              Our expert team is committed to helping you
              <br className="hidden md:block" />
              find the information and assistance you require.
            </div>
            <div className="mb-6 py-4">
              <label className="text-xl md:text-2xl">Name</label>
              <div className="mt-3.5 w-[500px] h-px bg-black border border-black"></div>
            </div>
            <div className="mb-6 py-4">
              <label className="text-xl md:text-2xl">Email</label>
              <div className="mt-3  w-[500px] h-px bg-black border border-black"></div>
            </div>
            <div className="mb-6 py-4">
              <label className="text-xl md:text-2xl">Message</label>
              <div className="mt-1.5  w-[500px] h-px bg-black border border-black"></div>
            </div>
            <div className="flex py-4 justify-center md:justify-start">
              <button className="py-3  px-6 w-[500px] bg-purple-500 text-white text-2xl font-semibold rounded-xl tracking-wide hover:bg-purple-600 transition">
                SEND
              </button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 bg-purple-500 flex flex-col relative justify-center items-center text-white p-6 md:p-10 md:mt-0 rounded-lg">
          <div className="bg-blue-900 flex flex-col sm:w-full gap-5 md:mr-[380px] sm:mx-0 mx-auto text-white p-6 mr-[400px] md:p-10 rounded-lg w-full">
            <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <FaEnvelope />
                <span>contact@autolens.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaPhoneAlt />
                <span>+1 22 33 445 565</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaMapMarkerAlt />
                <span>14th street, Illinois, California</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaClock />
                <span>08:00 - 17:00</span>
              </div>
            </div>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-white hover:text-gray-300">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
