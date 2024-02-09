import React from 'react'
import { TodoIcon } from './'

const DeleteIcon = ({onDelete}) => {
    return (
        <TodoIcon
            type="delete"
            color="grey"
            onClick={onDelete}
        />
    )
}

export { DeleteIcon }