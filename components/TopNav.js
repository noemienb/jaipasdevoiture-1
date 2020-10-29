import React from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

export default function TopNav({ menus, logo }) {
  return (
    <Navbar id="top-nav" bg="white" expand="lg">
      <Navbar.Brand><img src={logo} alt="logo" height="100px" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {menus.map((m, i) => <Nav.Link key={i} href={m.link}>{m.label.toUpperCase()}</Nav.Link>)}
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Recherche" className="mr-sm-2" />
          <Button variant="outline-success">Recherche</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  )
}
