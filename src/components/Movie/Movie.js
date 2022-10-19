import React from 'react';
import css from './movie.module.css'
import {Link} from "react-router-dom";
import ReactStars from "react-stars/dist/react-stars";


export const Movie = ({movie}) => {

    console.log(movie)
    const ratingChanged = (newRating) => {
        console.log(newRating);
    }
    return (
        <div className={css.movie}>
            <Link to={movie.id.toString()} state={movie}>
                <div className={css.wraper}>

                    <div className={css.info}>
                        <img src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} alt="movie img"/>
                        <div className={css.title}>
                            <div>{movie.title}</div>
                            <div>Data:{movie.release_date}</div>
                            <div>{movie.vote_average}</div>

                            <div>

                                <ReactStars
                                    count={10}
                                    onChange={ratingChanged}
                                    size={24}
                                    activeColor="#DC143C"
                                    value={movie.vote_average}/></div>


                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
};

