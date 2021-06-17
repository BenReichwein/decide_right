import {
    TABLE_OPTIONS,
    TABLE_CRITERIA,
    TABLE_VALUE,
    TABLE_WEIGHT,
    TABLE_REPORT
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

// updating the weight
export const updateWeight = (weight) => async (dispatch) => {

    dispatch({ type: TABLE_WEIGHT, payload: weight});
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

// delete criteria from array
export const deleteCriteria = (criteria, index) => async (dispatch) => {
    // remove item out of array from index
    criteria.splice(index, 1);
    dispatch({ type: TABLE_CRITERIA, payload: criteria});
};

// generate the report 
export const generateReport = (state) => async (dispatch) => {
    let {options, weight, decision} = state

    let totals = []
    let message = []
    let temp = 0;
    let topValue = {value: 0};

    options.forEach(value => {
        for (let i = 0; i < weight.length; i++) {
            temp += (value[weight[i]] * (weight.length / (i+1)))
        }
        totals.push({key: value.option, value: temp})
        message.push(`${value.option} with the value of: ${temp}`)
        temp = 0
    })

    for (let i = 0; i < totals.length; i++) {
        if (totals[i].value > topValue.value) {
            topValue = totals[i];
        }
    }

    dispatch({ type: TABLE_REPORT, payload: `Here's the options after criteria calculations; ${message.join(', ')}. So knowing this, ${topValue.key} is the best option for you to choose.`})
}