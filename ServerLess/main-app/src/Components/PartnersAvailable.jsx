import { Jumbotron, Container, Row, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";
import PartnerSerivce from "../Service/PartnerService";

import loadingGif from "../images/loading.gif";

function PartnersAvailable(props) {
  let productName = props.match.params.id;
  const [partners, setPartners] = useState([]);
  let product = productName.split(" ").join("");
  let history = useHistory();
  useEffect(() => {
    PartnerSerivce.getPartnerByType(product).then((res) => {
      setPartners(res.data);
    });
  }, []);
  const getQuotes = (id, fields, name) => (e) => {
    e.preventDefault();
    console.log("id", id);
    history.push({
      pathname: `/insurance/${product}/${name}/form`,
      state: { fields: fields, id: id },
    });

    console.log("I am pusheed!");
  };

  return (
    <div>
      <Jumbotron>
        <h2 className="text-center" style={{ color: "#264a9f" }}>
          {productName}
        </h2>
      </Jumbotron>
      {partners.length ? (
        <div>
          <Container fluid>
            <h2 className="text-center" style={{ color: "#264a9f" }}>
              Our Partners
            </h2>
            <br />
            <Row>
              {partners.map((partner) => (
                <div className="col-lg-3">
                  <Card
                    id="cards"
                    style={{
                      width: "18rem",
                      height: "auto",
                      textAlign: "justify",
                      borderRadius: "1em",
                    }}
                  >
                    <Card.Img variant="top" src={partner.logo} height="150px" />
                    <Card.Body>
                      <Card.Title>{partner.name}</Card.Title>
                      <Card.Text>{partner.description}</Card.Text>
                      <p>
                        <a
                          className="btn btn-secondary"
                          style={{
                            boxShadow:
                              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                          }}
                          href="button"
                          role="button"
                          onClick={getQuotes(
                            partner.id,
                            partner.feilds,
                            partner.name
                          )}
                        >
                          Get Free Quotes &raquo;
                        </a>
                      </p>
                    </Card.Body>
                  </Card>
                  <br />
                  <br />
                </div>
              ))}
            </Row>
          </Container>
          <br />
          <br />
        </div>
      ) : (
        <>
          <h4 style={{ textAlign: "center" }}>Loading...</h4>
          <p style={{ textAlign: "center" }}>still?.. try refreshing..</p>
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
        </>
      )}
    </div>
  );
}
export default PartnersAvailable;
