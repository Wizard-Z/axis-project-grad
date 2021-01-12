import React from "react";
import loadingGif from "../images/loading2.gif";
function Requests() {
  return (
    <div className="container">
      <h4>Loading....</h4>
      <img src={loadingGif} alt="loading" />
    </div>
  );
}

export default Requests;
