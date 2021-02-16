import './App.css';
import React, {Component} from "react";
import Header from "../Header/Header";

export default class App extends Component {
    state = {
        isLogged : false,
    }

    onLogging = (username, password) => {
        if (username === 'Admin' && password === '12345'){
            this.setState({
                isLogged: true
            });
        }
        else{
            alert("Имя пользователя или пароль введены не верно!");
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