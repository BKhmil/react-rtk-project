import React, {useEffect} from 'react';
import {Outlet} from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import {useAppDispatch} from "../hooks/reduxHooks";
import {genresActions} from "../redux/slices/genresSlice";

const MainLayout = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(genresActions.getAllMovieGenres());
    }, []);

    return (
        <div>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;