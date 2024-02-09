import React, {useState} from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import useLocalStorage from './UseLocalStorage';
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
    <React.Fragment>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch  searchValue={searchValue} setSearchValue={setSearchValue}/>
      <TodoList>
        {
          searchedTodos.map((value, index)=>{
            return <TodoItem
             key={index} text={value.text}
             completed={value.completed} 
             onClickedTodo={()=>{clickedTodo(index)}}
             onDeleteTodo={()=>{deleteTodo(index)}}/>
          })
        }
      </TodoList>
      <CreateTodoButton/>
    </React.Fragment>
  );
}


export default App;
