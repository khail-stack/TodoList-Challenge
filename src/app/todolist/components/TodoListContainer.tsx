import React from 'react'
import TodoListItem from './TodoListItem'

interface Props {
    todoList: []
}

const TodoListContainer = ({todoList} : Props) : JSX.Element => {
    return (
        <ul className="list_todo">
            { 
                todoList.map((todo : any, index: number) => (
                    <TodoListItem key={index} todo={todo} />
                ))
            }
        </ul>
    )
}

export default TodoListContainer
