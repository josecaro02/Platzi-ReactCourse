import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from '../TodoContext';

function AppUI({
}) {
    return (
        <React.Fragment>
            <TodoCounter completed={completedTodos} total={totalTodos} />
            <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
            <TodoContext.Consumer>
                {
                    (
                        {
                            loading,
                            error,
                            searchedTodos,
                            clickedTodo,
                            deleteTodo
                    }) => {
                        <TodoList>
                            {loading &&
                                <>
                                    <TodosLoading />
                                    <TodosLoading />
                                    <TodosLoading />
                                </>}
                            {error && <TodosError />}
                            {(!loading && searchedTodos.length === 0) && <EmptyTodos />}

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
                    }
                }
            </TodoContext.Consumer>

            <CreateTodoButton />
        </React.Fragment>
    )
}

export default AppUI;