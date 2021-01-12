import React, { Component } from "react";
import axios from "axios";

class AddProductForm extends Component {
  constructor(props) {
    super(props);
    if (Object.keys(this.props).length > 0) {
      this.state = this.props.product;
    } else {
      this.state = {
        id: "",
        imgUrl: "",
        productDescription: "",
        productName: "",
        available: true,
      };
    }
    console.log("in constructor:", Object.keys(this.props).length);
  }
  onChangeHandle = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(`${e.target.name}:${e.target.value}`);
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("http://localhost:9096/test/addProduct", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    alert("Product Added " + this.state.id);
    this.state = {
      id: "",
      imgUrl: "",
      productDescription: "",
      productName: "",
      available: true,
    };
  };

  render() {
    const {
      id,
      imgUrl,
      productDescription,
      productName,
      available,
    } = this.state;
    // this.setState({id:this.props.id})
    console.log("in render:", Object.keys(this.props).length);
    return (
      <div
        className="container  align-items-center justify-content-center"
        style={{ marginTop: "1em" }}
      >
        <form onSubmit={this.onSubmitForm}>
          <div className="form-group">
            <label htmlFor="id">Enter product Id</label>
            <input
              type="number"
              name="id"
              value={id}
              onChange={this.onChangeHandle}
              className="form-control"
              placeholder="Enter Id"
              required
            ></input>
            <label htmlFor="productName">Product-name? </label>
            <input
              type="text"
              name="productName"
              value={productName}
              onChange={this.onChangeHandle}
              className="form-control"
              placeholder="Provide product-name"
              required
            ></input>
            <label htmlFor="imgUrl">Logo Url </label>
            <input
              type="text"
              name="imgUrl"
              value={imgUrl}
              onChange={this.onChangeHandle}
              className="form-control"
              placeholder="Your Logo Here"
              required
            ></input>
            <label htmlFor="productDescription">Enter Description</label>
            <input
              type="text"
              name="productDescription"
              value={productDescription}
              onChange={this.onChangeHandle}
              className="form-control"
              placeholder="Your description.."
              required
            ></input>

            <br />
            <label htmlfor="available">Is Available?</label>
            <select
              className="custom-select"
              name="available"
              value={available}
              onChange={this.onChangeHandle}
              required
            >
              <option value={true}>True</option>
              <option value={false}>False</option>
            </select>

            <br />
            <br />

            <button type="submit" className="btn btn-success">
              Add
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddProductForm;
