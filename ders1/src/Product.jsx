import React, { Component } from "react";
import { Badge, Table, Button } from "reactstrap";

export default class Product extends Component {
  render() {
    return (
      <div>
        <Badge color="primary" className="p-1">
          <h2>ProductList</h2>
        </Badge>

        <Table dark striped>
          <thead>
            <tr>
              <th>ID</th>
              <th>ProductName</th>
              <th>UnitPrice</th>
              <th>UnitsInStock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => {
              return (
                <tr>
                  <th scope="row">{product.id}</th>
                  <td>{product.productName}</td>
                  <td>{product.unitPrice}</td>
                  <td>{product.unitsInStock}</td>
                  <td>
                    <Button color="info" onClick={this.props.addToCart(product)}>Add</Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}
