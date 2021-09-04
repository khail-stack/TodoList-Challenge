import React, { useEffect, useReducer } from 'react'
import search from '../static/search_small.svg'
import '../sass/todolistpage.sass'
import {todoListReducer} from '../services/todoListReducer'
import TodoListContainer from '../components/TodoListContainer'
import TodoAddForm from '../components/TodoAddForm'

const init = () => {
    return JSON.parse(localStorage.getItem('todoList') || '[]') || [];
}

const TodoList = (): JSX.Element => {

    const [state, dispatch] = useReducer(todoListReducer, [], init)

    useEffect(() => {
        
        localStorage.setItem('todoList', JSON.stringify(state))
        
    }, [state])

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
                        <TodoListContainer todoList={state} />
                    </div>
                </div>

                <h6>Postulante: Khail Mogollon</h6>

            </div>
        </div>
    )
}

export default TodoList
