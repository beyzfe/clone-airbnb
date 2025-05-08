import React from "react";
import FutureIdeas from "../footer-componenets/FutureIdeas";
import FooterContent from "../footer-componenets/FooterContent";

function Footer() {
  return (
    <div className="w-full flex flex-col justify-between bg-customgray mt-4">
      <FutureIdeas />

      <FooterContent />
    </div>
  );
}

export default Footer;
