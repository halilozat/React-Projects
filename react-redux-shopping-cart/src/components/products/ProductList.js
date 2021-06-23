import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ListGroup, ListGroupItem } from 'reactstrap';
import * as productActions from '../../redux/actions/productActions'


class ProductList extends Component {
    componentDidMount() {
        this.props.actions.getProducts()
    }
    
    render() {
        return (
            <div>
                <h3>Products</h3>
                <ListGroup>
                    {
                        this.props.products.map(product => (
                            <ListGroupItem key={product.id}>
                                {product.productName}
                            </ListGroupItem>
                        ))
                    }

                </ListGroup>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentProduct: state.changeProductReducer,
        products: state.productListReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getProducts: bindActionCreators(productActions.getProducts, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)