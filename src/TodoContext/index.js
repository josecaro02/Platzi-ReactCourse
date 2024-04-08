import React, { useState, createContext } from "react";
import  useLocalStorage  from "./UseLocalStorage";

const TodoContext = createContext();

function TodoProvider({ children }) {
  const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage('TODOS_V1', [])
  const [searchValue, setSearchValue] = useState('');

  const completedTodos = todos.filter((value) => value.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((value) => value.text.toUpperCase().includes(searchValue.toUpperCase()))

  const clickedTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    saveTodos(newTodos);
  }
  const deleteTodo = (indexClick) => {
    const newTodos = [...todos]
    newTodos.splice(indexClick, 1);
    saveTodos(newTodos);
  }

  return (
    <TodoContext.Provider value={{
      loading,
      error,
      completedTodos,
      totalTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      clickedTodo,
      deleteTodo,
    }}>
      {children}
    </TodoContext.Provider>


  )
}
export { TodoContext, TodoProvider };