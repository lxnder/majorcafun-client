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

  const imgClasses = classNames(
    "w-auto h-16",
    "md:h-20 lg:h-20 xl:h-20",
    "pl-4"
  );

  const textClasses = classNames(
    "md:text-5xl lg:text-5xl xl:text-5xl",
    "font-serif text-4xl font-semibold text-green-500",
    "select-none",
    "pr-4"
  );
  return (
    <div id="navbar" className={navClasses}>
      <img src="palmlogo.png" alt="logo" className={imgClasses} />
      <p className={textClasses}>
        Majorca<span className="text-green-400">Fun</span>
      </p>
    </div>
  );
};

export default Navbar;
