import {
    TABLE_OPTIONS,
    TABLE_CRITERIA,
    TABLE_VALUE
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