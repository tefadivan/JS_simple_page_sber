import React from 'react'
import Login from '../Login/Login'

export default class Profile extends React.Component{
    render(){
        if (!this.props.isLogged){
            return(
                <Login onLogging={this.props.onLogging}/>
            );
        }
        return(
            <div className="profile">
                <h2>Профиль</h2>
            </div>
        );
    }
}