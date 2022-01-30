import React, { useState } from 'react';
import "./Pagination.css"

export const Pagination = ({getCharacters, getLocation}) => {

    const [page, setPage] = useState(1);

    function changePage(page) {

        setPage(page)
        getCharacters(page)
        getLocation(page)

    }

  return (
  <div className='buttons'>

    {page > 1 ? <button onClick={() => changePage(page - 1)}>◀</button> : <button>◀</button>}

    <p>{page}</p>

    {page < 42 ? <button onClick={() => changePage(page + 1)}>▶</button> : <button>▶</button>}
    

  </div>
  );
};