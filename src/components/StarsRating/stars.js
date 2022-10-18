import React, {useState} from 'react';
import ReactStars from "react-stars/dist/react-stars";

const Stars = () => {

    const [stars, setStars] = useState(1);

    var example = {
        size: 50,
        value: stars,
        onChange: (newValue) => {
            setStars(newValue);
        }
    };

    console.log(example.value);

    return (
        <div>
            <h1>react-rating-stars-component</h1>
            <button onClick={() => setStars(1)}>Set To 5</button>
            <ReactStars {...example} />
        </div>
    );
};

export {Stars}