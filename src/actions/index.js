import {
    TABLE_OPTIONS,
    TABLE_CRITERIA,
    TABLE_VALUE,
} from './type';
//
//-> Tables
//
// updating table options
export const updateOptions = (options, newInput) => async (dispatch) => {
    let newOption = {
        ...options[options.length -1],
        option: newInput
    }

    dispatch({ type: TABLE_OPTIONS, payload: [...options, newOption]});
};

// creating a criteria
export const createCriteria = (criteria, newInput) => async (dispatch) => {

    dispatch({ type: TABLE_CRITERIA, payload: [...criteria, newInput]});
};

// change table options value
export const updateValue = (newValue) => async (dispatch) => {

    dispatch({ type: TABLE_VALUE, payload: newValue});
};

// sort the options from highest to lowest
export const sortOptions = (newValue) => async (dispatch) => {
    // if value being changed is greater then value.length -2 (second highest)
    // then change spots in the object array
    dispatch({ type: TABLE_VALUE, payload: newValue});
};

// delete option from object array
export const deleteOption = (options, index) => async (dispatch) => {
    // remove item out of array from index
    options.splice(index, 1);
    dispatch({ type: TABLE_OPTIONS, payload: options});
};