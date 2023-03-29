import Image from "next/image";
import React from "react";
export default function Navbar() {
  return (
    <div className="flex justify-between sticky top-0 bg-black z-10 w-full shadow-sm shadow-[#5651e5] px-10">
      <div className="mt-1">
        <Image
          className="rounded-full border-r-gray-900 shadow-sm shadow-[#5651e5]"
          src="/logo.jpg"
          alt="logo"
          width={80}
          height={50}
        />
      </div>
      <div className="mt-5 space-x-10">
        <a href="#" className="hover:text-[#5651e5]">
          HOME
        </a>
        <a href="/#about" className="hover:text-[#5651e5] smooth-scroll">
          ABOUT
        </a>
        <a href="/#skills" className="hover:text-[#5651e5]">
          SKILLS
        </a>
        <a href="/#projects" className="hover:text-[#5651e5]">
          PROJECTS
        </a>
        <a href="#" className="hover:text-[#5651e5]">
          RESUME
        </a>
        <a href="/#contact" className="hover:text-[#5651e5]">
          CONTACT
        </a>
      </div>
    </div>
  );
}
