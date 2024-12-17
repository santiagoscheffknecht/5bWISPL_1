import cardData from '../Data.json';
import Card from '../card/Card';
import './CardList.css';


const CardList = () => {
    return (
        <div className="card-list">
            {cardData.map((card, index) => (
                <Card
                    key={index}
                    name={card.name}
                    description={card.description}
                    image={card.image}
                />
            ))}
        </div>
    );
};

export default CardList;
