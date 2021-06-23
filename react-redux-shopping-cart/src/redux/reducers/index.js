import { combineReducers } from 'redux'
import changeCategoryReducer from "./changeCategoryReducer"
import categoryListReducer from './categoryListReducer'
import productListReducer from './productListReducer'
import changeProductReducer from './productListReducer'
import cartReducer from './cartReducer'

const rootReducer = combineReducers({
    changeCategoryReducer,
    changeProductReducer,
    categoryListReducer,
    productListReducer,
    cartReducer,
})

export default rootReducer