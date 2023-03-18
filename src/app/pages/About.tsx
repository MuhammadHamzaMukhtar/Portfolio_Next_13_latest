import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <>
      <div
        className="text-4xl mb-10 text-[#5651e5] font-semibold pt-24"
        id="about"
      >
        About
      </div>
      <div className="flex justify-between space-x-10">
        <div className="col-span-6">
          <h1 className="text-3xl mb-8">Who I Am</h1>
          <p className="mb-10 tracking-widest">
            I specialize in building mobile responsive front-end UI applications
            that connect with API’s and other backend technologies. I’m
            passionate about learning new technologies and understand there is
            more than one way to accomplish a task. Though I am most proficient
            in building front-end applications using HTML, CSS, Javascript, and
            React, I am a quick learner and can pick up new tech stacks as
            needed. I believe that being a great developer is not using one
            specific language, but choosing the best tool for the job.
          </p>
          <p className="tracking-widest">
            I started web developement in 2013 managing multiple e-commerce
            websites on CMS platforms such as WordPress, BigCommerce, and
            Shopify. I have experience working directly with clients and taking
            mock wireframes all the way to deployed applications. In my spare
            time I run Code Commerce, a Youtube channel where I teach web
            developement and various front-end technologies.
          </p>
        </div>
        <div className="col-span-6 transition-transform duration-300 hover:scale-110">
          <Image
            src={"/about.jpeg"}
            width={1500}
            height={100}
            alt={"About"}
            className="rounded-xl cursor-pointer shadow-lg shadow-[#5651e5]"
          />
        </div>
      </div>
    </>
  );
}
