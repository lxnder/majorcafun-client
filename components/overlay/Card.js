import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

const Card = ({ onClick }) => {
  const titleContainerClasses = classNames(
    "w-full h-16",
    "flex items-center justify-center"
  );

  const titleClasses = classNames(
    "text-5xl text-center text-teal-500 font-caveat",
    "p-4"
  );

  const btnContainerClasses = classNames(
    "w-64",
    "flex items-center justify-center",
    "text-gray-900",
    "duration-200 ease-linear transform ",
    "border border-gray-900",
    "cursor-pointer",
    "hover:bg-teal-500 hover:border-transparent hover:text-white"
  );

  const btnClasses = classNames(
    "px-4 py-2",
    "font-montserrat text-base text-center "
  );

  return (
    <>
      <div className={titleContainerClasses}>
        <p className={titleClasses}>MAJORCAFUN</p>
      </div>
      <div className={btnContainerClasses} onClick={onClick}>
        <p className={btnClasses}>DISCOVER</p>
      </div>
    </>
  );
};

Card.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Card;
