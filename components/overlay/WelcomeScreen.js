import React from "react";
import classNames from "classnames";
import Card from "./Card";
import PropTypes from "prop-types";

const WelcomeScreen = ({ onClick }) => {
  const mainDivClasses = classNames(
    "w-screen h-screen",
    "absolute top-0 left-0",
    "flex",
    "z-50"
  );

  const imageDiv = classNames(
    "w-full h-full",
    "flex flex-col items-center justify-center space-y-4",
    "sm:w-6/12 xl:w-8/12",
    "bg-center bg-no-repeat bg-cover"
  );

  const infoDiv = classNames(
    "h-full",
    "xl:w-4/12 sm:w-6/12",
    "hidden sm:flex",
    "flex-col items-center justify-center space-y-4",
    "bg-gray-100"
  );

  const containerClasses = toggles =>
    classNames(
      "flex flex-col items-center justify-center space-y-4",
      "w-full",
      "py-4 pb-8",
      { "bg-clear-90 sm:hidden": toggles }
    );

  return (
    <div className={mainDivClasses}>
      <div className={imageDiv} style={{ backgroundImage: "url(bg.jpg)" }}>
        <div className={containerClasses(true)}>
          <Card onClick={onClick} />
        </div>
      </div>
      <div className={infoDiv}>
        <div className={containerClasses(false)}>
          <Card onClick={onClick} />
        </div>
      </div>
    </div>
  );
};

WelcomeScreen.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default WelcomeScreen;
