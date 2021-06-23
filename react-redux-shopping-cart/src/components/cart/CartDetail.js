import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as cartActions from '../../redux/actions/cartActions'
import { Table, Button } from 'reactstrap'
import alertify from 'alertifyjs'
import {Link} from 'react-router-dom';

class CartDetail extends Component {

    removeFromCart(product) {
        this.props.actions.removeFromCart(product)
        alertify.error(product.productName + " sepetten silindi!")
    }

    renderEmpty() {
        return(
            <div>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Unit Price</th>
                            <th>quantity</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>
                                <h1>Sepet Boş!</h1>
                            </th>
                            <th>
                                <h1>Sepet Boş!</h1>
                            </th>
                            <th>
                                <h1>Sepet Boş!</h1>
                            </th>
                            <th>
                                <h1>Sepet Boş!</h1>
                            </th>
                        </tr>
                        <tr>
                            <th>
                                <a><Link to="/">Ana Sayfa..</Link></a>
                            </th>
                        </tr>
                        
                    </tbody>
                </Table>
            </div>
        )
    }

    renderDetail() {
        return (
            <div>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Unit Price</th>
                            <th>quantity</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.cart.map(cartItem => (
                            <tr key={cartItem.product.id}>
                                <th scope="row">{cartItem.product.id}</th>
                                <td>{cartItem.product.productName}</td>
                                <td>{cartItem.product.unitPrice} $</td>
                                <td>{cartItem.quantity}</td>
                                <td>
                                    <Button
                                        color="danger"
                                        onClick={() => this.removeFromCart(cartItem.product)}
                                    >
                                        Sil
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        )
    }

    render() {
        return (
            <div>
                {
                    this.props.cart.length > 0 ? this.renderDetail() : this.renderEmpty()
                }
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch)
        }
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cartReducer
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartDetail)