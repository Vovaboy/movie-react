import React from 'react';
import css from './user.module.css'

export const User = () => {
    return (
        <div>
            <div>
                <img className={css.img} src="https://ad.mains.life/img/default-user.png" alt="user img"/>
            </div>
            <div className={css.userName}>Movie</div>
        </div>
    );
};