import React from "react";
import { Link } from "react-router-dom";
import { A } from "../constants";
import { logoFourImage } from "../assets/logo";
import { Search } from "lucide-react";
import jambo from '../assets/images/jambo.png'


const Navbar = () => {
  return (
    <div className=" bg-black  backdrop-blur-[1rem] flex justify-between gap-2 items-center px-14 shadow-black-500/50">
      <div className="flex items-center">
        <div className="w-[100px] ">
          <Link>
            <img src={logoFourImage} />
          </Link>
        </div>

        <div className="flex items-center px-16 border-[#00b4bf]">
          <input
            type="text"
            className=" relative flex-grow bg-white outline-transparent border-none p-2 px-12 w-80 rounded-2xl mr-10"
            placeholder="Find Events"
          />
          <Search className="absolute text-gray-500 ml-3" />
        </div>
      </div>
      <div>
        <div className="text-white flex gap-10 ml-56  ">
          {A.NAVLINKS.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              style={{ color: "white", textDecoration: "none" }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#ab47bc")}
              onMouseOut={(e) => (e.currentTarget.style.color = "#fff")}
              className="link-hover" 
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
