import { ADD_CONTACT, FILTER_UPDATE } from "redux/types/vars";

export const addContact = (inputData) => ({
    type: ADD_CONTACT,
    payload: inputData
});


export const addFilter = (inputFilterData) => ({
    type: FILTER_UPDATE,
    payload: inputFilterData
});
