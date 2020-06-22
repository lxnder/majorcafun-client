import React, { useState } from "react";
import PropTypes from "prop-types";
import ActivityOverlay from "./ActivityOverlay";

const Activity = ({ activity }) => {
  const { id, name, short_description, pic_urls, tags } = activity;
  const imageStyle = {
    backgroundImage: `url(${pic_urls[0]})`,
  };

  const [activeOverlay, setActiveOverlay] = useState(false);

  const onClick = e => {
    // e.preventDefault();
    setActiveOverlay(!activeOverlay);
  };

  return (
    <>
      {activeOverlay && (
        <ActivityOverlay activity={activity} onClose={onClick} />
      )}
      <div
        className="grid grid-cols-12 mb-4 transition-all duration-500 ease-out transform bg-white rounded-md cursor-pointer bg-opacity-95 hover:scale-102 hover:bg-opacity-100"
        id={`activity_${id}`}
        onClick={onClick}
      >
        <div
          id="info"
          className="col-span-6 p-4 divide-y divide-gray-200 sm:col-span-7 lg:col-span-8 xl:col-span-8"
        >
          <p className="py-1 text-lg font-semibold ">{name}</p>
          <p className="py-2 text-gray-800">{short_description}</p>
          <div id="tags" className="flex flex-row flex-wrap pt-2">
            {tags.map(tag => (
              <div
                className="px-2 py-1 mt-1 mr-1 bg-blue-600 rounded-full"
                key={`${id}_${tag}`}
              >
                <p className="text-xs text-white">{tag}</p>
              </div>
            ))}
          </div>
        </div>
        <div
          id="image"
          style={imageStyle}
          className="col-span-6 bg-center bg-no-repeat bg-cover sm:col-span-5 lg:col-span-4 xl:col-span-4 rounded-r-md"
        ></div>
      </div>
    </>
  );
};

Activity.propTypes = {
  activity: PropTypes.object.isRequired,
};

export default Activity;
