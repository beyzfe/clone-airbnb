import React from "react";

import HeaderFilter from "./HeaderFilter";
import HeaderSelect from "./HeaderSelect";
import CategoryScroll from "./CategoryScroll";

function HeaderBottom() {
  return (
    <div>
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        <CategoryScroll />
        <div className="flex items-center gap-4">
          <HeaderFilter />
          <HeaderSelect />
        </div>
      </div>
    </div>
  );
}

export default HeaderBottom;
