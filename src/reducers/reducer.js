
// Need to update the reducer function later
export function reducer(state = [], action) {
    switch (action.type) {
        case "ADD_LIKE":
            return [...state, {}];
        case "DELETE_LIKE":
            return state.filter(item => item.id !== action.payload.id);
        default:
            return state;
    }
 }