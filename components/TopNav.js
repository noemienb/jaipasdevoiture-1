import React from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

export default function TopNav() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home"><img src="/img/logos/jpdv-logo.png" alt="logo" height="100px" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Réservations</Nav.Link>
          <Nav.Link href="#link">Véhicules</Nav.Link>
          <Nav.Link href="#link">Agences</Nav.Link>
          <Nav.Link href="#link">Contact</Nav.Link>
          <Nav.Link href="#link">FAQ</Nav.Link>
          <Nav.Link href="#link">Entreprise</Nav.Link>
          <Nav.Link href="#link">covid</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Recherche" className="mr-sm-2" />
          <Button variant="outline-success">Recherche</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  )
}