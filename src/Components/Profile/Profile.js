import React from 'react'
import Login from '../Login/Login'

export default class Profile extends React.Component{
    render(){
        if (!this.props.isLogged){
            return(
                <Login/>
            );
        }
        return(
            <div className="Profile">
                <h2>Профиль</h2>
            </div>
        );
    }
}