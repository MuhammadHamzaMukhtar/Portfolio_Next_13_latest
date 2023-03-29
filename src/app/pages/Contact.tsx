import {
  faFacebook,
  faGithub,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Contact() {
  return (
    <div className="mx-10">
      <div
        className="mt-20 text-4xl mb-10 text-[#5651e5] font-semibold pt-24"
        id="contact"
      >
        Contact
      </div>
      <h1 className="text-3xl mb-8">Get In Touch</h1>
      <div className="flex justify-between mb-10">
        <div className="p-4 col-span-2 border border-[#5651e5] rounded-lg">
          <Image
            src={"/contact.jpeg"}
            className="rounded-lg items-center transition-transform duration-300 hover:scale-90"
            width={400}
            height={200}
            alt="Contact"
          />
          <p className="text-4xl font-semibold mb-2 mt-4">Muhammad Hamza</p>
          <p className="font-light tracking-widest mb-8">Front-End Developer</p>
          <p className=" font-light tracking-widest">
            I am available for freelance or full-time positions.
          </p>
          <p className="mb-12 font-light tracking-widest">
            Contact me and lets talk.
          </p>
          <p className="font-light tracking-widest">CONNECT WITH ME</p>
          <div className="flex justify-center mt-3 space-x-16 mb-8">
            <Link
              href={
                "https://www.linkedin.com/in/muhammad-hamza-mukhtar-8744b11a0/"
              }
              target="_blank"
              className="border shadow-md shadow-[#5651e5] border-white transition-transform duration-300 hover:scale-110 p-4 rounded-full hover:bg-white hover:text-black "
            >
              <FontAwesomeIcon icon={faLinkedinIn} className="w-5 h-5" />
            </Link>
            <Link
              href={"https://github.com/MuhammadHamzaMukhtar"}
              target="_blank"
              className="border shadow-md shadow-[#5651e5] border-white transition-transform duration-300 hover:scale-110 p-4 rounded-full hover:bg-white hover:text-black "
            >
              <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
            </Link>
            <Link
              href={"https://twitter.com/Rao25447959"}
              target="_blank"
              className="border shadow-md shadow-[#5651e5] border-white transition-transform duration-300 hover:scale-110 p-4 rounded-full hover:bg-white hover:text-black "
            >
              <FontAwesomeIcon icon={faTwitter} className="w-5 h-5" />
            </Link>
            <Link
              href={"https://www.facebook.com/Rao.Attitude.pk/"}
              target="_blank"
              className="border shadow-md shadow-[#5651e5] border-white transition-transform duration-300 hover:scale-110 p-4 rounded-full hover:bg-white hover:text-black "
            >
              <FontAwesomeIcon icon={faFacebook} className="w-5 h-5" />
            </Link>
          </div>
        </div>
        <div className="p-4 col-span-10 border border-[#5651e5] rounded-lg space-y-12">
          <div className="flex justify-between space-x-4 mt-4">
            <div>
              <p className="font-light tracking-widest">NAME</p>
              <input
                type="text"
                name=""
                id=""
                className="px-20 py-3 text-black rounded-lg"
              />
            </div>
            <div>
              <p className="font-light tracking-widest">PHONE NUMBER</p>
              <input
                type="tel"
                name=""
                id=""
                className="px-20 py-3 text-black rounded-lg"
              />
            </div>
          </div>
          <div>
            <p className="font-light tracking-widest">EMAIL</p>
            <input
              type="text"
              name=""
              id=""
              className="px-72 py-3 text-black rounded-lg"
            />
          </div>
          <div>
            <p className="font-light tracking-widest">SUBJECT</p>
            <input
              type="text"
              name=""
              id=""
              className="px-72 py-3 text-black rounded-lg"
            />
          </div>
          <div>
            <p className="font-light tracking-widest">MESSAGE</p>
            <textarea
              cols={100}
              rows={4}
              name=""
              id=""
              className="text-black rounded-lg"
            />
          </div>
          <button className="bg-[#5651e5] p-4 w-full rounded-lg">
            Send Message
          </button>
        </div>
      </div>
      <div className="flex justify-center mb-8">
        <a
          href={"#"}
          className="inline-flex justify-center items-center border shadow-md shadow-[#5651e5] border-white transition-transform duration-300 hover:scale-110 rounded-full hover:bg-white hover:text-black p-4"
        >
          <FontAwesomeIcon icon={faArrowUp} className="w-5 h-8" />
        </a>
      </div>
    </div>
  );
}
