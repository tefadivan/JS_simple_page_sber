import React, {Component} from 'react';
import {Form, Button, Navbar, Nav, FormControl, NavItem} from "react-bootstrap";

import {Link, Route, Switch} from "react-router-dom";
import Home from '../Home/Home'
import Movies from '../Movies/Movies'
import Profile from "../Profile/Profile";

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <Navbar>
                    <Navbar.Collapse>
                        <Nav className="mr-auto">
                            <NavItem eventkey={1} href="/">
                                <Nav.Link as={Link} to="/" >На главную</Nav.Link>
                            </NavItem>
                            <NavItem eventkey={2} href="/movies">
                                <Nav.Link as={Link} to="/movies" >Фильмы</Nav.Link>
                            </NavItem>
                            <NavItem eventkey={3} href="/profile">
                                <Nav.Link as={Link} to="/profile" >Профиль</Nav.Link>
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <div>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/movies' component={Movies} />
                        <Route exact path='/profile' render={()=>{return(
                            <Profile isLogged={this.props.isLogged}/>)
                            }
                        } />
                    </Switch>
                </div>
            </div>
        );
    }
}