import React, { useState } from "react";
import loadingGif from "../images/loading.gif";
import AddProductForm from "./AddProductForm";

function ProductList({ products }) {
  let posts = products;
  const [items, setItems] = useState({ content: "", title: "" });

  function handleToggle(product) {
    console.log("Configure-clicked", product);
    setItems({
      title: "Edit/save",
      content: <AddProductForm product={product} />,
    });
  }

  console.log("I am Products:--->> ", posts);

  return (
    <div className="container">
      <div className="row">
        {posts.length ? (
          posts.map((post) => (
            <div className="col-sm-4" key={post.id}>
              <p> </p>
              <div className={post.available ? "card" : "card bg-danger"}>
                <img
                  className="card-img-top"
                  src={post.imgUrl}
                  alt="logo"
                ></img>
                <div className="card-body">
                  <h4 className="card-title">{post.productName}</h4>
                  <p className="card-text">{post.productDescription}</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <strong>id: </strong> {post.id}
                  </li>

                  <li className="list-group-item">
                    <button
                      onClick={() => handleToggle(post)}
                      type="button"
                      className="btn btn-success"
                    >
                      Configure
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          ))
        ) : (
          <div className="container">
            <h4>Products Loading....</h4>
            <img src={loadingGif} alt="loading" />
          </div>
        )}
      </div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
        <h2 className="h2">{items.title}</h2>
      </div>
      <>{items.content}</>
    </div>
  );
}

export default ProductList;
