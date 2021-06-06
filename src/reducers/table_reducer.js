/* eslint-disable import/no-anonymous-default-export */
import {
    TABLE_OPTIONS,
    TABLE_CRITERIA
} from '../actions/type.js'

export default (state = {
    decision: "What should i eat today",
    criteria: [
        "price",
    ],
    options: [{
        option: "Hot dog",
        price: 20,
    }, {
        option: "Pizza",
        price: 79,
    }],
}, action) => {
    switch (action.type) {
        case TABLE_OPTIONS:
            return Object.assign({}, state, {options: action.payload});
        case TABLE_CRITERIA:
            let x = state.criteria
            x = action.payload;
            let newOption = [
                ...state.options,
            ]
            newOption.forEach((_,i) => 
                newOption[i] = {...newOption[i], [x[x.length -1]]: 20}
            )
            return Object.assign({}, state, {criteria: action.payload, options: newOption});
        default:
            return state;
    }
}