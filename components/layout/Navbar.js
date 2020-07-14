import classNames from "classnames";
import React from "react";

const Navbar = () => {
  const navClasses = classNames(
    "w-full h-24",
    "flex items-center justify-center",
    "bg-white",
    "mt-6",
    "z-10",
    "space-x-2 "
  );

  const textClasses = classNames(
    "font-caveat text-5xl text-teal-500",
    "select-none",
    "pr-4"
  );
  return (
    <div id="navbar" className={navClasses}>
      <p className={textClasses}>MAJORCAFUN</p>
    </div>
  );
};

export default Navbar;
