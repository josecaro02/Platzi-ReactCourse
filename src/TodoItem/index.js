import './TodoItem.css';
import {CompleteIcon} from '../TodoIcon/CompleteIcon.js';
import {DeleteIcon} from '../TodoIcon/DeleteIcon.js';

function TodoItem({text, completed, onClickedTodo, onDeleteTodo}){
    return (
      <li className="TodoItem">
        <CompleteIcon completed={completed} onComplete={onClickedTodo}/>
        <DeleteIcon onDelete={onDeleteTodo}/>
        <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>{text}</p>
      </li>
    )
}

export  {TodoItem}