import React from "react";
import { Globe } from "lucide-react";
import { MdOutlineFacebook } from "react-icons/md";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";

function FooterContent() {
  return (
    <div className="w-[1400px] mx-auto flex justify-between border-t-1 border-gray-300 pt-3 pb-3 mt-4">
      <div className="flex gap-4">
        <div>© 2025 Airbnb, Inc.</div>
        <div>Gizlilik</div>
        <div>Şartlar</div>
        <div>Site Haritası</div>
      </div>
      <div className="flex items-center gap-2 ">
        <div className="flex items-center hover:bg-gray-200  transition duration-300 text-sm gap-1 p-1 rounded-md cursor-pointer">
          <Globe size={16} /> <span>Türkçe</span> <span>(TR)</span>
        </div>
        <div className=" hover:bg-gray-200  transition duration-300 text-sm gap-1 p-1 rounded-md cursor-pointer">
          <span>₺</span>
          <span>TRY</span>
        </div>
        <div className="rounded-3xl  hover:bg-gray-200  transition duration-300 p-1 cursor-pointer">
          <MdOutlineFacebook size={16} />
        </div>
        <div className="rounded-3xl  hover:bg-gray-200  transition duration-300 p-1 cursor-pointer">
          <FaXTwitter size={16} />
        </div>
        <div className="rounded-3xl  hover:bg-gray-200  transition duration-300 p-1 cursor-pointer">
          <FaInstagram size={16} />
        </div>
      </div>
    </div>
  );
}

export default FooterContent;
