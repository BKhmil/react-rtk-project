import {createBrowserRouter, RouteObject} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage/HomePage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import GenresPage from "./pages/GenresPage/GenresPage";
import MoviesList from "./components/MoviesList/MoviesList";
import SearchPage from "./pages/SearchPage/SearchPage";
import MovieInfoPage from "./pages/MovieInfoPage/MovieInfoPage";
import MovieInfo from "./components/MovieInfo/MovieInfo";

const routes: RouteObject[] = [
    {
        path: '',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'home',
                element: <HomePage />
            },
            {
                path: 'movies',
                element: <MoviesPage />
            },
            {
                path: 'genres',
                element: <GenresPage />,
                children: [
                    {
                        index: true,
                        element: <MoviesList whereIAm={'genres'} />
                    },
                    {
                        path: ':genreId',
                        element: <MoviesList whereIAm={'genres'} />
                    }
                ]
            },
            {
                path: 'search',
                element: <SearchPage />,
                children: [
                    {
                        index: true,
                        element: <MoviesList whereIAm={'search'} />
                    },
                    {
                        path: ':queryName',
                        element: <MoviesList whereIAm={'search'} />
                    }
                ]
            },
            {
                path: 'info',
                element: <MovieInfoPage />,
                children: [
                    {
                        path: ':movieId',
                        element: <MovieInfo />
                    }
                ]
            }
        ]
    }
];

const router = createBrowserRouter(routes);

export {
    router
}