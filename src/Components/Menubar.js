import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logoimg from "../images/logo.png"
import { Link as ScrollLink } from 'react-scroll';

export default function Menubar() {
  return (

    <Navbar expand="lg" className="bg-navbar-color">
      <Container>
        <Navbar.Brand href="#"><a><img className='logo' src={logoimg} /></a></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="nav-link my-lg-0 me-auto"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <ScrollLink to="home" smooth={true} duration={300}>
              Home
            </ScrollLink>
            <ScrollLink to="aboutUs" smooth={true} duration={300}>
              About Us
            </ScrollLink>
            <ScrollLink to="WhyWeDiff" smooth={true} duration={300}>
              Why We Different
            </ScrollLink>
            <NavDropdown to='what-we-do-id' title="What We Do" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">E-com Web Development</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Data Analytics
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Marketing Solutions
              </NavDropdown.Item>
            </NavDropdown>
            <ScrollLink to="why-us-id" smooth={true} duration={300}>
              Why Us
            </ScrollLink>
            <ScrollLink to="testimonial-id" smooth={true} duration={300}>
              Testimonial
            </ScrollLink>
            <ScrollLink to="our-clinets-id" smooth={true} duration={300}>
              Our Clients
            </ScrollLink>
            <ScrollLink to="footer-id" smooth={true} duration={300}>
              Contact Us
            </ScrollLink>
          </Nav>
          <Form className="d-flex get-a-quote ms-auto">
            <a href='#' > Get a Qoute</a>
            {/* <Button variant="outline-success">Get a Qoute</Button> */}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}




