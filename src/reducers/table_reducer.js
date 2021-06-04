/* eslint-disable import/no-anonymous-default-export */
import {
    TABLE_INFO
} from '../actions/type.js'
export default (state = null, action) => {
    switch (action.type) {
        case TABLE_INFO:
            return action.payload;
        default:
            return state;
    }
}