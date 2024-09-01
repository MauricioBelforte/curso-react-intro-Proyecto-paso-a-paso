import React from 'react'
import './TodoSearch.css';

function TodoSearch() {
  // Declaramos una variable de estado llamada "searchValue" y una función para actualizarla "setSearchValue"
  // useState('') inicializa el estado "searchValue" con el valor string vacio '' ya que los usuarios en un principio no ven nada
  // const [searchValue, setSearchValue] desestructura el array devuelto por useState en dos variables:
  // searchValue: contiene el valor actual del estado (inicialmente '').
  // setSearchValue: es una función que se usa para actualizar el valor de searchValue.
  const [searchValue, setSearchValue] = React.useState('');

  console.log("Aca esta el searchValue " + searchValue);
  /* Esto se le podria llamar Renderizado del Input */
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