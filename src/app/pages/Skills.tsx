import Image from "next/image";
import React from "react";

export default function Skills() {
  return (
    <div className="mx-10">
      <div
        className="mt-20 text-4xl mb-10 text-[#5651e5] font-semibold pt-24"
        id="skills"
      >
        Skills
      </div>
      <h1 className="text-3xl mb-8">What I Can Do</h1>
      <div className="grid grid-cols-4 gap-10">
        <div className="shadow-[#5651e5] shadow-md transition-transform duration-300 hover:scale-110  rounded-md flex p-6 space-x-32">
          <Image src={"/html.png"} width={70} height={10} alt={"HTML"} />
          <p className="flex justify-end mt-6 text-xl font-semibold">HTML</p>
        </div>
        <div className="shadow-[#5651e5] shadow-md transition-transform duration-300 hover:scale-110  rounded-md flex p-6 space-x-36">
          <Image src={"/css.png"} width={70} height={20} alt={"CSS"} />
          <p className="flex justify-end mt-6 text-xl font-semibold">CSS</p>
        </div>
        <div className="shadow-[#5651e5] shadow-md transition-transform duration-300 hover:scale-110  rounded-md flex p-6 space-x-36">
          <Image
            src={"/javascript.png"}
            width={70}
            height={20}
            alt={"JAVASCRIPT"}
          />
          <p className="flex justify-end mt-6 text-xl font-semibold">JS</p>
        </div>
        <div className="shadow-[#5651e5] shadow-md transition-transform duration-300 hover:scale-110  rounded-md flex p-6 space-x-24">
          <Image
            src={"/tailwind.png"}
            width={70}
            height={20}
            alt={"TAILWIND"}
          />
          <p className="mt-6 text-lg font-semibold">TAILWIND</p>
        </div>
        <div className="shadow-[#5651e5] shadow-md transition-transform duration-300 hover:scale-110  rounded-md flex p-6 space-x-28">
          <Image
            src={"/github1.png"}
            className="bg-white rounded-full"
            width={70}
            height={20}
            alt={"GITHUB"}
          />
          <p className="flex justify-end mt-6 text-xl font-semibold">GITHUB</p>
        </div>
        <div className="shadow-[#5651e5] shadow-md transition-transform duration-300 hover:scale-110  rounded-md flex p-6 space-x-28">
          <Image src={"/react.png"} width={70} height={20} alt={"REACT"} />
          <p className="flex justify-end mt-6 text-xl font-semibold">REACT</p>
        </div>
        <div className="shadow-[#5651e5] shadow-md transition-transform duration-300 hover:scale-110  rounded-md flex p-6 space-x-32">
          <Image
            src={"/nextjs.png"}
            className="bg-white rounded-full"
            width={70}
            height={20}
            alt={"NEXT JS"}
          />
          <p className="flex justify-end mt-6 text-xl font-semibold">NEXT JS</p>
        </div>
        <div className="shadow-[#5651e5] shadow-md transition-transform duration-300 hover:scale-110  rounded-md flex p-6 space-x-24">
          <Image src={"/laravel.png"} width={70} height={20} alt={"LARAVEL"} />
          <p className="flex justify-end mt-6 text-xl font-semibold">LARAVEL</p>
        </div>
      </div>
    </div>
  );
}
