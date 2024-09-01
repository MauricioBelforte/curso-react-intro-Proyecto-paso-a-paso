import React from 'react'
import './TodoSearch.css';

function TodoSearch({searchValue,setSearchValue}) {

  return (
    <input
      placeholder="Cortar cebolla"
      className="TodoSearch"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
        }

      }
    />
  );
}


//- Explicacion de Copilot:
//- El valor del input está vinculado a searchValue.  value={searchValue} 
//- Usas el evento onChange para actualizar searchValue cada vez que el usuario escribe en el input. 
//- onChange={(event) => {setSearchValue(event.target.value);}


export { TodoSearch };