import React from 'react'
import tmdbApi from "../../Services/tmdb-api";
export default class Movies extends React.Component{
    api = new tmdbApi();

    state = {
        movies: []
    }

    constructor(props) {
        super(props);
        this.updateMovies();
    }

    onMovieLoaded = (movie) => {
        this.setState(()=>{
            this.state.movies.push(movie);
        } );
    };

    updateMovies(){
        for (let i = 0; i < 15; ++i){
            const id = Math.floor(Math.random() * (550 - 100) + 100);
            this.api.getMovie(id).then(this.onMovieLoaded);
        }
    }

    render(){
        console.log("in render");
        console.log(this.state.movies);
        const elements = this.state.movies.map(({title}) => {
            return (
                <li className="list-group-item">
                    {title}
                </li>
            );
        })

        return(
            <div className="movies">
                <h2>Список фильмов</h2>
                <ul className="list-group d-flex-row">
                    {elements}
                </ul>
            </div>
        );
    }
}