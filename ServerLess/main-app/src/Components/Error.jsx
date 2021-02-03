import React from "react";
import { Jumbotron } from "react-bootstrap";
import loadingGif from "../images/404.gif";

function Error() {
  return (
    <Jumbotron style={{ textAlign: "center" }}>
      <h2>Ooh!</h2>
      <img
        src={loadingGif}
        alt="loading.."
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          width: "50%",
        }}
      />
      <br />
      <a href="/" className="btn btn-outline-primary">
        Home
      </a>
    </Jumbotron>
  );
}

export default Error;
