import React, { useContext, useEffect, useState } from "react";
import DbContext from "../../context/DbContext/dbContext";
import Checkbox from "../layout/Checkbox";
import { toast, Slide } from "react-toastify";
<<<<<<< HEAD
import classNames from "classnames";
=======
>>>>>>> db73de834db27e82fbc1ba86a2a14a837aad08c5

const Search = () => {
  const dbContext = useContext(DbContext);
  const { groupTypes, categories, loading } = dbContext;

  const [checkedCategories, setCheckedCategories] = useState({});
  const [checkedGroupTypes, setCheckedGroupTypes] = useState({});

  useEffect(() => {
    dbContext.getGroupTypes();
    dbContext.getCategories();
  }, []);

  const onCategoryChange = event => {
    setCheckedCategories({
      ...checkedCategories,
      [event.target.name]: event.target.checked,
    });
  };

  const onGroupTypeChange = event => {
    setCheckedGroupTypes({
      ...checkedGroupTypes,
      [event.target.name]: event.target.checked,
    });
  };

  const onSubmit = e => {
    e.preventDefault();

    let cats = [];
    let gts = [];

    let categoriesValid = false;
    let groupTypesValid = false;

    let searchIsValid = false;

    categories.forEach(c => {
      if (checkedCategories[c.name] === true) {
        cats.push(c.id);
        categoriesValid = true;
      }
    });

    groupTypes.forEach(gt => {
      if (checkedGroupTypes[gt.name] === true) {
        gts.push(gt.id);
        groupTypesValid = true;
      }
    });

    categoriesValid && groupTypesValid
      ? (searchIsValid = true)
      : (searchIsValid = false);

    if (searchIsValid) {
      dbContext.getActivities(cats, gts);
    } else {
      showErrorToast("You must select a category and a recommendation.");
    }

    window.scrollTo(0, 0);
  };

  const showErrorToast = msg => {
    toast.error(msg, {
      position: "top-center",
      autoClose: 4000,
      toastId: 1,
      transition: Slide,
    });
  };

  const capitalize = s => {
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

<<<<<<< HEAD
  const mainDivClasses = classNames(
    "col-span-12 md:col-span-3 lg:col-span-3 xl:col-span-2"
  );

  const formClasses = classNames(
    "grid grid-cols-12",
    "px-4 py-1 mb-4",
    "transition-all duration-500 ease-out transform ",
    "bg-white bg-opacity-95",
    "rounded-md",
    "md:sticky lg:sticky xl:sticky",
    "md:top-4 lg:top-4 xl:top-4",
    "hover:bg-opacity-100"
  );

  const wrapperClasses = classNames(
    "self-center md:self-auto lg:self-auto xl:self-auto"
  );

  const filterClasses = classNames(
    "flex flex-col",
    "col-span-6",
    "md:col-span-12 lg:col-span-12 xl:col-span-12",
    "mt-4 "
  );

  const submitClasses = classNames(
    "w-full h-10",
    "col-span-12",
    "flex flex-col items-center justify-center",
    "py-1 mt-8 mb-4",
    "md:mt-4 lg:mt-4 xl:mt-4",
    "text-lg font-semibold text-blue-500",
    "transition-all duration-150 ease-out transform",
    "border border-blue-500",
    "rounded-md",
    "hover:bg-blue-500 hover:text-white",
    "focus:outline-none"
  );

  return (
    <div className={mainDivClasses}>
      <form onSubmit={onSubmit} className={formClasses}>
        <div id="category-filters" className={filterClasses}>
          <div id="wrapper" className={wrapperClasses}>
=======
  return (
    <div className="col-span-12 md:col-span-3 lg:col-span-3 xl:col-span-2">
      <form
        onSubmit={onSubmit}
        className="grid grid-cols-12 px-4 py-1 mb-4 transition-all duration-500 ease-out transform bg-white rounded-md md:sticky lg:sticky xl:sticky md:top-4 lg:top-4 xl:top-4 bg-opacity-95 hover:bg-opacity-100"
      >
        <div
          id="category-filters"
          className="flex flex-col col-span-6 mt-4 md:col-span-12 lg:col-span-12 xl:col-span-12"
        >
          <div
            id="wrapper"
            className="self-center md:self-auto lg:self-auto xl:self-auto"
          >
>>>>>>> db73de834db27e82fbc1ba86a2a14a837aad08c5
            <p className="mb-2 font-semibold md:ml-2 lg:ml-2 xl:ml-2">
              Category
            </p>
            {categories.map(c => (
              <div
                className="flex items-center space-x-2 text-gray-800 md:ml-2 lg:ml-2 xl:ml-2"
                key={c.id}
              >
                <Checkbox
                  name={c.name}
                  checked={checkedCategories[c.name]}
                  onChange={onCategoryChange}
                  type="checkbox"
                />
                <label htmlFor={c.name}>{capitalize(c.name)}</label>
              </div>
            ))}
          </div>
        </div>

<<<<<<< HEAD
        <div id="group-type-filters" className={filterClasses}>
          <div id="wrapper" className={wrapperClasses}>
=======
        <div
          id="group-type-filters"
          className="flex flex-col col-span-6 mt-4 md:col-span-12 lg:col-span-12 xl:col-span-12"
        >
          <div
            id="wrapper"
            className="self-center md:self-auto lg:self-auto xl:self-auto"
          >
>>>>>>> db73de834db27e82fbc1ba86a2a14a837aad08c5
            <p className="mb-2 font-semibold md:ml-2 lg:ml-2 xl:ml-2">
              Recommended
            </p>
            {groupTypes.map(gt => (
              <div
                className="flex items-center space-x-2 text-gray-800 md:ml-2 lg:ml-2 xl:ml-2"
                key={gt.id}
              >
                <Checkbox
                  name={gt.name}
                  checked={checkedGroupTypes[gt.name]}
                  onChange={onGroupTypeChange}
                  type="checkbox"
                />
                <label htmlFor={gt.name}>{capitalize(gt.name)}</label>
              </div>
            ))}
          </div>
        </div>
<<<<<<< HEAD
        <button type="submit" className={submitClasses}>
=======
        <button
          type="submit"
          className="flex flex-col items-center justify-center w-full h-10 col-span-12 py-1 mt-8 mb-4 text-lg font-semibold text-blue-500 transition-all duration-150 ease-out transform border border-blue-500 rounded-md md:mt-4 lg:mt-4 xl:mt-4 hover:bg-blue-500 hover:text-white focus:outline-none"
        >
>>>>>>> db73de834db27e82fbc1ba86a2a14a837aad08c5
          {loading ? (
            <img
              src="spinner.gif"
              alt="spinner"
              className="items-center justify-center h-full"
            />
          ) : (
            <p>Search</p>
          )}
        </button>
      </form>
    </div>
  );
};

export default Search;
