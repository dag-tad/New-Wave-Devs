import React from 'react';

import './style.css';

interface IHouseCardProps {
    id: string;
    name: string;
    animal: string;
    founder: string;
    startColor: string
    endColor: string
}

const HouseCard: React.FC<IHouseCardProps> = (props) => {
    const { id, name, animal, founder, startColor, endColor } = props;

    

    return (
        <div key={id} className='card__container'>
            <div className='card__header'>
                <div className='card__headerName'>{name}</div>
                <div className='card__headerAnimal'>{animal}</div>
            </div>
            <div className='card__progressBar' style={{
                background: `linear-gradient(to right, ${startColor}, ${endColor})`
            }}></div>
            <div className='card__footer'>
                <div className='card__founderText'>Founder: </div>
                <div className='card__founderName'>{founder}</div>
            </div>
        </div>
    )
}

export default HouseCard;