import React from 'react'
import TodoListItem from './TodoListItem'

interface Props {
    todoList: [],
    handleDeleteTodo: Function
}

const TodoListContainer = ({todoList, handleDeleteTodo} : Props) : JSX.Element => {
    return (
        <ul className="list_todo">
            { 
                todoList.map((todo : any, index: number) => (
                    <TodoListItem key={index} todo={todo} handleDeleteTodo={handleDeleteTodo} />
                ))
            }
        </ul>
    )
}

export default TodoListContainer
