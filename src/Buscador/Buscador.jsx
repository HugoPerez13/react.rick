import React from "react";
import "./Buscador.css";


const Buscador = ({texto, setTexto}) => {


  const handleInputChange = ({target}) => {
    setTexto(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="buscador">
      <form onSubmit={handleSubmit}>
        <input className="buscador1"
          type="text"
          name="buscar"
          placeholder="buscar..."
          value={texto}
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
};
export default Buscador;