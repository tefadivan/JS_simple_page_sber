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
        //this.updateMovies(); // net
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
        console.log("in render 1");
        console.log("0 is ");

        console.log(this.state.movies);
        const elements = this.state.movies.map(({title}) => {
            if (title != undefined) // hotfix пустых элементов с undefined title
            return (
                <li className="list-group-item">
                    {title}
                </li>
            );
        })

        console.log("in render 2");
        console.log(elements); // пустые на первом проходе

        let elementsCopy;
        /*
        for (let tt of this.state.movies.map.values())
        {
            if (tt != undefined) // hotfix пустых элементов с undefined title
                elementsCopy = this.state.movies.map.get(tt);
        }
*/
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
