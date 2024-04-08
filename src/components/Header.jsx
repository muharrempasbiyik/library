import React from 'react'
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap'

const Header = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-secondary">
      <Container >
        <Navbar.Brand href="#"><img src="https://icons.iconarchive.com/icons/itzikgur/my-seven/72/Books-2-icon.png" alt="" />Library</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            l
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Products</Nav.Link>
            <Nav.Link href="#action2">About us</Nav.Link>
            <Nav.Link href="#action2">Contact us</Nav.Link>

           
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-dark">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header