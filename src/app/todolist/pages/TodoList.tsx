import React, { useEffect, useReducer, useState } from 'react'
import '../sass/todolistpage.sass'
import {todoListReducer} from '../services/todoListReducer'
import TodoListContainer from '../components/TodoListContainer'
import TodoAddForm from '../components/TodoAddForm'
import TodoSearchHead from '../components/TodoSearchHead'

const init = () => {
    return JSON.parse(localStorage.getItem('todoListChallenge') || '[]') || [];
}

const TodoList = (): JSX.Element => {
    
    const [state, dispatch] = useReducer(todoListReducer, [], init)

    const [dataSearch, setDataSearch] = useState<any>([])

    useEffect(() => {
        localStorage.setItem('todoListChallenge', JSON.stringify(state))
    }, [state])

    useEffect(() => {
        setDataSearch(state)
    }, [state])

    const handleDeleteTodo = (id : string) => {
        dispatch({
            type: 'deleteTodo',
            payload: id
        })
    }

    const handleEditTodo = (updatedTodo : Object) => {
        dispatch({
            type: 'updateTodo',
            payload: updatedTodo
        })
    }

    return (
        <div className="todo_list_container">
            <div className="todo_list_content">
                <TodoAddForm dispatchAddTodo={dispatch} />
                <div className="card_container">
                    <div className="card_container--head">
                        <TodoSearchHead initialState={state} setDataSearch={setDataSearch} />
                    </div>
                    <hr />
                    <div className="card_container--body">
                        <TodoListContainer todoList={dataSearch} handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo}/>
                    </div>
                </div>
                <p>Postulante: Khail Mogollon</p>
            </div>
        </div>
    )
}

export default TodoList
