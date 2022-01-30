import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { LocationGaleria } from '../Galeria/LocationGaleria';
import "./Location.css"
import { Pagination } from "../Pagination/Pagination"

export const Location = () => {

    const Url = "https://rickandmortyapi.com/api/location";

    const [locations, setLocation] = useState([]);

    const getLocation = async (newPage = 1) => {

        const res = await axios(Url + "?page=" + newPage)
        setLocation(res.data.results)

    };

    useEffect(() => {

        getLocation();

    }, [])

  return (

    <div>

        <LocationGaleria locations={locations}/>

        <Pagination getLocation={getLocation}/>

    </div>  

  );
};

