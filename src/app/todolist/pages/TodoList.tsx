import React, { useEffect, useReducer } from 'react'
import search from '../static/search_small.svg'
import '../sass/todolistpage.sass'
import {todoListReducer} from '../services/todoListReducer'
import TodoListContainer from '../components/TodoListContainer'
import TodoAddForm from '../components/TodoAddForm'

const init = () => {
    return JSON.parse(localStorage.getItem('todoListChallenge') || '[]') || [];
}

const TodoList = (): JSX.Element => {

    const [state, dispatch] = useReducer(todoListReducer, [], init)

    useEffect(() => {
        localStorage.setItem('todoListChallenge', JSON.stringify(state))
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
                        <h3>Todo List</h3>
                        <div className="search_container">
                            <input type="text" placeholder="Buscar..."  />
                            <img src={search} alt="search" />
                        </div>
                    </div>
                    <hr />
                    <div className="card_container--body">
                        <TodoListContainer todoList={state} handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo}/>
                    </div>
                </div>
                <p>Postulante: Khail Mogollon</p>
            </div>
        </div>
    )
}

export default TodoList
