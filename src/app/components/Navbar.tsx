"use client";
import Image from "next/image";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

export default function Navbar() {
  return (
    <div className="flex justify-between sticky top-0 bg-black z-10 w-full shadow-sm shadow-[#5651e5]">
      <BrowserRouter>
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
          <Link to="#" smooth className="hover:text-[#5651e5]">
            HOME
          </Link>
          <Link to="#about" smooth className="hover:text-[#5651e5]">
            ABOUT
          </Link>
          <Link to="#skills" smooth className="hover:text-[#5651e5]">
            SKILLS
          </Link>
          <Link to="#projects" smooth className="hover:text-[#5651e5]">
            PROJECTS
          </Link>
          <Link to="#" smooth className="hover:text-[#5651e5]">
            RESUME
          </Link>
          <Link to="#contact" smooth className="hover:text-[#5651e5]">
            CONTACT
          </Link>
        </div>
      </BrowserRouter>
    </div>
  );
}
