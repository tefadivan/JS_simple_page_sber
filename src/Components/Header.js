import React, {Component} from 'react';
import {Form, Button, Container, Navbar, Nav, FormControl} from "react-bootstrap";
import logo from './kaukaz_tanzy_2.png'
import FormContext from "react-bootstrap/FormContext";

class Header extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" >
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src={logo}
                            height={30}
                            width={30}
                            className="d-inline-block align-top"
                            alt="img1"
                        //>
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav className="mr-auto">
                            <Nav.Link href="/" > Home </Nav.Link>
                            <Nav.Link href="/about" > About us </Nav.Link>
                            <Nav.Link href="/contacts" > Contacts </Nav.Link>
                            <Nav.Link href="/blog" > Blog </Nav.Link>
                        </Nav>
                        <Form inline >
                            <FormControl
                            type="text"
                            placeholder="Search"
                            className="mr-sm-2" // marginRight-small-соЗначением2
                            />
                            <Button variant="outline-info">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default Header;