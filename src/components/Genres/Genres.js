import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import css from './genres.module.css'
import {genreActions} from "../../redux/slices/genre.slice";
import {Genre} from "./Genre";

export const Genres = () => {
    let {genres:{genres}} = useSelector(state => state.genres);
    let dispatch = useDispatch();

    useEffect(()=>{
        dispatch(genreActions.getAllGenres())
    },[dispatch])

    return (
        <div className={css.genres}>
            {genres && genres.map(genre=> <Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};