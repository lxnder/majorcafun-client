import React, { useContext } from "react";
import Activity from "./Activity";
import DbContext from "../../context/DbContext/dbContext";

const Activities = () => {
  const dbContext = useContext(DbContext);

  const { activities } = dbContext;

  if (activities[0] === "initial") {
    return (
      <div className="flex flex-col items-center justify-center col-span-12 md:col-span-9 lg:col-span-9 xl:col-span-10">
        <p className="text-4xl font-semibold text-center text-blue-600">
          Discover cool activities in Majorca!
        </p>
        <p className="mt-4 text-2xl font-semibold text-center text-blue-400">
          Apply some filters and search for fun ;)
        </p>
      </div>
    );
  } else if (activities.length < 1) {
    return (
      <div className="flex flex-col items-center justify-center col-span-12 md:col-span-9 lg:col-span-9 xl:col-span-10">
        <p className="text-4xl font-semibold text-gray-700">
          No results found :(
        </p>
      </div>
    );
  } else {
    return (
      <div className="col-span-12 md:col-span-9 lg:col-span-9 xl:col-span-10">
        {activities.map(activity => (
          <Activity key={activity.id} activity={activity} />
        ))}
      </div>
    );
  }
};
export default Activities;
