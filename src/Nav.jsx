import React, { Component } from "react";
import {
  // Collapse,
  Navbar,
  // NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

export default class Navi extends Component {
  render() {
   console.log(this.props.cart);
    return (
      <div>
        <Navbar>
          <NavbarBrand href="/">Shop</NavbarBrand>
          {/* <Collapse> */}
            <Nav>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  GitHub
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Your Cart
                </DropdownToggle>
                <DropdownMenu>
                  {this.props.cart.map((cart) => {
                    return <DropdownItem>{cart.productName}</DropdownItem>;
                  })}
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          {/* </Collapse> */}
        </Navbar>
      </div>
    );
  }
}
