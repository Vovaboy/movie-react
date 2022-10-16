import React from 'react';

import {Link} from "react-router-dom";

export const Movie = ({movie}) => {

    return (
        <div >
            <Link to={movie.id.toString()} state={movie}>
                <div>
                    <img src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} alt="movie img"/>
                </div>
                <div >
                    <div ><div>{movie.title}</div></div>
                </div>
            </Link>
        </div>
    )
};