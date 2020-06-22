import {
    GET_ACTIVITIES,
    GET_ACTIVITY,
    SET_LOADING,
    CLEAR_ACTIVITIES,
    GET_GROUP_TYPES,
    GET_CATEGORIES,
} from "../types";

export default (state, action) => {
    switch (action.type) {
        case GET_ACTIVITIES:
            return {
                ...state,
                activities: action.payload,
                loading: false,
            };
        case GET_CATEGORIES:
            return {
                ...state,
                categories: action.payload,
            };
        case GET_GROUP_TYPES:
            return {
                ...state,
                groupTypes: action.payload,
            };
        case GET_ACTIVITY:
            return {
                ...state,
                activity: action.payload,
                loading: false,
            };
        case CLEAR_ACTIVITIES:
            return {
                ...state,
                activities: [],
                loading: false,
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true,
            };
        default:
            return state;
    }
};
