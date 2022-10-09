import React, { Component } from "react";
import {
  DropdownItem,
  Badge,
  Button
} from "reactstrap";
export default class CartSummary extends Component {
  render() {
    return (
      <div>
        {this.props.cart.map((cart) => {
          return (
            <DropdownItem>
              <Badge color="danger" className="me-2">
                x
              </Badge>
              {cart.productName}
              <Badge color="success" className="ms-2">
                {cart.quantity}
              </Badge>
            </DropdownItem>
          );
        })}
        <DropdownItem divider />
        <Button onClick={() => this.props.resetCart}>
          Reset
        </Button>
      </div>
    );
  }
}
