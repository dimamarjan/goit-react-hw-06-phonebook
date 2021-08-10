import { ADD_CONTACT } from "redux/types/vars";

const initialState = [];

const itemReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_CONTACT:
            return [...state, action.payload];
        default:
            return state;
    }
};

export default itemReducer;