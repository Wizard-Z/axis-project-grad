import React, { useState, useEffect } from "react";
import EndPointsService from "../components/EndPointsService";
import loadingGif from "../images/loading2.gif";

function EndPointsStatus() {
  const [endPointsHealth, setEndPointsHealth] = useState([]);
  useEffect(() => {
    EndPointsService.getEndPoints()
      .then((res) => {
        setEndPointsHealth(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log("I am endPointsHealth -->", endPointsHealth);
  return (
    <>
      <div className="container">
        {endPointsHealth.length ? (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">EndPoint</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {endPointsHealth.map((health) => (
                <tr>
                  <td>{health.name}</td>
                  <td>{health.endPoint}</td>
                  <td>{health.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <>
            <h4>Loading....</h4>
            <img src={loadingGif} alt="loading" />{" "}
          </>
        )}
      </div>
    </>
  );
}

export default EndPointsStatus;
