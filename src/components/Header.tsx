import React from "react";
import HeaderTop from "../header-components/HeaderTop";
import HeaderBottom from "../header-components/HeaderBottom";
import HeaderSearch from "../header-components/HeaderSearch";

function Header() {
  return (
    <div>
      <HeaderTop />
      <HeaderSearch />
      <HeaderBottom />
    </div>
  );
}

export default Header;
