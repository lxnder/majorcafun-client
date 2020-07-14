import React, { useContext } from "react";
import Activity from "./Activity";
import DbContext from "../../context/DbContext/dbContext";
import classNames from "classnames";

const Activities = () => {
  const dbContext = useContext(DbContext);

  const { activities } = dbContext;

  const initialDivClasses = classNames(
    "flex flex-col items-center justify-center",
    "col-span-12 md:col-span-9 lg:col-span-9 xl:col-span-10"
  );

  if (activities[0] === "initial") {
    return (
      <div className={initialDivClasses}>
        <p className="hidden text-2xl text-center text-gray-400 md:block font-muli">
          -APPLY SOME FILTERS TO SEARCH ACTIVITIES-
        </p>
      </div>
    );
  } else if (activities.length < 1) {
    return (
      <div className={initialDivClasses}>
        <p className="text-2xl text-center text-red-400 md:text-gray-400 font-muli">
          -NO RESULTS FOUND-
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
