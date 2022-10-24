import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Movie} from "../Movie/Movie";
import {movieActions} from "../../redux/slices";

import {useSearchParams} from "react-router-dom";
import css from "./movieList.module.css"
import {SearchBar} from "../SearchBar/SearchBar";
import {Genres} from "../Genres/Genres";

export const MoviesList = () => {
    const {movies: {results}} = useSelector(state => state.movies)
    let dispatch = useDispatch();
    let [query, setQuery] = useSearchParams({page: '1'});


    const page = query.get('page');


    useEffect(() => {
        dispatch(movieActions.getAllMovies({page}))
    }, [page, dispatch]);


    const prevPage = () => {
        const prev = +page - 1;
        if (prev >= 1) {
            setQuery({page: `${prev}`})
        }
    }

    const nextPage = () => {
        const next = +page + 1;
        if (next <= 500) {
            setQuery({page: `${next}`})
        }
    }


    return (
        <div>
            <SearchBar/>
            <div className={css.wrap}>{results && results.map((movie) => <Movie key={movie.id} movie={movie}/>)}</div>
            <div >
                <button onClick={prevPage}>Prev</button>
                <button onClick={nextPage}>Next</button>


            </div>

        </div>
    );
};