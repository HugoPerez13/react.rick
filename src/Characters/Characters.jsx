import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Galeria } from '../Galeria/Galeria';
import "./Characters.css";
import { Pagination } from "../Pagination/Pagination";
import  Buscador  from "../Buscador/Buscador";

export const Characters = () => {

    const Url = "https://rickandmortyapi.com/api/character";

    const [characters, setCharacters] = useState([]);
    const [texto, setTexto] = useState("");

    const getCharacters = async (newPage = 1) => {

        const res = await axios(Url + "?page=" + newPage)
        setCharacters(res.data.results)

    };

    useEffect(() => {

        getCharacters();

    }, [])
    const charactersFilter = characters.filter((characters) =>
    characters.name.toLowerCase().includes(texto.toLowerCase())
    );
  return (


    <div className="fondo">

    <Buscador texto={texto} setTexto={setTexto}/>

        <Galeria characters={charactersFilter}/>

        <Pagination getCharacters={getCharacters}/>

    </div>  

  );
};

