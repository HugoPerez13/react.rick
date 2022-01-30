import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Galeria } from '../Galeria/Galeria';
import "./Characters.css"
import { Pagination } from "../Pagination/Pagination"

export const Characters = () => {

    const Url = "https://rickandmortyapi.com/api/character";

    const [characters, setCharacters] = useState([]);

    const getCharacters = async (newPage = 1) => {

        const res = await axios(Url + "?page=" + newPage)
        setCharacters(res.data.results)

    };

    useEffect(() => {

        getCharacters();

    }, [])

  return (

    <div>

        <Galeria characters={characters}/>

        <Pagination getCharacters={getCharacters}/>

    </div>  

  );
};

