import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const Navi = (props) => {
    return (
        <div>
            <Nav className="mt-3">
                <NavLink href="#">Link</NavLink> 
                <NavLink href="#">Link</NavLink> 
                <NavLink href="#">Another Link</NavLink> 
                <NavLink disabled href="#">Disabled Link</NavLink>
            </Nav>
            <hr/>
        </div>
    );
}

export default Navi;