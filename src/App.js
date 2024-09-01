import { TodoCounter } from './TodoCounter'
import { TodoSearch } from './TodoSearch'
import { TodoList } from './TodoList'
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react'
import { CompleteIcon } from "./CompleteIcon";
import { DeleteIcon } from "./DeleteIcon";


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

  const searchedTodos = todos.filter( 
    (todo) => {
    const todoText = todo.text.toLocaleLowerCase(); // Este es el texto de cada item
    const searchText = searchValue.toLocaleLowerCase(); // Este es el texto que ingresa el usuario
    
    return todoText.includes(searchText)} 
  )

  // Le vamos a mandar el estado a TodoCounter

  const completedTodos = todos.filter(todo => todo.completed).length;  // Devuelve la cantidade de elementos que son true
  const totalTodos = todos.length; // El total de elementos items


  const completeTodo = (text) => {
    const newTodos = [...todos];  //Tenemos una copia del estado del array todos
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text    // Aca vemos si cada elemento del arreglo newTodos es igual al texto que viene como parametro
    );
    newTodos[todoIndex].completed = true  ; // Queremos cambiarle la propiedad completed a true al elemento que tenemos en el indice
    setTodos(newTodos);  // Seteamos con el nuevo array

  };


  const deleteTodo = (text) => {
    const newTodos = [...todos];  //Tenemos una copia del estado del array todos
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text    // Aca vemos si cada elemento del arreglo newTodos es igual al texto que viene como parametro
    );

    newTodos.splice(todoIndex,1); // Eliminamos el elemento en ese indice y modifica el array original newTodos
    
    setTodos(newTodos); // Seteamos con el nuevo array

  };


  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />

      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed} onComplete={() => completeTodo(todo.text) } onDelete={() => deleteTodo(todo.text)}/>
        ))}

      </TodoList>

      <CreateTodoButton />

    </>
  );
}





export default App;
