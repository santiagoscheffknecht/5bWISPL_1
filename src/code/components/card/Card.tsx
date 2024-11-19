import React from 'react';
import './Card.css';

const Card = ({ name, description, image }: { name: string; description: string; image: string }) => {
    return (
        <div className="card">
            <img src={image} alt={name} className="card-image" />
            <div className="card-content">
                <h2 className="card-name">{name}</h2>
                <p className="card-description">{description}</p>
            </div>
        </div>
    );
};

export default Card;
