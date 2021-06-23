import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState';

export default function changeProductReducer(state = initialState.currentProduct, action){
    switch (action.type) {
        case actionTypes.CHANGE_PRODUCT:
            return action.payload
        default:
            return state;
    }
}