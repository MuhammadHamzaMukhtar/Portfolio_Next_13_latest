import Image from "next/image";
import React from "react";

export default function Projects() {
  return (
    <>
      <div
        className="mt-20 text-4xl mb-10 text-[#5651e5] font-semibold pt-24"
        id="projects"
      >
        PROJECTS
      </div>
      <h1 className="text-3xl mb-8">What I've Built</h1>
      <div className="grid grid-cols-2 gap-16">
        <Image
          src={"/property.jpeg"}
          className="rounded-lg shadow-[#5651e5] shadow-md"
          width={600}
          height={200}
          alt="Property"
        />
        <Image
          src={"/crypto.jpeg"}
          className="rounded-lg shadow-[#5651e5] shadow-md hover:bg-[#5651e5]"
          width={600}
          height={200}
          alt="Property"
        />
        <Image
          src={"/netflix.jpeg"}
          className="rounded-lg shadow-[#5651e5] shadow-md"
          width={600}
          height={200}
          alt="Property"
        />
        <Image
          src={"/twitch.jpeg"}
          className="rounded-lg shadow-[#5651e5] shadow-md"
          width={600}
          height={200}
          alt="Property"
        />
      </div>
    </>
  );
}
