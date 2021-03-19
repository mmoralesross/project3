import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function Appbar(props) {
    return (
        <Navbar bg="light" expand="lg" className="mb-1">
            <Navbar.Brand>MR</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    {props.children}
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    );
};

export default Appbar;