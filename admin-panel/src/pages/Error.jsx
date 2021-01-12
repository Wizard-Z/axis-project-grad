import React from "react";
import { Link } from "react-router-dom";
import errorGif from "../images/404.png";

export default function Error() {
  return (
    <>
      <img src={errorGif} className="center" width="100%" />
      <Link to="/admin-home">
        <button className="btn btn-outline-primary">Home</button>
      </Link>
    </>
  );
}
