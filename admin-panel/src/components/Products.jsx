import React, { Component } from "react";
import axios from "axios";
import ProductList from "../pages/ProductList";

export class Products extends Component {
  state = {
    products: [],
    loading: true,
    baseUrl: "http://localhost:9096",
  };

  componentDidMount() {
    axios
      .get(`${this.state.baseUrl}/test/products`)
      .then((response) => {
        let res = response.data;

        this.setState({
          products: res,
          loading: false,
        });
        console.log(this.state);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <ProductList products={this.state.products} />
      </div>
    );
  }
}

export default Products;
