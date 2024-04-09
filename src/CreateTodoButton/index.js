import './CreateTodoButton.css'
import { useContext } from 'react'
import { TodoContext } from '../TodoContext'

function CreateTodoButton(){
    const {setOpenModal} = useContext(TodoContext)
    return (
        <button className='CreateTodoButton'
        onClick={()=>{setOpenModal(state => !state)
        console.log("hola");}}>+</button>
    )
}

export {CreateTodoButton}