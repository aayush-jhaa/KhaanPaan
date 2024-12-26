import React from "react";
import { faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="flex flex-col w-full text-white items-center justify-center py-5 bg-[#02060c]">
        <p className="mt-3 justify-between">Made with ❤️ in Bharat</p>
        <div className="my-3 flex items-center justify-center">
          <a
            className="ml-3 text-4xl transition-all hover:text-linkedIn"
            href="https://www.linkedin.com/in/aayush-jha-241496244/"
            target="_blank"
            title="Jha's Linkedin Profile"
          >
            <FontAwesomeIcon icon={faLinkedin}/>
          </a>
          <a
            className="ml-3 text-4xl transition-all hover:text-github"
            href="https://github.com/aayush-jhaa9"
            target="_blank"
            title="Jha's Repo"
          >
            <FontAwesomeIcon icon={faGithub}/>
          </a>
        </div>
        <p className="pb-10" title="Jai Shree Ram">©️ 2024 KhaanPaan</p>
    </div>
  );
};

export default Footer;
