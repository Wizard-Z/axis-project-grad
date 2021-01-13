import {
  Card,
  Col,
  Jumbotron,
  Row,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
function MultipleQuotes({ multipleQuotes }) {
  console.log(`In Multiquotes:: ${multipleQuotes}`);
  return (
    <div>
      {multipleQuotes.map((multi) => (
        <div>
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
