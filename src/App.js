import React, { Component } from "react";
import Category from "./Category";
import Product from "./Product";
import Navi from "./Nav";
import "./App.css";
import { Col, Container, Row } from "reactstrap";

export default class App extends Component {
  state = {
    products: [],
    categories: [],
    currentCategory: "",
    cart: [],
  };

  componentDidMount() {
    this.getCategories();
    this.getProducts();
    this.resetCart();
  }

  componentDidUpdate() {
    console.log(this.state.cart)
  }

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  };

  getCategories = () => {
    let url = "http://localhost:3000/categories";

    fetch(url)
      .then((response) => response.json())
      .then((jsonData) => this.setState({ categories: jsonData }));
  };

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    url += "?categoryId=" + categoryId;

    fetch(url)
      .then((response) => response.json())
      .then((jsonData) => this.setState({ products: jsonData }));
  };

  addToCart = (product) => {
    let newCart = this.state.cart;
    let addedItem = newCart.find(c => c.productName === product.productName);

    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ productName: product.productName, quantity: 1 });
    }

    this.setState({ cart: newCart });
  };
  resetCart = () => {
    this.setState({ cart: [] })
  }
  render() {
    return (
      // JSX
      <div className="App">
        <Container>
          <Navi cart={this.state.cart} />
          <Row>
            <Col className="col-4 bg-danger">
              <Category
                categories={this.state.categories}
                changeCategory={this.changeCategory}
                currentCategory={this.state.currentCategory}
              />
            </Col>
            <Col className="col-8 bg-primary">
              <Product
                products={this.state.products}
                addToCart={this.addToCart}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

