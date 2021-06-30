import React from 'react';
import Github from '../../assets/github.svg';
import Linkedin from '../../assets/linkedin.svg';
import Instagram from '../../assets/instagram.svg';
import Autora from '../../assets/LarissaAndrade.png';

import './style.css';


const Footer = () => {
    return(
        <div className="footer">
            <div className="media">
                <a href="https://github.com/larigit" target="_blank" rel="noreferrer">
                    <img src={Github} alt='Imagem' />
                </a>
                <a href="https://www.linkedin.com/in/larissandradee/" target="_blank" rel="noreferrer">
                    <img src={Linkedin} alt='Imagem' />
                </a>
                <a href="https://www.instagram.com/larissafsandrade/" target="_blank" rel="noreferrer">
                    <img src={Instagram} alt='Imagem' />
                </a>
            </div>
            <div className="autora">
                <img src={Autora} alt='Imagem' />
                <p>Aplicação desenvolvida por Larissa Andrade, 23 anos.</p>
            </div>
            
        </div>
    )
}

export default Footer;