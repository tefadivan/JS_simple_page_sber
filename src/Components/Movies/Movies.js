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
        this.setState((state) =>{
            return {movies: [...state.movies, movie]};
        })
    };

    updateMovies(){
        for (let i = 0; i < 15; ++i){
            const id = Math.floor(Math.random() * (550 - 100) + 100);
            this.api.getMovie(id).then((body) => {
            //this.api.getTopPopularMovies().then((body) => {
            //this.api.getPosterMovie(id).then((body) => {
                if(body.title){
                    this.onMovieLoaded(body);
                }
            });

            //this.api.getPosterMovie(id).then((body) => {
                    //this.onMovieLoaded(body);
            //});

        }
    }

    render(){
        const elements = this.state.movies.map(({title,id}) => {
            return (
                <li className="list-group-item" key={id}>
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
