const baseURL = 'https://api.themoviedb.org/3';
const posterBaseURL = 'https://image.tmdb.org/t/p';

const urls = {
    discover: {
        getMoviesPage: (pageNumber: number) =>
            baseURL + '/discover/movie?page=' + pageNumber.toString()
    },
    genres: {
        movieList: baseURL + '/genre/movie'
    },
    poster: {
        getPosterForListItem: (posterPath: string) => posterBaseURL + '/w300' + posterPath,
        getPosterForFullInfoItem: (posterPath: string) => posterBaseURL + '/w600' + posterPath
    }
}

export {
    baseURL,
    posterBaseURL,
    urls
}