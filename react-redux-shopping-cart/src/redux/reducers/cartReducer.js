import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState'

export default function cartReducer(state = initialState.cart, action) {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            //state.find = daha önce sepette var mı? diye sorar..
            var addedItem = state.find(c => c.product.id === action.payload.product.id)
            if (addedItem) {
                var newState = state.map(cartItem => {
                    if (cartItem.product.id == action.payload.product.id) {
                        return Object.assign({}, addedItem, { quantity: addedItem.quantity + 1 })
                        
                    }
                    return cartItem
                })
                return newState
            }else{
                //...state = state'in kopyasını al, ...action.payload = o kopyaya action ile gelen payload'i ekle.
                return [...state, {...action.payload}]
            }

        default:
            return state
    }
}