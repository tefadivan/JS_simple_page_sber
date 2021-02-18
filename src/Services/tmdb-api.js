export default class tmdbApi{
    constructor() {
        this.baseUrl = 'https://api.themoviedb.org/3/movie/';
        this.apiKey = '?api_key=3e02319f0f5cca64a9821ef1961a6e97';
        this.basePosterUrl = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2';
        // ok :
        // https://api.themoviedb.org/3/movie/100?api_key=3e02319f0f5cca64a9821ef1961a6e97
        // id = 100

        // 7 - no valid key
        // https://api.themoviedb.org/3/movie/discover/movie?with_genres=18&primary_release_year=2014?api_key=3e02319f0f5cca64a9821ef1961a6e97 - no 7
        // https://api.themoviedb.org/3/discover/movie?with_genres=18&primary_release_year=2014?api_key=3e02319f0f5cca64a9821ef1961a6e97 - no 7
        // https://api.themoviedb.org/discover/movie?with_genres=18&primary_release_year=2014?api_key=3e02319f0f5cca64a9821ef1961a6e97 - no - 404

        // images - http://image.tmdb.org/t/p/
        // https://www.themoviedb.org/t/p/w600_and_h900_bestv2/57vIJPRNsBZUAKu0jkt8QrA3tXI.jpg - full, ok
    }

    async getResource(url){
        const res = await fetch(url);
        return await res.json();
    }

    async getMovie(id){
        const movie = await this.getResource(this.baseUrl + id + this.apiKey);
        return this._transformMovie(movie);
    }
    _transformMovie(movie) {
        return {
            title: movie.original_title
        };
    }

    ///discover/movie?sort_by=popularity.desc

    async getTopPopularMovies(){
        const movie = await this.getResource(
            this.baseUrl + "discover/movie?sort_by=popularity.desc" + this.apiKey);
        return this._transformMovie(movie);
    }

    async getPosterMovie(id){
        const posterMovie = await this.getResource( this.basePosterUrl + id + this.apiKey);
        return this._transformPosterMovie(posterMovie);
    }
    _transformPosterMovie(posterMovie) {
        return {
            poster: posterMovie.poster_path
        };
    }

}