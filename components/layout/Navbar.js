import React from "react";

const Navbar = () => {
  return (
    <div
      id="navbar"
      className="z-10 flex items-center justify-center w-full h-24 mt-6 space-x-2 bg-white"
    >
      <img src="palmlogo.png" alt="logo" className="w-auto h-20" />
      <p className="font-serif text-5xl font-semibold text-green-500 select-none">
        Majorca<span className="text-green-400">Fun</span>
      </p>
    </div>
  );
};

export default Navbar;
