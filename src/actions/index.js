import {
    TABLE_OPTIONS,
    TABLE_CRITERIA
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
    let newCriteria = criteria
    newCriteria.push(newInput)

    dispatch({ type: TABLE_CRITERIA, payload: newCriteria});
};