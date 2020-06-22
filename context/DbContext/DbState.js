import React, { useReducer } from "react";
import axios from "axios";
import dbContext from "./dbContext";
import dbReducer from "./dbReducer";
import {
  GET_ACTIVITIES,
  GET_ACTIVITY,
  SET_LOADING,
  CLEAR_ACTIVITIES,
  GET_GROUP_TYPES,
  GET_CATEGORIES,
} from "../types";

const DbState = props => {
  const initialState = {
    activities: ["initial"],
    categories: [],
    groupTypes: [],
    activity: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(dbReducer, initialState);

  // Get Activities
  const getActivities = async (categories, groupTypes) => {
    setLoading();
    let queryString = `${process.env.SERVER_URL}/activities`;
    if (categories.length > 0) {
      queryString += "?categories=" + categories.join();
    }
    if (groupTypes.length > 0) {
      queryString += "&groupTypes=" + groupTypes.join();
    }
    const res = await axios.get(queryString);

    dispatch({
      type: GET_ACTIVITIES,
      payload: res.data,
    });
  };
  // Get Categories
  const getCategories = async () => {
    const res = await axios.get(`${process.env.SERVER_URL}/categories`);
    dispatch({
      type: GET_CATEGORIES,
      payload: res.data,
    });
  };
  // Get Group Types
  const getGroupTypes = async () => {
    const res = await axios.get(`${process.env.SERVER_URL}/grouptypes`);
    dispatch({
      type: GET_GROUP_TYPES,
      payload: res.data,
    });
  };

  // Get Activity
  const getActivity = async id => {
    setLoading();
    const res = await axios.get(`/activity/${id}`);
    dispatch({
      type: GET_ACTIVITY,
      payload: res.data,
    });
  };

  // Clear Activities
  const clearActivities = () => dispatch({ type: CLEAR_ACTIVITIES });

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <dbContext.Provider
      value={{
        activities: state.activities,
        categories: state.categories,
        groupTypes: state.groupTypes,
        activity: state.activity,
        loading: state.loading,
        getActivities,
        getActivity,
        clearActivities,
        setLoading,
        getGroupTypes,
        getCategories,
      }}
    >
      {props.children}
    </dbContext.Provider>
  );
};

export default DbState;
