import React from 'react'
import {Form, Button} from "react-bootstrap";
import './Login.css'

export default class Login extends React.Component{
    state = {
        labelUsername: '',
        labelPassword: ''
    };

    onLabelUsernameChange = (e) => {
        this.setState({
            labelUsername: e.target.value
        })
    };

    onLabelPasswordChange = (e) => {
        this.setState({
            labelPassword: e.target.value
        })
    };

    onSubmit = (e) => {
        e.preventDefault();
        const { labelUsername, labelPassword } = this.state;
        this.props.onLogging(labelUsername, labelPassword);
        this.setState({ labelUsername: '' , labelPassword: '' });
    };

    render(){
        return(
            <div className="login d-flex-row justify-content-center" onSubmit={this.onSubmit}>
                <h2>Необходимо авторизоваться</h2>
                <Form className="login-form">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="username"
                                      placeholder="username"
                                      value={this.state.labelUsername}
                                      onChange={this.onLabelUsernameChange}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"
                                      placeholder="password"
                                      value={this.state.labelPassword}
                                      onChange={this.onLabelPasswordChange}/>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}