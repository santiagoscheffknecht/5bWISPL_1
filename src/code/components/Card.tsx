import React from 'react';
import './Card.css';

const Card = () => {
    return (
        <div className="card">
            <img src="https://example.com/image1.jpg" alt="Person Name" className="card-image" />
            <div className="card-content">
                <h2 className="card-name">Susi Quattro</h2>
                <p className="card-description">
                    Lorem ipsum dolor sit amet consectetur. Quis vitae ut quam urna ut turpis.
                    Nunc imperdiet augue dis suspendisse.
                </p>
            </div>
        </div>
    );
};

export default Card;
