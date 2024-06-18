import {createBrowserRouter, RouteObject} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage/HomePage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";

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
                element: <MoviesPage />
            }
        ]
    }
];

const router = createBrowserRouter(routes);

export {
    router
}