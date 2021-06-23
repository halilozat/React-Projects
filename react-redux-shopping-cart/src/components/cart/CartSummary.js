import React, { Component } from 'react'
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavItem,
    NavLink,
    Badge
} from 'reactstrap';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as cartActions from '../../redux/actions/cartActions'

class CartSummary extends Component {

    renderEmpty() {
        return (
            <NavItem>
                <NavLink><s>Sepet boş</s></NavLink>
            </NavItem>
        )
    }

    renderSummary() {
        return (
            <UncontrolledDropdown nav inNavbar >
                <DropdownToggle nav caret>
                    Sepet
                </DropdownToggle>
                <DropdownMenu right>
                    {
                        this.props.cart.map(cartItem => (
                            <DropdownItem key={cartItem.product.id}>
                                <span className="btn btn-sm"><Badge className="badge bg-danger btn btn-sm" onClick={() => this.props.actions.removeFromCart(cartItem.product)}>-</Badge></span>
                                 {cartItem.product.productName}
                                <span className="btn btn-sm mb-2">x{cartItem.quantity}</span>
                            </DropdownItem>
                        ))
                    }


                    <DropdownItem divider />
                    <DropdownItem>
                        Sepete Git!
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        )
    }

    render() {
        return (
            <div>

                {
                    this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()
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

export default connect(mapStateToProps, mapDispatchToProps)(CartSummary)