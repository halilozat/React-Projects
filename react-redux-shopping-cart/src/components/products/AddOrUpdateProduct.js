import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getCategories } from '../../redux/actions/categoryActions'
import { saveProduct } from '../../redux/actions/productActions'
import ProductDetail from './ProductDetail'
import productListReducer from '../../redux/reducers/productListReducer'
import categoryListReducer from '../../redux/reducers/categoryListReducer'

function AddOrUpdateProduct({
    products,
    categories,
    getProducts,
    getCategories,
    saveProduct,
    history,
    ...props
}) {
    //product'ı setProduct ile set edebilirim demek...
    const [product, setProduct] = useState({ ...props.product })
    useEffect(() => {
        if (categories.length === 0) {
            getCategories()
        }
        setProduct(...props.product)
    }, [props.product])

    function handleChange(e) {
        const { name, value } = e.target
        setProduct(previousProduct => ({
            ...previousProduct,
            [name]: name === "categoryId" ? parseInt(value, 10) : value
        }))
    }

    function handleSave(e) {
        e.preventDefault()
        saveProduct(product).then(() => {
            history.push("/")
        })
    }

    return (
        <ProductDetail
            product={product}
            categories={categories}
            onChange={handleChange}
            onSave={handleSave}
        />
    )

}

export function getProductById(products, productId) {
    let product = products.find(product => product.id === productId) || null
    return product
}

const mapDispatchToProps = {
    getCategories, saveProduct
}

function mapStateToProps(state, ownProps) {
    const productId = ownProps.match.params.productId
    const product =
        productId && state.productListReducer.length > 0
            ? getProductById(state.productListReducer, productId)
            : {}
    return {
        product,
        products: state.productListReducer,
        categories: state.categoryListReducer
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddOrUpdateProduct)