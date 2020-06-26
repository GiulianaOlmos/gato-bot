import React from 'react';
import Lottie from 'react-lottie';
import animationCat from './15538-cat-woow.json';
import './Cat.css';

const Cat = ({history}) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationCat,
    };

    function handleonClick(){
        history.push('/chat');
    }

    return(
        <div onClick={handleonClick}
            className="cat-container">
            <Lottie
            options={defaultOptions}
            />
            <label>¡Hola!</label>
            <label>Espero que tu día sea purrrrrfecto</label>
        </div>
    )
}

export default Cat;