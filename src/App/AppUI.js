import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';

function AppUI({
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    clickedTodo,
    deleteTodo
}) {
    return (
        <React.Fragment>
            <TodoCounter completed={completedTodos} total={totalTodos} />
            <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
            <TodoList>
                {
                    searchedTodos.map((value, index) => {
                        return <TodoItem
                            key={index} text={value.text}
                            completed={value.completed}
                            onClickedTodo={() => { clickedTodo(index) }}
                            onDeleteTodo={() => { deleteTodo(index) }} />
                    })
                }
            </TodoList>
            <CreateTodoButton />
        </React.Fragment>
    )
}

export default AppUI;