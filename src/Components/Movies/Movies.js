import React from 'react'

export default class Movies extends React.Component{
    render(){
        return(
            <div className="movies">
                <h2>Фильмы</h2>
                <ul className="d-flex-row">
                    <li>
                        Фильм №1
                    </li>
                    <li>
                        Фильм №2
                    </li>
                    <li>
                        Фильм №3
                    </li>
                </ul>
            </div>
        );
    }
}