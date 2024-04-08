import './TodoCounter.css'
import { useContext } from 'react';
import { TodoContext } from '../TodoContext';

function TodoCounter({ total, completed }) {
  const {completedTodos, totalTodos} = useContext(TodoContext)
  return (
    <h1 className='TodoCounter'>
      Has completado <span>{completedTodos} </span>
      de <span>{totalTodos}</span> TODOS</h1>
  )
}

export { TodoCounter };