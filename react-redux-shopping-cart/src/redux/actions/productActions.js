import * as actionTypes from './actionTypes'

export function changeProduct(product){
    return {type:actionTypes.CHANGE_PRODUCT, payload:product}
}

export function getProductsSuccess(product){
    return {type:actionTypes.GET_PRODUCTS_SUCCES, payload:product}
}

export function getProducts(categoryId){
    return function(dispatch){
        let url = "http://localhost:3000/products"
        if(categoryId){
            url = url + "?categoryId="+categoryId
        }
        return fetch(url)
        .then(response => response.json())
        .then(result => dispatch(getProductsSuccess(result)))
    }
}