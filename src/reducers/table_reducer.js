/* eslint-disable import/no-anonymous-default-export */
import {
    TABLE_OPTIONS,
    TABLE_CRITERIA
} from '../actions/type.js'

let x = [
    "price",
    "taste"
]

export default (state = {
    decision: "What should i eat today",
    criteria: [
        "price",
        "taste"
    ],
    options: [{
        option: "Hot dog",
        [x[0]]: 20,
        [x[1]]: 10
    }, {
        option: "Pizza",
        [x[0]]: 69,
        [x[1]]: 20
    }],
}, action) => {
    switch (action.type) {
        case TABLE_OPTIONS:
            return Object.assign({}, state, {options: action.payload});
        case TABLE_CRITERIA:
            x = action.payload;
            let newOption = [
                ...state.options,
            ]
            newOption.forEach((_,i) => 
                newOption[i] = {...newOption[i], [x[x.length -1]]:20}
            )
            return Object.assign({}, state, {criteria: action.payload, options: newOption});
        default:
            return state;
    }
}
// adding criteria
// x.push("new criteria")
// return Object.assign({}, state, {criteria: "new criteria"})
// return Object.assign({}, state, {options: [x[x.length()]]})