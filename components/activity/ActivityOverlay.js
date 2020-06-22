import React from "react";
import PropTypes from "prop-types";

const ActivityOverlay = ({ activity, onClose }) => {
  const { name, location, full_description, pic_urls } = activity;

  const blurStyle = {
    // backdropFilter: "blur(2px)",
    // filter: "blur(2px)",
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

  return (
    <>
      <div
        id="blur-bg"
        className="fixed top-0 left-0 z-10 w-screen h-screen"
        style={blurStyle}
        onClick={onClick}
      ></div>
      <div
        className="fixed top-0 left-0 z-20 flex flex-col w-screen h-screen p-10"
        onClick={onClick}
      >
        <div
          id="card"
          className="self-center w-full h-full max-w-screen-lg bg-white rounded-lg shadow-xl"
        >
          <div
            id="img"
            style={imageStyle}
            className="flex flex-col w-full bg-center bg-no-repeat bg-cover rounded-t-lg h-third"
          >
            <div
              id="close-btn"
              className="flex flex-col items-center self-end justify-center w-10 h-10 mt-2 mr-2 transition-all duration-150 ease-in-out bg-white rounded-full cursor-pointer hover:bg-red-400"
              onClick={onClose}
            >
              <img src="close.png" alt="close" className="w-5" />
            </div>
          </div>
          <div
            id="info"
            className="h-66% w-full  rounded-b-lg py-5 px-10 overflow-y-scroll"
          >
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
