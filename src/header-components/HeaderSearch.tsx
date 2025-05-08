import React from "react";
import { Search } from "lucide-react";

function HeaderSearch() {
  return (
    <div>
      <div className="flex justify-between w-200 mx-auto rounded-4xl mb-4 text-sm shadow border border-gray-300">
        <div className="header-search w-70 hover:bg-gray-200 transition duration-300 cursor-pointer">
          <div className="flex flex-col ml-3">
            <span>Yer</span>
            <span className="span1 text-gray-400">
              Gidilecek Yerleri Arayın
            </span>
          </div>
        </div>
        <span className="h-7 my-auto border-l border-gray-400"></span>
        <div className="header-search w-30 hover:bg-gray-200 transition duration-300 cursor-pointer">
          <div className="flex flex-col">
            <span>Giriş</span>
            <span className="text-gray-400">Tarih Ekleyin</span>
          </div>
        </div>
        <span className="h-7 my-auto border-l border-gray-400"></span>
        <div className="header-search w-30 hover:bg-gray-200 transition duration-300 cursor-pointer">
          <div className="flex flex-col">
            <span>Çıkış</span>
            <span className="text-gray-400">Tarih Ekleyin</span>
          </div>
        </div>
        <span className="h-7 my-auto border-l border-gray-400"></span>
        <div className="header-search w-70 flex items-center justify-between hover:bg-gray-200 transition duration-300 cursor-pointer">
          <div className="flex flex-col">
            <span>Kişiler</span>
            <span className="text-gray-400">Misafir Ekleyin</span>
          </div>
          <div className="border-1 p-2 rounded-4xl bg-red-400 text-white cursor-pointer hover:bg-red-600 transition duration-300">
            <Search />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderSearch;
