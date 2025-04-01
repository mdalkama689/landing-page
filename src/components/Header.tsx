import React from "react";
import { MdEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { RiGlobalLine } from "react-icons/ri";

import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";

function Header() {
  return (
    <div className="bg-white text-black flex items-center justify-around py-4">
      {/* // left side  */}
      <div  className="flex items-center gap-4">
        <Link
        href='mailto:support@brightvision.pro' 
        className="flex  items-center gap-1 ">
          <MdEmail className="text-[#f08739]"/>
          <p  className="font-bold text-sm">support@brightvision.pro</p>{" "}
        </Link>
        <div className="h-[30px] w-[1px] bg-blue-600"></div>
        <div className="flex  items-center gap-1">
          <IoIosCall className="text-[#f08739]" />
          <Link href="tel:9876765678" className="font-bold text-sm">0544833919</Link>{" "}
        </div>
        <div className="h-[30px] w-[1px] bg-blue-600"></div>
        <div className="flex  items-center gap-1">
          <RiGlobalLine className="text-[#f08739]" />
          <Link href='https://www.brightvision.pro' className="font-bold text-sm">www.brightvision.pro</Link>{" "}
        </div>
      </div>

      {/* right side */}
      <div className="flex gap-3">
        <Link  href="/https://www.instagram.com/bright_vision_sa?igsh=MWk3czY0eGlsdGJydg%3D%3D"
        className="bg-[#174782] text-white p-1.5 rounded-full hover:bg-[#f08739] transition duration-300"
        >
          <FaInstagram size={24} />
        </Link>
        <Link
                className="bg-[#174782] text-white p-1.5 rounded-full  hover:bg-[#f08739] transition duration-300"
        href="/https://www.linkedin.com/company/bright-vision-pro/">
          <FaLinkedin size={24} />
        </Link>
        <Link
                className="bg-[#174782] text-white p-1.5 rounded-full  hover:bg-[#f08739] transition duration-300"
        href="/https://www.youtube.com/@HamzaSheikh-vu8bk">
          {" "}
          <FaYoutube size={24} />
        </Link>
      </div>
    </div>
  );
}

export default Header 
