import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

const ActivityOverlay = ({ activity, onClose }) => {
  const { name, location, full_description, pic_urls } = activity;

  const blurStyle = {
    background: "rgba(255,255,255,0.5)",
  };

  const imageStyle = {
    backgroundImage: `url(${pic_urls[0]})`,
  };

  const onClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const blurBgClasses = classNames(
    "w-screen h-screen",
    "fixed top-0 left-0",
    "z-10"
  );

  const overlayClasses = classNames(
    "w-screen h-screen",
    "fixed top-0 left-0",
    "flex flex-col",
    "z-20",
    "p-10"
  );

  const cardClasses = classNames(
    "w-full h-full",
    "max-w-screen-lg ",
    "self-center",
    "bg-white ",
    "rounded-lg ",
    "shadow-xl"
  );

  const imgClasses = classNames(
    "w-full h-third",
    "flex flex-col",
    "bg-center bg-no-repeat bg-cover",
    "rounded-t-lg"
  );

  const closeBtnClasses = classNames(
    "w-10 h-10",
    "flex flex-col items-center self-end justify-center",
    "mt-2 mr-2",
    "transition-all duration-150 ease-in-out",
    "bg-white",
    "rounded-full",
    "cursor-pointer ",
    "hover:bg-red-400"
  );

  const infoClasses = classNames(
    "h-66% w-full",
    "rounded-b-lg",
    "py-5 px-10",
    "overflow-y-scroll"
  );

  return (
    <>
      <div
        id="blur-bg"
        className={blurBgClasses}
        style={{ background: "rgba(255,255,255,0.5)" }}
        onClick={onClick}
      ></div>
      <div className={overlayClasses} onClick={onClick}>
        <div id="card" className={cardClasses}>
          <div id="img" style={imageStyle} className={imgClasses}>
            <div id="close-btn" className={closeBtnClasses} onClick={onClose}>
              <img src="close.png" alt="close" className="w-5" />
            </div>
          </div>
          <div id="info" className={infoClasses}>
            <p className="text-3xl font-semibold">{name}</p>
            <p className="mt-2 italic text-blue-800">
              Location: {location.city}
            </p>
            <p className="mt-4 text-gray-800 whitespace-pre-wrap">
              {full_description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

ActivityOverlay.propTypes = {
  onClose: PropTypes.func.isRequired,
  activity: PropTypes.object.isRequired,
};

export default ActivityOverlay;
