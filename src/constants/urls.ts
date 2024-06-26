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
        getMovieByQuery: (query: string, pageNumber: string) =>
            baseURL + '/search/movie?query=' + query + '&page=' + pageNumber
    },
    genres: {
        movieList: baseURL + '/genre/movie/list'
    },
    findMovieById: {
        find: (id: number) =>
            baseURL + '/movie/' + id
    }
}

export {
    baseURL,
    posterBaseURL,
    urls
}