import React from "react";
import logo from "../assets/logo.png";
import { Globe, CircleUserRound, Menu } from "lucide-react";

function HeaderTop() {
  return (
    <div className=" max-w-[1400px] mx-auto flex justify-between mt-2 py-4 ">
      <div className="w-[500px]  flex items-center justify-start ">
        <img src={logo} className="w-30" />
      </div>
      <div className="w-[500px] flex items-center justify-center ">
        Evler <span className="text-gray-500 pl-2"> Deneyimler</span>
      </div>
      <div className="w-[500px] flex gap-2 justify-end items-center ">
        <div className="hover:bg-gray-100 transition duration-300 rounded-full cursor-pointer text-sm font-medium p-3">
          Evinizi airbnb'ye taşıyın
        </div>
        <div>
          <Globe />
        </div>
        <div className="flex cursor-pointer border p-2 rounded-3xl gap-1  ">
          <Menu />
          <CircleUserRound />
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;
