import React from 'react';
import {Outlet} from "react-router-dom";
import {Genres, MoviesList} from "../components";

export const MoviesPage = () => {
    return (
        <div style={{display:"flex"}}>
            <Genres/>
            <MoviesList/>
            <Outlet/>
        </div>
    );
};