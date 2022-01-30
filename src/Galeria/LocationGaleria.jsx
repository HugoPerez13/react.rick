import React from 'react';
import "./Galeria.css"

export const LocationGaleria = ({locations}) => {
  return (
  
    <div className='album-location'>

    {locations.map((location) => {

        return(

            <div className='carta-location' key={location.id}>
                <h1>{location.name}</h1>
                <img className="planeta" src="https://estaticos.muyinteresante.es/uploads/images/article/5f9083f55bafe8ee5d42e0e8/1-planetas-en-el-espacio.jpg" alt={location.name} />
                <p>{location.type}</p>
                <p>{location.dimension}</p>
                
            </div>

        );
    
    })}

  </div>);
};
