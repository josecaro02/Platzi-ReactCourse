import React, {useState} from 'react';
import useLocalStorage from './UseLocalStorage';
import AppUI from './AppUI';
import './App.css';

/* const defaultTodos = [
  {text: 'Dia de san valentin', completed: true},
  {text: 'Cumplir mes', completed: false},
  {text: 'Cita pasaporte', completed: true},
  {text: 'Recoger pasaporte', completed: false},
  {text: 'José', completed: true}
]

localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))
 */

function App() { 
//  let parsedTodos = JSON.parse(localStorage.getItem('TODOS_V1'));
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', [])
  const [searchValue, setSearchValue] = useState('');

  const completedTodos = todos.filter((value)=>value.completed).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter((value)=>value.text.toUpperCase().includes(searchValue.toUpperCase()))

  const clickedTodo = (index)=>{
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    saveTodos(newTodos);
  }
  const deleteTodo = (indexClick)=>{
    const newTodos = [...todos]
    newTodos.splice(indexClick, 1);   
    saveTodos(newTodos);
  }

  return (
    <AppUI
    completedTodos={completedTodos}
    totalTodos={totalTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    clickedTodo={clickedTodo}
    deleteTodo={deleteTodo}/>
  );
}


export default App;
