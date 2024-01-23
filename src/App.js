import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';

const defaultTodos = [
  {text: 'Dia de san valentin', completed: true},
  {text: 'Cumplir mes', completed: false},
  {text: 'Cita pasaporte', completed: true}
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter completed={15} total={20} />
      <TodoSearch />
      <TodoList>
        {
          defaultTodos.map((value, index)=>{
            return <TodoItem key={index} text={value.text} completed={value.completed}/>
          })
        }
      </TodoList>
      <CreateTodoButton/>
    </React.Fragment>
  );
}


export default App;
