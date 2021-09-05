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
                todoList.map((todo : any, index: number) => (
                    <TodoListItem key={index} todo={todo} handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo} />
                ))
            }
        </ul>
    )
}

export default TodoListContainer
