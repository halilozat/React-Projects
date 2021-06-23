import { combineReducers } from 'redux'
import changeCategoryReducer from "./changeCategoryReducer"
import categoryListReducer from './categoryListReducer'
import productListReducer from './productListReducer'
import changeProductReducer from './productListReducer'


const rootReducer = combineReducers({
    changeCategoryReducer,
    changeProductReducer,
    categoryListReducer,
    productListReducer,
    
})

export default rootReducer