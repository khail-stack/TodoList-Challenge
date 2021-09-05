import React from 'react'
import TodoListItem from './TodoListItem'

interface Props {
    todoList: [],
    handleDeleteTodo: Function,
    handleEditTodo: Function
}

const TodoListContainer = ({todoList, handleDeleteTodo, handleEditTodo} : Props) : JSX.Element => {
    return (
        <ul className="list_todo">
            { 
                todoList.length ? todoList.map((todo : any, index: number) => (
                    <TodoListItem key={index} todo={todo} handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo} />
                )) 
                : 
                <li className="list_todo--item">
                    <p className="noitems"><span>No hay tareas</span></p>
                    <hr />
                </li>
            }
        </ul>
    )
}

export default TodoListContainer
