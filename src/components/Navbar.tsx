'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Navbar() {
    const pathName = usePathname()

  
  return (
    <div className="flex items-center justify-around py-3 bg-[#f08739]">
      {/* logo  */}
      <div>
       <Link href='/'>
       <Image
          src="https://teambuilding-ksa.com/wp-content/uploads/2024/11/bv-logo-1.png"
          alt="company-logo"
          height={100}
          width={100}
        />
       </Link>
      </div>

   <div className="flex items-center gap-3 ">
   <Link href='/' className={`hover:text-[#174782] transition duration-300 font-bold ${pathName === '/' && "text-[#174782]"}`}>Home </Link>
   <div className="h-[30px] w-[1px] bg-white"></div>
   <Link href='/about'  className={`hover:text-[#174782] transition duration-300 font-bold ${pathName === '/about' && "text-[#174782]"}`}>About us </Link>
   <div className="h-[30px] w-[1px] bg-white"></div>
   <Link href='/specialized'  className={`hover:text-[#174782] transition duration-300 font-bold ${pathName === '/specialized' && "text-[#174782]"}`}>Specialized</Link>
   <div className="h-[30px] w-[1px] bg-white"></div>
   <Link href='/simualation' className={`hover:text-[#174782] transition duration-300 font-bold ${pathName === '/simualation' && "text-[#174782]"}`}>Simualation </Link>
   <div className="h-[30px] w-[1px] bg-white"></div>
   <Link href='/engagement'  className={`hover:text-[#174782] transition duration-300 font-bold ${pathName === '/engagement' && "text-[#174782]"}`}>Engagement </Link>
   <div className="h-[30px] w-[1px] bg-white"></div>
   <Link href='/csr'  className={`hover:text-[#174782] transition duration-300 font-bold ${pathName === '/csr' && "text-[#174782]"}`}>CSR </Link>
   <div className="h-[30px] w-[1px] bg-white"></div>
 

 <button className="ml-3 hover:bg-[#174782] p-2 rounded transition duration-300 cursor-pointer ">Contact us </button>
   </div>

    </div>
  );
}

export default Navbar;
