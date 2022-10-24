import React, {useState} from 'react';

import {useDispatch} from "react-redux";
import {movieActions} from "../../redux/slices";



const SearchBar = () => {

    const [search, setSearch] = useState('');

    const dispatch = useDispatch();

    const searchMovies = (e) => {
        e.preventDefault()

        if (search) {
            dispatch(movieActions.searchMovie(search))
        } else dispatch(movieActions.getAllMovies())
    }

    const clear = (e) => {
        e.preventDefault()

        if (search) {
            dispatch(movieActions.searchMovie(search))
        } else
            setSearch('');
    }

    return (
        <form onChange={searchMovies}>
            <input type="text"
                        placeholder={"Search..."}
                        onChange={(e) => setSearch(e.target.value)}
                        value={search}
            />
            <button onClick={clear}>Search</button>
        </form>
    );
};
export {SearchBar}