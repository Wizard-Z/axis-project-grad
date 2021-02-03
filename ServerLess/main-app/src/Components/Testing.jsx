// import axios from "axios";
// import React, { useState, useEffect } from "react";
// import loadingRing2 from "../images/loadingRing2.gif";
// import {
//   Jumbotron,
//   Nav,
//   Navbar,
//   Container,
//   Row,
//   Col,
//   Card,
// } from "react-bootstrap";
// import PartnerSerivce from "../Service/PartnerService";

// const getQuotes = (name) => (e) => {
//   e.preventDefault();
//   // history.push(`/insurance/${productName}/${name}`);
//   console.log("I am pusheed!");
// };
// const Insurance = (id) => (e) => {
//   e.preventDefault();
//   console.log(id);
//   // history.push(`/insurance/${id}`);
// };

// function Testing() {
//   const [partners, setProducts] = useState([]);
//   useEffect(() => {
//     PartnerSerivce.getPartners().then((res) => {
//       setProducts(res.data);
//     });
//   }, []);

//   console.log("partners:", partners);
//   return (
//     <>
//       <Container fluid>
//         <h2 className="text-center" style={{ color: "#264a9f" }}>
//           Our Partners
//         </h2>
//         <br />
//         {partners.length ? (
//           <Row>
//             {partners.map((part) => (
//               <Col>
//                 <Card
//                   id="cards"
//                   style={{
//                     width: "18rem",
//                     height: "30rem",
//                     textAlign: "justify",
//                     borderRadius: "1em",
//                   }}
//                 >
//                   <Card.Img variant="top" src={part.logo} height="150px" />
//                   <Card.Body>
//                     <Card.Title>{part.name}</Card.Title>
//                     <Card.Text>{part.description}</Card.Text>
//                   </Card.Body>
//                 </Card>
//                 <br />
//                 <br />
//               </Col>
//             ))}
//           </Row>
//         ) : (
//           <img
//             src={loadingRing2}
//             alt="loading.."
//             style={{
//               display: "block",
//               marginLeft: "auto",
//               marginRight: "auto",
//               width: "20%",
//             }}
//           />
//         )}
//       </Container>
//     </>
//   );
// }
