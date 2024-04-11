import { useState, useContext} from "react"
import "./TodoForm.css"
import { TodoContext } from "../TodoContext"

function TodoForm() {
    const {setOpenModal, addTodo} = useContext(TodoContext)
    const [newTodo, setNewTodo] = useState("")

    const onSubmit=(e)=>{
        e.preventDefault()
        addTodo(newTodo)
        setOpenModal(false)
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea
                placeholder="Cortar cebolla"
                value={newTodo}
                onChange={(e)=>{
                    setNewTodo(e.target.value)
                }}
            />
            <div className="TodoForm-button--container">
                <button
                    className="TodoForm-button
                TodoForm-button--cancel"
                onClick={()=>{
                    setOpenModal(false)
                }}
                >Cancelar</button>
                <button
                    type="submit"
                    className="TodoForm-button
                TodoForm-button--add"
                >Añadir</button>
            </div>
        </form>
    )
}

export { TodoForm }