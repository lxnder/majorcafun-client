import React from "react";

const Navbar = () => {
  return (
    <div
      id="navbar"
      className="z-10 flex items-center justify-center w-full h-24 mt-6 space-x-2 bg-white"
    >
      <img
        src="palmlogo.png"
        alt="logo"
        className="w-auto h-16 pl-4 md:h-20 lg:h-20 xl:h-20"
      />
      <p className="pr-4 font-serif text-4xl font-semibold text-green-500 select-none md:text-5xl lg:text-5xl xl:text-5xl">
        Majorca<span className="text-green-400">Fun</span>
      </p>
    </div>
  );
};

export default Navbar;
