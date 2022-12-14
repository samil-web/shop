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
  DropdownMenu
  // DropdownItem,
  // Badge,
} from "reactstrap";
import CartSummary from "./CartSummary";

export default class Navi extends Component {
  render() {
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
                {this.props.cart.length > 0 ? "Your Cart" : "Empty Cart"}-{this.props.cart.length}
              </DropdownToggle>
              <DropdownMenu>

                <CartSummary cart={this.props.cart} resetCart={this.props.resetCart} />
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          {/* </Collapse> */}
        </Navbar>
        console.log(this.props)
      </div>

    );
  }
}
