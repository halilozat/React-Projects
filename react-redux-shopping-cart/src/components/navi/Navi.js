import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import CartSummary from '../cart/CartSummary';
import {Link} from 'react-router-dom'


const Navi = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md" className="mb-3 ">
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar >
                    <Nav className="ml-auto" navbar>
                        <CartSummary />
                        <NavItem>
                            <NavLink> <Link to="/">Ana Sayfa</Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink> <Link to="/cart">Sepet</Link></NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Navi;