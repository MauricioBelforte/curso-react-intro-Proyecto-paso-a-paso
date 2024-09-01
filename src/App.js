import { TodoCounter } from './TodoCounter'
import { TodoSearch } from './TodoSearch'
import { TodoList } from './TodoList'


import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react'

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar curso de React.js', completed: false },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'Completar algo mas', completed: false },
  { text: 'Usar estados derivados', completed: true }

]

function App() {
  // Aca dentro del array estamos asignando a todos un estado inicial que proviene de defaultTodos
  const [todos, setTodos] = React.useState(defaultTodos);

  // Declaramos una variable de estado llamada "searchValue" y una función para actualizarla "setSearchValue"
  // useState('') inicializa el estado "searchValue" con el valor string vacio '' ya que los usuarios en un principio no ven nada
  // const [searchValue, setSearchValue] desestructura el array devuelto por useState en dos variables:
  // searchValue: contiene el valor actual del estado (inicialmente '').
  // setSearchValue: es una función que se usa para actualizar el valor de searchValue.
  const [searchValue, setSearchValue] = React.useState('');


  //  Estados derivados
  // Le vamos a mandar el estado a TodoCounter

  const completedTodos = todos.filter(todo => todo.completed).length;  // Devuelve la cantidade de elementos que son true
  const totalTodos = todos.length; // El total de elementos items

  console.log("Aca esta el searchValue " + searchValue);
  /* Esto se le podria llamar Renderizado del Input */
  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />

      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
        ))}

      </TodoList>

      <CreateTodoButton />

    </>
  );
}





export default App;
