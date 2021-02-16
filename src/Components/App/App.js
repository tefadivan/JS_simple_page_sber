import './App.css';
import React, {Component} from "react";
import Header from "../Header/Header";

export default class App extends Component {
    state={
        isLogged : false // Пока устанавливается вручную
    }

    render() {
        return (
            <div id="App">
                <Header isLogged={this.state.isLogged}/>
            </div>
        );
    }
}