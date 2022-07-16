import React from 'react';
import { Nav, Navbar, Container, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navbarre = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand >Gestion Commerciale</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/Categories">Categories</Nav.Link>
          <Nav.Link as={Link} to="/Scategories">Sous-Categories</Nav.Link>
          <Nav.Link as={Link} to="/Articles">Articles</Nav.Link>
          <Nav.Link as={Link} to="/ArticlesDatatables">Articles-DataTables</Nav.Link>
          <Nav.Link as={Link} to="/ArticlesCard">Articles Card</Nav.Link>
        </Nav>
        
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Taper ici"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Container>
    </Navbar>
  );
}

export default Navbarre;
