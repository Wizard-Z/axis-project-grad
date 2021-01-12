import React, { useState } from "react";
import loadingGif from "../images/loading.gif";
import AddPartnerForm from "./AddPartnerForm";

export default function PartnerList({ partners }) {
  console.log(partners);
  let posts = partners;
  console.log("I am partner:--->> ", posts);

  const [items, setItems] = useState({ content: "", title: "" });

  function onToggle(partner) {
    // parterId = parseInt(parterId);
    console.log("Toggle-clicked", partner);
    setItems({
      title: "Edit/save",
      content: <AddPartnerForm partner={partner} />,
    });
  }

  return (
    <div className="container">
      <div className="row">
        {posts.length ? (
          posts.map((post) => (
            <div className="col-sm-4" key={post.id}>
              <p> </p>
              <div className={post.available ? "card" : "card bg-danger"}>
                <img className="card-img-top" src={post.logo}></img>
                <div className="card-body">
                  <h4 className="card-title">{post.name}</h4>
                  <p className="card-text">{post.description}</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <strong>Insurance: </strong> {post.insuranceType}
                  </li>
                  <li className="list-group-item">
                    <strong>endPoint: </strong> {post.endPoints}
                  </li>
                  <li className="list-group-item">
                    <strong>requestBody: </strong> {post.requestBody}
                  </li>

                  <li className="list-group-item">
                    <strong>fields: </strong> {post.feilds}
                  </li>
                  <li className="list-group-item">
                    <strong>id: </strong> {post.id}
                  </li>

                  <li className="list-group-item">
                    <button
                      onClick={() => onToggle(post)}
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
            <h4>Partners Loading....</h4>
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
