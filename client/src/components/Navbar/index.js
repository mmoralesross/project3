import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';


function Appbar() {
    return (
        <Navbar bg="light" expand="lg" className="mb-1">
            <Navbar.Brand href="#home">Market React</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#home">Log In</Nav.Link>
                    <Nav.Link href="#link">Log Out</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    );
};

export default Appbar;