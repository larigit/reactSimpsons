import React from 'react';
import Img from '../../assets/image.svg';
import './style.css';


const Banner = () => {
    return(
        <div className='main'>
            <div>
                <h1>App Divertido</h1>
                <p>Site feito em React para treinar react-router-dom e axios</p>
            </div>
            <img src={Img} alt='Imagem' />
        </div>
    )
}

export default Banner;
