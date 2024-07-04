import React from "react";
import { Link } from "react-router-dom";
import { A } from "../constants";
import { logoTwoImage } from "../assets/logo";
import { Search } from "lucide-react";

const Navbar = () => {
  return (
    <div className="bg-black flex justify-between gap-2 items-center px-10">
      <div className="flex items-center ">
        <div className="w-[110px]">
          <Link>
            <img src={logoTwoImage} />
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
        <div className="text-white flex gap-10">
          {A.NAVLINKS.map((item, index) => (
            <Link key={index} to={item.path}>
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
