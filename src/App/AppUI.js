import React, { useContext } from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';

function AppUI() {
    const { loading,
        error,
        searchedTodos,
        clickedTodo,
        deleteTodo,
        openModal,
        setOpenModal
    } = useContext(TodoContext)
    return (
        <>
            <TodoCounter />
            <TodoSearch />

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

            <CreateTodoButton />

            {openModal &&
                <Modal>
                    <div>Hola desde mi modal</div>
                </Modal>
            }

        </>
    )
}

export default AppUI;