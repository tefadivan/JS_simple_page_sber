import React from 'react'
import {Form, Button} from "react-bootstrap";
import './Login.css'

export default class Login extends React.Component{
    render(){
        return(
            <div className="login d-flex-row justify-content-center">
                <h2>Необходимо авторизоваться</h2>
                <Form className="login-form">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="email" placeholder="username" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="password" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}