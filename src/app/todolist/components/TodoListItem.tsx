import React from 'react'
import edit from '../static/edit.svg'
import trash from '../static/trash.svg'

interface Props {
    todo: {
        id: string,
        text: string
    }
}

const TodoListItem = ({todo} : Props) : JSX.Element => {
    return (
        <li className="list_todo--item">
            <p>
                <span>{todo.text}</span>
                <span className="noselect">
                    <img src={edit} alt="edit" onClick={() => console.log('editar')}/>
                    <img src={trash} alt="delete" onClick={() => console.log('eliminar')}/>
                </span>
            </p>
            <hr />
        </li>    
    )
}

export default TodoListItem
