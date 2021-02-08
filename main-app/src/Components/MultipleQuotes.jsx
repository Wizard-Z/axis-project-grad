import { Card, Col, Row } from "react-bootstrap";
import "./dynamicQuotes.css"
function MultipleQuotes({ multipleQuotes }) {
  console.log(`In Multiquotes:: ${multipleQuotes}`);
  return (
    <div>
      {multipleQuotes.map((multi) => (
        <div>
          <Row>
            <Card style={{ width: "1000px" }} id="cards">
              <Card.Body>
                <Row>
                  <Col>
                    <img className="partnerlogo"
                     
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
  );
}
export default MultipleQuotes;
