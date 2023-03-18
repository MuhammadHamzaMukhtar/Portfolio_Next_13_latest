import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedinIn,
  faGithub,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="text-center mt-20 mb-48">
        <p className="my-5 font-light tracking-widest">
          LET'S BUILD SOMETHING TOGETHER
        </p>
        <p className="text-6xl font-semibold mb-8">
          Hi, I'm <span className="text-[#5651e5]">Hamza</span>
        </p>
        <p className="text-6xl font-semibold mb-8">A Front-End Web Developer</p>
        <p className=" font-light tracking-widest">
          I’m focused on building responsive front-end web applications <br />
          integrating back-end technologies.
        </p>
        <div className="flex justify-center mt-16 space-x-16">
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
            <FontAwesomeIcon icon={faFacebookF} className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </>
  );
}
