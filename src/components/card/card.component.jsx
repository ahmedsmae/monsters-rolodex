import React from 'react';
import './card.styles.css';

export const Card = ({ monster }) => {
    return (
        <div className='card-container'>
            <img
                src={`https://robohash.org/${monster.id}?set=set2&size=265x265`}
                alt='monster'
            />
            <h2>{monster.name}</h2>
            <p>{monster.email}</p>
        </div>
    );
};
