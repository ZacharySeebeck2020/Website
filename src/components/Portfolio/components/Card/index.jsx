import React from 'react';
import './index.scss';

function Card({backgroundImage, title, children}) {
    return (
        <div class="flip-card">
            <div class="flip-card-inner">
            <div class="flip-card-front" style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover'}}>
            </div>
            <div class="flip-card-back">
                <h3>{title}</h3>
                <p>{children}</p>
            </div>
            </div>
        </div> 
    );
}

export default Card;