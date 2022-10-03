import React, { Component } from "react";
import { Badge, ListGroup, ListGroupItem } from "reactstrap";

export default class Category extends Component {
  render() {
    return (
      <div className="mb-4">
        <Badge color="danger" className="p-1">
          <h2>CategoryList</h2>
        </Badge>
        <ListGroup>
          {this.props.categories.map(category => {
            return (
              <ListGroupItem key={category.id} onClick={() => this.props.changeCategory(category)} >{category.categoryName}</ListGroupItem>
            )
          })}
        </ListGroup>
        <h4>{this.props.currentCategory}</h4>
      </div>
    );
  }
}
