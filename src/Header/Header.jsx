import React from 'react';
import { NavLink } from "react-router-dom"


export const Header = () => {
  return (
    <nav>

        <NavLink to="/" activeclassname={"active"}>Home</NavLink>
        <NavLink to="/characters" activeclassname={"active"}>Characters</NavLink>
        <NavLink to="/location" activeclassname={"active"}>Location</NavLink>
    
    </nav>
    );
};