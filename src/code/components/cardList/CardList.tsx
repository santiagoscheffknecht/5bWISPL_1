import React, { useEffect, useState } from 'react';
import Card from '../card/Card';
import './CardList.css';


export const CardList = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('../data.json')
            .then((response) => response.json())
            .then((data) => setCards(data));
    }, []);

    return (
        <div className="card-list">
            {cards.map((card) => (
                <Card
                    key={card.id}
                    name={card.name}
                    description={card.description}
                    image={card.image}
                />
            ))}
        </div>
    );
}
