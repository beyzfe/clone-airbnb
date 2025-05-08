import React from "react";
import { Filter } from "lucide-react";

function HeaderFilter() {
  return (
    <div>
      <button className="flex items-center gap-2 border border-gray-300 rounded-xl px-4 py-2 text-sm hover:bg-gray-100 transition duration-300  hover:border-black cursor-pointer w-30 h-10">
        <Filter className="w-4 h-4 " />
        Filtreler
      </button>
    </div>
  );
}

export default HeaderFilter;
