import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';
import { CreateTodoButton } from '../CreateTodoButton';

function AppUI({
    loading,
    error,
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
            {loading &&
                <>
                    <TodosLoading />
                    <TodosLoading />
                    <TodosLoading />
                </>}
            {error && <TodosError />}
            {(!loading && searchedTodos.length === 0) && <EmptyTodos />}
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