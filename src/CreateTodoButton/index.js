import './CreateTodoButton.css'

function CreateTodoButton(){
    return (
        <button className='CreateTodoButton'
        onClick={()=>{console.log('click al boton jajaj')}}>+</button>
    )
}

export {CreateTodoButton}