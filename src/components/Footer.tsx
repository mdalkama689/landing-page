"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { RiGlobalLine } from "react-icons/ri";

function Footer() {
  return (
    <>
      <FooterSection />
      <div className="bg-[#f08739]  text-center mt-3 py-3 text-white">
        Copyright © 2024 Bright Vision All rights reserved.
      </div>
    </>
  );
}

export default Footer;

function FooterSection() {
  const pathName = usePathname();
  return (
    <div className="flex items-center justify-center gap-6 h-[300px] pl-40 relative">
      <div className="absolute top-10 left-16">
        <h1 className="text-[#f08739] font-semibold text-4xl">Information</h1>
        <div className="flex items-center justify-center gap-1.5 mt-3 relative">
          <Link
            href="/home"
            className={`${pathName === "/" && "text-[#f08739]"}`}
          >
            Home{" "}
          </Link>
          <div className="h-[30px] w-[1px] bg-blue-600"></div>
          <Link
            href="/about-us"
            className={`${pathName === "/about-us" && "text-[#f08739]"}`}
          >
            About Us
          </Link>
          <div className="h-[30px] w-[1px] bg-blue-600"></div>
          <Link
            href="/specialized"
            className={`${pathName === "/specialized" && "text-[#f08739]"}`}
          >
            Specialized
          </Link>
          <div className="h-[30px] w-[1px] bg-blue-600"></div>
          <Link
            href="/simulation"
            className={`${pathName === "/simulation" && "text-[#f08739]"}`}
          >
            Simulation
          </Link>
          <div className="h-[30px] w-[1px] bg-blue-600"></div>

          <div className="absolute top-8 left-0 flex items-center justify-center gap-1.5">
            <Link
              href="/engagement"
              className={`${pathName === "/engagement" && "text-[#f08739]"}`}
            >
              Engagement
            </Link>
            <div className="h-[30px] w-[1px] bg-blue-600"></div>
            <Link
              href="/csr"
              className={`${pathName === "/csr" && "text-[#f08739]"}`}
            >
              CSR
            </Link>
          </div>
        </div>
      </div>

      <div className="mb-[290px]">
        <BouncingBall />
      </div>

      <div className="flex items-center flex-col justify-center gap-4">
        <div className="bg-sky-600 rounded-full flex items-center justify-center w-[125px] h-[125px]">
          <Image
            src="https://teambuilding-ksa.com/wp-content/uploads/2024/11/bv-logo-1.png"
            alt="company-logo"
            height={100}
            width={100}
          />
        </div>

        <div>
          <p className="text-blue-900 font-bold">
            We inspire, connect, and enable Impact Makers
          </p>
          <p className="text-blue-900 font-bold">
            worldwide. Together, we’re creating a just and
          </p>
          <p className="text-blue-900 font-bold">
            sustainable world where business and profit are
          </p>
          <p className="text-blue-900 font-bold">
            used to serve people and the planet
          </p>
        </div>
      </div>

      <div className="mb-[290px]">
        <BouncingBall />
      </div>

      <div className="bg-white text-black  flex flex-col gap-6 ml-28">
        {/* // left side  */}
        <div className="flex  gap-2 flex-col">
          <div className=" flex items-center gap-1 ">
            <div className="h-5.5 w-5.5 rounded-full border flex items-center justify-center border-blue-700">
              <MdEmail className="text-[#f08739] " />
            </div>
            <p className="font-bold text-sm">support@brightvision.pro</p>{" "}
          </div>

          <div className="flex  items-center gap-1">
            <div className="h-5.5 w-5.5 rounded-full border flex items-center justify-center border-blue-700">
              <IoIosCall className="text-[#f08739]" />
            </div>
            <p className="font-bold text-sm">0544833919</p>{" "}
          </div>

          <div className="flex  items-center gap-1">
            <div className="h-5.5 w-5.5 rounded-full border flex items-center justify-center border-blue-700">
              <RiGlobalLine className="text-[#f08739]" />
            </div>
            <p className="font-bold text-sm">www.brightvision.pro</p>{" "}
          </div>
        </div>

        {/* right side */}
        <div className="flex gap-3">
          <Link
            href="/https://www.instagram.com/bright_vision_sa?igsh=MWk3czY0eGlsdGJydg%3D%3D"
            className="bg-[#174782] text-white p-1.5 rounded-full hover:bg-[#f08739] transition duration-300"
          >
            <FaInstagram size={24} />
          </Link>
          <Link
            className="bg-[#174782] text-white p-1.5 rounded-full  hover:bg-[#f08739] transition duration-300"
            href="/https://www.linkedin.com/company/bright-vision-pro/"
          >
            <FaLinkedin size={24} />
          </Link>
          <Link
            className="bg-[#174782] text-white p-1.5 rounded-full  hover:bg-[#f08739] transition duration-300"
            href="/https://www.youtube.com/@HamzaSheikh-vu8bk"
          >
            {" "}
            <FaYoutube size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
}

function BouncingBall() {
  return (
    <div className="flex justify-center items-start  relative ">
      <div className="h-[312px] w-0.5 bg-black absolute"></div>
      <div className="relative  bg-red-900 rounded-full animate-bounce-custom"></div>
      <style>
        {`
          @keyframes bounce-custom {
            0% {
              transform: translateY(0) ;
              width: 10px;
              height: 10px;
            }
            50% {
              transform: translateY(302px) ;
                    width: 10px;
              height: 10px;
            }
            100% {
              transform: translateY(0) ;
                     width: 10px;
              height: 10px;
            }
          }

          .animate-bounce-custom {
            animation: bounce-custom 10s infinite;
          }
        `}
      </style>
    </div>
  );
}
