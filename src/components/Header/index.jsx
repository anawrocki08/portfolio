// import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// Affichage "burger" pour largeur "small" expand="sm"
// <Nav className="me-auto"> affichage nav à gauche et burger à droite
// <Nav className="ms-auto"> affichage nav à droite et burger à droite
// <Navbar collapseOnSelect fixed="top" expand="sm" bg="myBgd" variant="dark">

function Header() {
  return (
    <header id="home" className="header__container sticky-top">
      <Navbar collapseOnSelect expand="sm" bg="myBgd" variant="dark">
        <Container>
          <Navbar.Brand href="#welcome">|~AN~|</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-bar">
            <Nav className="ms-auto">
              <Nav.Link href="#welcome">Accueil</Nav.Link>
              <Nav.Link href="#about">A propos</Nav.Link>
              <Nav.Link href="#skills">Compétences</Nav.Link>
              <Nav.Link href="#my-projects">Réalisations</Nav.Link>
              {/* <Nav.Link href="#contact">Contact</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
