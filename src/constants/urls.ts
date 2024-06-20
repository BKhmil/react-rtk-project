const baseURL = 'https://api.themoviedb.org/3';
const posterBaseURL = 'https://image.tmdb.org/t/p';

const urls = {
    discover: {
        getMoviesPage: (pageNumber: number) =>
            baseURL + '/discover/movie?page=' + pageNumber.toString(),
        getMoviesByGenre: (genreIds: number, pageNumber: string) =>
            baseURL + '/discover/movie?with_genres=' + genreIds + '&page=' + pageNumber
    },
    search: {
        getMovieByQuery: (query: string) =>
            baseURL + 'search/movie?query=' + query
    },
    genres: {
        movieList: baseURL + '/genre/movie/list'
    }
}

export {
    baseURL,
    posterBaseURL,
    urls
}