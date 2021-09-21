import * as actions from "../actions/actionTypes";

// Need to update the reducer function later
export function reducer(state = [], action) {
    switch (action.type) {
        case actions.ADD_LIKE:
            return [...state, {}];
        case action.DELETE_LIKE:
            return state.filter(item => item.id !== action.payload.id);
        default:
            return state;
    }
 }