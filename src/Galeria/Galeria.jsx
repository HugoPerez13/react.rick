import React from 'react';
import "./Galeria.css"

export const Galeria = ({characters}) => {
  return (
  
    <div className='album'>

    {characters.map((character) => {

        return(

            <div className='carta' key={character.id}>
                <h1>{character.name}</h1>
                <img src={character.image} alt={character.name} />
                <p>{character.status}</p>
                <p>{character.species}</p>
                <p>{character.gender}</p>
            </div>

        );
    
    })}

  </div>);
};
