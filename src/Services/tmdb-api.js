export default class tmdbApi{
    constructor() {
        this.baseUrl = 'https://api.themoviedb.org/3/movie/';
        this.apiKey = '?api_key=3e02319f0f5cca64a9821ef1961a6e97';
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
}