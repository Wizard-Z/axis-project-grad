import {
  Card,
  Col,
  Jumbotron,
  Row,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import "./dynamicQuotes.css";
import PartnerSerivce from "../Service/PartnerService";
import { useState, useEffect } from "react";
import loadingGif from "../images/loading2.gif";
import MultipleQuotes from "./MultipleQuotes";
function DynamicQuotes(props) {
  console.log("I am dynamic quotes !");
  const [buttonText, setButtonText] = useState("Compare Quotes");
  let quotes = props.location.state.quotes;
  console.log("This is quotes", quotes);
  let productName = props.location.state.productName;
  console.log("Kuch hi", productName);
  let id = props.location.state.id;
  console.log("my id" + id);
  let formData = props.location.state.data;
  console.log("FormData(quotesPage) ", formData);
  const [multipleQuotes, setMultipleQuotes] = useState([]);
  useEffect(() => {
    PartnerSerivce.getMultipleQuotes(formData, productName, id).then((res) => {
      console.log("----->>>> MULTI-res", res.data);
      setMultipleQuotes(res.data);
      console.log("USe Effect data", multipleQuotes);
    });
  }, multipleQuotes);
  const compareQuotes = () => {
    console.log("hello");

    var toggle = document.getElementById("showquotes");
    if (buttonText === "Compare Quotes") {
      setButtonText("Hide Quotes");
    } else {
      setButtonText("Compare Quotes");
    }

    if (toggle.style.visibility === "visible") {
      toggle.style.visibility = "hidden";
    } else {
      toggle.style.visibility = "visible";
    }
    console.log("CompareQuotes Clicked data-->" + multipleQuotes);
  };

  const sortAscending = (e) => {
    setMultipleQuotes([
      ...multipleQuotes.sort((a, b) => {
        return JSON.parse(a).price - JSON.parse(b).price;
      }),
    ]);

    console.log("This is sorted ascending quotes ", multipleQuotes);
  };
  const sortDescending = (e) => {
    setMultipleQuotes([
      ...multipleQuotes.sort((a, b) => {
        return JSON.parse(b).price - JSON.parse(a).price;
      }),
    ]);

    console.log("This is sorted descending quotes ", multipleQuotes);
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
                    alt="logo"
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
          {buttonText}
        </button>
        <br />
        <br />

        <div id="showquotes">
          {multipleQuotes.length ? (
            <div>
              <DropdownButton
                id="dropdown-basic-button"
                style={{
                  width: "200px",
                  margin: "auto",
                }}
                title="Sort Quotes By"
              >
                <Dropdown.Item onClick={() => sortDescending()}>
                  Price: Highest to Lowest
                </Dropdown.Item>
                <Dropdown.Item onClick={() => sortAscending()}>
                  Price: Lowest to Highest
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">Popularity</Dropdown.Item>
              </DropdownButton>
              <br />
              <br />
              <MultipleQuotes multipleQuotes={multipleQuotes} />
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
