import React from 'react';
import {useLocation} from "react-router-dom";

import css from './movieDetails.module.css';


export const MovieDetails = () => {
    let {state} = useLocation();
    return (
        <div className={css.movie}>
            <div className={css.details}>
                <div className={css.imgTitle}>
                    <div className={css.title}>{state.title}</div>
                    <div><img src={`https://image.tmdb.org/t/p/w200${state.poster_path}`} alt="movie img"/></div>

                </div>
                <div className={css.container}>
                    <div className={css.info}>Date: {state.release_date}</div>
                    <hr/>
                    <div className={css.info}>Genre: </div>
                    <hr/>
                    <div className={css.info}>Original language: {state.original_language}</div>
                    <hr/>
                    <div className={css.info}>Overview: {state.overview}</div>
                    <hr/>
                </div>
            </div>
        </div>
    );
};