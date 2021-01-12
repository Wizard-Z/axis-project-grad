import { Navbar, Nav } from "react-bootstrap";
function NavBarComponent() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" fixed="top" bg="dark">
        <Navbar.Brand href="/" style={{ color: "white" }}>
          Insurance Mart
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/" style={{ color: "white" }}>
              Home
            </Nav.Link>
            <Nav.Link href="#aboutUs" id="about" style={{ color: "white" }}>
              About Us
            </Nav.Link>
          </Nav>
          <Nav>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <br />
      <br />
    </div>
  );
}
export default NavBarComponent;
