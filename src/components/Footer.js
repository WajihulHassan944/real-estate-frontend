import React from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import '../components/CareProviderDashBoard/style.css'
const Footer = () => {
  return (
    <footer className="bg-[#131F2B] rounded-b-3xl bg-opacity-87 text-white pt-16">
     <div className="container mx-auto flex flex-col md:flex-row md:justify-between gap-8 md:gap-0 pb-10">
  {/* CarePropertyConnect Section */}
  
  <div className="flex-1 md:pr-4 text-md  font-montserrat">
    <h2 className="text-xl text-[#2E86AB] font-montserrat font-bold mb-4">CarePropertyConnect</h2>
    <p className="mb-4 font-montserrat">
      Connecting caregivers, agents, <br /> and landlords for quality housing.
    </p>
    <ul className="font-montserrat space-y-3">
      <div className="flex items-center gap-3">
        <a
          href="#"
          className="flex items-center justify-center hover:opacity-80 w-8 h-8 bg-[#2E86AB] rounded-full inline-block"
        >
          <FiMail />
        </a>
        <li> connectproperty@cpwits.com</li>
      </div>
      <div className="flex items-center gap-3">
        <a
          href="#"
          className="flex items-center justify-center hover:opacity-80 w-8 h-8 bg-[#2E86AB] rounded-full inline-block"
        >
          <FiPhone />
        </a>
        <li> +6148992018</li>
      </div>
    </ul>
  </div>

  {/* Our Links Section */}
  
  <div className="flex-1 md:px-4 text-md font-montserrat">
    <h3 className="text-lg font-montserrat font-bold mb-4 border-b-2 border-[#C64C7B] pt-2 inline-block">Our Links</h3>
    <ul className="space-y-3">
      <li>
      <i class="fa fa-angle-right text-[#2E86AB] mr-2"></i>
        <a href="/home" className="text-[white]">Home</a>
      </li>
      <li>
      <i class="fa fa-angle-right text-[#2E86AB] mr-2"></i>
        <a href="/about" className="text-[white]">About</a>
      </li>
      <li>
      <i class="fa fa-angle-right text-[#2E86AB] mr-2"></i>
        <a href="/services" className="text-[white]">Services</a>
      </li>
    </ul>
  </div>

  {/* Our Office Section */}
  <div className="flex-1 md:pl-4 text-md font-montserrat">
    <h2 className="text-lg font-montserrat font-bold mb-4 border-b-2 border-[#C64C7B] pt-2 inline-block">Our Office</h2>
    <ul className="space-y-3 ">
      <li className="flex items-center gap-3">
        <a
          href="#"
          className="flex items-center justify-center hover:opacity-80 w-8 h-8 bg-[#2E86AB] rounded-full inline-block"
        >
          <FiMapPin />
        </a>
        1426 Green Street,<br /> Nashville, Tennessee
      </li>
    </ul>
    <div className="flex mt-4 space-x-4">
      <a
        href="#"
        className="flex items-center justify-center hover:opacity-80 w-8 h-8 bg-gray-500 rounded-full inline-block"
      >
        <FaFacebookF />
      </a>
      <a
        href="#"
        className="flex items-center justify-center hover:opacity-80 w-8 h-8 bg-gray-500 rounded-full inline-block"
      >
        <FaInstagram />
      </a>
      <a
        href="#"
        className="flex items-center justify-center hover:opacity-80 w-8 h-8 bg-gray-500 rounded-full inline-block"
      >
        <FaLinkedinIn />
      </a>
      <a
        href="#"
        className="flex items-center justify-center hover:opacity-80 w-8 h-8 bg-gray-500 rounded-full inline-block"
      >
        <FaTwitter />
      </a>
    </div>
  </div>
</div>


<div className="bg-opacity-17 mt-6 p-3 px-4 sm:px-8 lg:px-14 flex flex-col sm:flex-row justify-between items-center text-sm space-y-4 sm:space-y-0">
  {/* Navigation Links */}
  <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 gap-4">
    <li className="flex items-center">
      <span className="w-2 h-2 bg-[#FF9472] rounded-full inline-block mr-2"></span>
      <a href="/privacy-policy" className="font-montserrat hover:underline">
        Privacy Policy
      </a>
    </li>
    <li className="flex items-center">
      <span className="w-2 h-2 bg-[#FF9472] rounded-full inline-block mr-2"></span>
      <a href="/terms-of-service" className="font-montserrat hover:underline">
        Terms of Services
      </a>
    </li>
  </ul>

  {/* Copyright Text */}
  <p className="font-montserrat text-center sm:text-left">&copy; 2024 CarePropertyConnect</p>
</div>

    </footer>
  );
};

export default Footer;
