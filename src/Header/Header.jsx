import React from 'react';
import { NavLink } from "react-router-dom"
import  "./Header.css";


export const Header = () => {
  return (
    <nav className="nav123">

        <NavLink to="/" activeclassname={"active"}>Home</NavLink>
        
        <NavLink to="/characters" activeclassname={"active"}>Characters</NavLink>

        <NavLink to="/location" activeclassname={"active"}>Location</NavLink>
    
    </nav>
    );
};