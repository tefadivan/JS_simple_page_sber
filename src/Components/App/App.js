import './App.css';
import React, {Component} from "react";
import Header from "../Header/Header";

localStorage.setItem('dataUsername', 'Admin')
localStorage.setItem('dataPassword', '12345')

export default class App extends Component {
    state = {
        isLogged : false,
        dataToLogin: {
            username: localStorage.getItem('dataUsername'),
            password: localStorage.getItem('dataPassword')
        }
    }

    onLogging = (username, password) => {
        if (username === this.state.dataToLogin.username && password === this.state.dataToLogin.password){
            this.setState({
                isLogged: true
            });
        }
    }

    render() {
        return (
            <div id="App">
                <Header isLogged={this.state.isLogged} onLogging={this.onLogging}/>
            </div>
        );
    }
}