import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from './types';

export const getItems = () => {
    return {
        type: GET_ITEMS
    };
};
//Delete item action
//Takes id to find item to delete
//Return returns to reducer (itemReducer.js)
export const deleteItem = id => {
    return {
        type: DELETE_ITEM,
        //QUESTION: What is payload?
        payload: id
    };
};

//Add item action
export const addItem = item => {
    return {
        type: ADD_ITEM,
        //QUESTION: What is payload?
        payload: item
    };
};