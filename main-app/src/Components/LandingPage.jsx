import "./landingpage.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PartnerSerivce from "../Service/PartnerService";
import loadingRing2 from "../images/loadingRing2.gif";
import bot from "../images/botIcon6.jpeg";

import {
  Carousel,
  Nav,
  Row,
  Navbar,
  Jumbotron,
  Card,
  Col,
  Container,
} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";
import SimpleForm from "./SimpleForm";
function LandingPage() {
  let [showChat, setShowChat] = useState(false);

  const startChat = () => {
    setShowChat(true);
  };
  const hideChat = () => {
    setShowChat(false);
  };
  const history = useHistory();
  const [partners, setPartners] = useState([]);
  useEffect(() => {
    PartnerSerivce.getPartners().then((res) => {
      setPartners(res.data);
    });
  }, []);

  const [products, setProducts] = useState([]);
  const [chatBotProducts, setChatBotProducts] = useState([]);
  useEffect(() => {
    PartnerSerivce.getProducts().then((res) => {
      setProducts(res.data);
      setChatBotProducts(
        res.data.map((prod) => ({
          value: prod.productName,
          label: prod.productName,
          trigger: "7",
        }))
      );
    });
  }, products);

  const myfunc = (e) => {
    e.preventDefault();

    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  };

  const Insurance = (id) => (e) => {
    e.preventDefault();
    console.log(id);
    console.log("from PROPS: ", chatBotProducts);
    history.push(`/insurance/${id}`);
  };

  return (
    <div>
      <main>
        <Carousel fluid id="home">
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100 h-10"
              src="travel.jpg"
              alt="First slide"
             
            />
            <Carousel.Caption>
              <h3 >Travel Insurance</h3>
              <p >
                For stress-free trips, secure your travel with one of our travel
                insurance plans that suits your needs best
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100 h-10"
              src="health.jpg"
              alt="Third slide"
          
            />
            <Carousel.Caption>
              <h3 >Health Insurance</h3>
              <p >
                Secure your Comprehensive protection for the contents of your
                health
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100 h-10"
              src="home.jpg"
              alt="Third slide"
            
            />
            <Carousel.Caption>
              <h3 >Home Insurance</h3>
              <p >
                Secure your Comprehensive protection for the contents of your
                health
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100 h-10"
              src="car.jpg"
              alt="Third slide"
            
            />
            <Carousel.Caption>
              <h3 >Motor Insurance</h3>
              <p >
                Secure your vehicle against third-party liabilities and other
                damages. Now Get Motor Insurance issued instantly online
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <div className="container marketing">
          {products.length ? (
            <div className="row">
              {products.map((prod) => (
                <div className="col-lg-4">
                  <img className="logo"
                    src={prod.imgUrl}
                    alt="productLogo"
                    
                  ></img>
                  <h2>{prod.productName}</h2>
                  <p>{prod.productDescription}</p>
                  <p>
                    <button
                      id={prod.btnId}
                      className="btn btn-secondary"
                      onClick={Insurance(prod.productName)}
                    >
                      Show Quotes &raquo;
                    </button>
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <img className="gif"
              src={loadingRing2}
              alt="loading.."
            />
          )}
        </div>

        <Jumbotron>
          <h2 className="text-center">
            Why Insurance Mart
          </h2>
          <br />
          <Row>
            <figure>
              <img className="whyUS"
                src={
                  "https://tata-cms.s3.ap-south-1.amazonaws.com/Group_1497_cf38de5cfc.svg"
                }
               
                alt="whyUs"
              ></img>
              <figcaption className="fig-caption"
              >
                1 Cr + Policies Issued
                <br /> last year
              </figcaption>
            </figure>
            <figure>
              <img className="whyUS"
                src={
                  "https://tata-cms.s3.ap-south-1.amazonaws.com/number_of_customers_d90837fff5.svg"
                }
              
                alt="whyUs"
              ></img>
              <figcaption className="fig-caption"
                
              >
                5 Cr + Customers
                <br /> Served since Inception
              </figcaption>
            </figure>
            <figure>
              <img className="whyUS"
                src={
                  "https://tata-cms.s3.ap-south-1.amazonaws.com/instant_policy_dcaa84f54f.svg"
                }
             
                alt="whyUs"
              ></img>
              <figcaption className="fig-caption"
      
              >
                5 Cr + Customers
                <br /> Served since Inception
              </figcaption>
            </figure>
            <figure>
              <img className="whyUS"
                src={
                  "https://tata-cms.s3.ap-south-1.amazonaws.com/Group_3624_d8635bfcef.svg"
                }
               
                alt="whyUs"
              ></img>
              <figcaption className="fig-caption"
         
              >
                5 Cr + Customers
                <br /> Served since Inception
              </figcaption>
            </figure>
            <figure>
              <img className="whyUS"
                src={
                  "https://tata-cms.s3.ap-south-1.amazonaws.com/Group_3623_60bfbdb020.svg"
                }
              
                alt="whyUs"
              ></img>
              <figcaption className="fig-caption"
               
              >
                5 Cr + Customers
                <br /> Served since Inception
              </figcaption>
            </figure>
            <figure>
              <img className="whyUS"
                src={
                  "https://tata-cms.s3.ap-south-1.amazonaws.com/Group_3651_5537ce339f.svg"
                }
               
                alt="whyUs"
              ></img>
              <figcaption className="fig-caption"
           
              >
                5 Cr + Customers
                <br /> Served since Inception
              </figcaption>
            </figure>
          </Row>
          <img src={"girl-sofa.png"} className="center" alt="girlSofa"></img>
        </Jumbotron>
        <Container fluid>
          <h2 className="text-center" style={{ color: "#264a9f" }}>
            Our Partners
          </h2>
          <br />
          {partners.length ? (
            <Row>
              {partners.map((part) => (
                <div className="col-lg-3">
                  <Card
                    id="productcards"
                  >
                    <Card.Img variant="top" src={part.logo} height="150px" />
                    <Card.Body>
                      <Card.Title>{part.name}</Card.Title>
                      <Card.Text>{part.description}</Card.Text>
                    </Card.Body>
                  </Card>
                  <br />
                  <br />
                </div>
              ))}
            </Row>
          ) : (
            <img className="gif"
              src={loadingRing2}
              alt="loading.."
             
            />
          )}
        </Container>
        <br />
        <br />
        <Container fluid>
          <h2 className="text-center" >
            What Our Customer Say
          </h2>
          <div className="row__posters">
            <div className="row__poster">
              <Card id="cards" >
                <Row>
                  <Card.Img
                    variant="left"
                    height="50px"
                    src={
                      "https://tata-cms.s3.ap-south-1.amazonaws.com/Group_12439_8ebadbf1d7.svg"
                    }
                  />

                  <h6 id="name">Akshay</h6>

                  <p id="para">
                    "I am more than happy with the way my insurance claim was
                    settled."
                  </p>
                </Row>
              </Card>
            </div>
            <div className="row__poster">
              <Card id="cards" >
                <Row>
                  <Card.Img
                    variant="left"
                    style={{ marginTop: "10px" }}
                    height="50px"
                    src={
                      "https://tata-cms.s3.ap-south-1.amazonaws.com/Group_12437_af742185cf.svg"
                    }
                  />

                  <h6 id="name" style={{ marginTop: "20px" }}>
                    Aishwarya
                  </h6>

                  <p id="para">
                    "“I don’t find Tata AIG’s premiums inflated at all. In fact,
                    the underwriting process is very quick and fair. I’d
                    recommend their car insurance policies to everyone.”."
                  </p>
                </Row>
              </Card>
            </div>

            <div className="row__poster">
              <Card id="cards" >
                <Row>
                  <Card.Img
                    variant="left"
                    height="50px"
                    src={
                      "https://tata-cms.s3.ap-south-1.amazonaws.com/Group_12440_430db4edbf.svg"
                    }
                  />

                  <h6 id="name">Saurav</h6>

                  <p id="para">
                    "I am more than happy with the way my insurance claim was
                    settled."
                  </p>
                </Row>
              </Card>
            </div>
            <div className="row__poster">
              <Card id="cards" >
                <Row>
                  <Card.Img
                    variant="left"
                    height="50px"
                    src={
                      "https://tata-cms.s3.ap-south-1.amazonaws.com/Group_12439_8ebadbf1d7.svg"
                    }
                  />

                  <h6 id="name">Charan</h6>

                  <p id="para">
                    "I am more than happy with the way my insurance claim was
                    settled."
                  </p>
                </Row>
              </Card>
            </div>
            <div className="row__poster">
              <Card id="cards" >
                <Row>
                  <Card.Img
                    variant="left"
                    height="50px"
                    src={
                      "https://tata-cms.s3.ap-south-1.amazonaws.com/Group_12440_430db4edbf.svg"
                    }
                  />

                  <h6 id="name">Chaitanya</h6>

                  <p id="para">
                    "I am more than happy with the way my insurance claim was
                    settled."
                  </p>
                </Row>
              </Card>
            </div>
            <div className="row__poster">
              <Card id="cards" >
                <Row>
                  <Card.Img
                    variant="left"
                    height="50px"
                    src={
                      "https://tata-cms.s3.ap-south-1.amazonaws.com/Group_12439_8ebadbf1d7.svg"
                    }
                  />

                  <h6 id="name">Kumaresh</h6>

                  <p id="para">
                    "I am more than happy with the way my insurance claim was
                    settled."
                  </p>
                </Row>
              </Card>
            </div>
          </div>
        </Container>
        <br />
        <br />
        <Container fluid>
          <Row>
            <Col>
              <h2 >About Us</h2>
              <p >
                Tata AIG General Insurance Company Limited is a joint venture
                company between Tata Group and American International Group
                (AIG). Tata AIG General Insurance Company Limited celebrates 20
                years of service as on 2020, since it commenced operations in
                India on January 22, 2001. The Company has grown strongly to
                emerge as the preferred private general insurance company in
                India with several pioneering firsts to its credit.
                <span id="dots">...</span>
                <span id="more">
                  Driven by a mission to create better tomorrows for Customers
                  by delivering trustworthy and innovative risk solutions, Tata
                  AIG’s broad portfolio of protection covers are backed by years
                  of professional expertise in product offerings, exceptional
                  service capabilities and seamless claims process … management.
                  The Company offers a wide range of general insurance covers
                  for businesses and individuals including a comprehensive range
                  of general insurance products for Liability, Marine Cargo,
                  Personal Accident, Travel, Rural-Agriculture Insurance,
                  Extended Warranty etc. Tata AIG General Insurance Company
                  Limited has an asset base of approximate INR 10,050 crs. (as
                  of 31st March 2019). With 200 offices spread across India, the
                  Company has a robust multi-channel distribution network of
                  40,000+ licensed agents and 437+ licensed brokers. The Company
                  has a workforce of over 6,000 employees, including 550+ claim
                  experts and a dedicated Customer Service & Operations team (as
                  of March 2019), consistently delivering superior service
                  experiences powered by the latest innovations in technology.
                </span>
              </p>
              <a
                
                href="showMore"
                onClick={myfunc}
                id="myBtn"
              >
                Show More
              </a>
            </Col>
            <Col>
              <img src={"family-kid.png"} alt="family"></img>
            </Col>
          </Row>
        </Container>
        <Navbar
          collapseOnSelect
          expand="lg"
          sticky="bottom"
         
        >
          <Navbar.Brand href="#home" style={{ color: "white" }}>
            Insurance Mart
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home" style={{ color: "white" }}>
                @2020 CopyRight
              </Nav.Link>
              <Nav.Link
                href="#aboutUs"
                id="about"
            
              ></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </main>

      <div className="bot">
        <div style={{ display: showChat ? "" : "none" }}>
          <SimpleForm prods={chatBotProducts}></SimpleForm>
        </div>

        <div>
          {!showChat ? (
            <img className="chatlogo"
              src={bot}
     
              onClick={() => startChat()}
            ></img>
          ) : (
            <img className="chatlogo"
              src={bot}
            
              onClick={() => hideChat()}
            ></img>
          )}
        </div>
      </div>
    </div>
  );
}
export default LandingPage;
