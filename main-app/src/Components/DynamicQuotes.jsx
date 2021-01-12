import { useLocation } from "react-router-dom";
import { Card, Col, Jumbotron, Row } from "react-bootstrap";
import "./dynamicQuotes.css";
import PartnerSerivce from "../Service/PartnerService";
import { useState } from "react";
import loadingGif from "../images/loading2.gif";
function DynamicQuotes(props) {
  console.log("I am dynamic quotes !");
  const location = useLocation();
  const [buttontext, setbuttontext] = useState("Compare Quotes");
  let quotes = props.location.state.quotes;
  console.log(quotes);
  let productName = props.location.state.productName;
  console.log("Kuch hi", productName);
  let id = props.location.state.id;
  console.log("my id" + id);
  let formData = props.location.state.data;
  console.log("FormData(quotesPage) ", formData);
  const [multipleQuotes, setMultipleQuotes] = useState([]);
  const compareQuotes = () => {
    console.log("hello");
    PartnerSerivce.getMultipleQuotes(formData, productName, id).then((res) => {
      console.log("----->>>> MULTI-res", res.data);
      setMultipleQuotes(res.data);
    });
    var toggle = document.getElementById("showquotes");
    if (buttontext === "Compare Quotes") {
      setbuttontext("Hide Quotes");
    } else {
      setbuttontext("Compare Quotes");
    }

    if (toggle.style.visibility === "visible") {
      toggle.style.visibility = "hidden";
    } else {
      toggle.style.visibility = "visible";
    }
    console.log("multiple " + multipleQuotes);
  };

  return (
    <div>
      <Jumbotron>
        <h3>Received quotes..</h3>
      </Jumbotron>
      {quotes.map((quo) => (
        <Row style={{ textAlign: "center", justifyContent: "center" }}>
          <Card style={{ width: "1000px" }} id="cards">
            <Card.Body>
              <Row>
                <Col>
                  <img
                    style={{
                      boxShadow:
                        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                    }}
                    width="100"
                    height="100"
                    background="#777"
                    color="#777"
                    className="rounded-circle"
                    src={quo.logo}
                  ></img>
                </Col>
                <Col>
                  <h5>{quo.name}</h5>
                </Col>
                <Col>
                  <h6>Rs. {quo.price}</h6>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Row>
      ))}
      <br />
      <br />
      <div style={{ textAlign: "center", justifyContent: "center" }}>
        <button id="but" onClick={compareQuotes}>
          {buttontext}
        </button>
        <br />
        <br />
        <div id="showquotes">
          {multipleQuotes.length ? (
            <div>
              {multipleQuotes.map((multi) => (
                <div>
                  <Row
                    style={{ textAlign: "center", justifyContent: "center" }}
                  >
                    <Card style={{ width: "1000px" }} id="cards">
                      <Card.Body>
                        <Row>
                          <Col>
                            <img
                              style={{
                                boxShadow:
                                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                              }}
                              width="100"
                              height="100"
                              background="#777"
                              color="#777"
                              className="rounded-circle"
                              src={JSON.parse(multi).logo}
                            ></img>
                          </Col>
                          <Col>
                            <h5>{JSON.parse(multi).name}</h5>
                          </Col>
                          <Col>
                            <h6>Rs. {JSON.parse(multi).price}</h6>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  </Row>
                  <br />
                  <br />
                </div>
              ))}
            </div>
          ) : (
            <div className="container">
              <h4>No Quotes Yet....</h4>
              <img src={loadingGif} alt="loading" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DynamicQuotes;
