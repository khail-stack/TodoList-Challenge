import React from 'react'
import plusCircle from '../static/plus-circle.svg'
import edit from '../static/edit.svg'
import trash from '../static/trash.svg'
import search from '../static/search_small.svg'
import '../sass/todolistpage.sass'

const TodoList = () => {
    return (
        <div className="todo_list_container">
            <div className="todo_list_content">
                <form className="todo_input_form">
                    <input placeholder="Agrega el tema a revisar ..." type="text" />
                    <button> <img src={plusCircle} alt="plus-circle"></img> Add</button>
                </form>
            
                <div className="card_container">
                    <div className="card_container--head">
                        <h3>Todo List</h3>
                        <div className="search_container">
                            <input type="text" placeholder="Buscar..." />
                            <img src={search} alt="search" />
                        </div>
                    </div>
                    <hr />
                    <div className="card_container--body">
                        <ul className="list_todo">

                            <li className="list_todo--item">

                                <p>

                                    <span>
                                        Pug JS - Inducción Extends Block
                                    </span>

                                    <span className="noselect">
                                        <img src={edit} alt="edit" onClick={() => console.log('editar')}/>
                                        <img src={trash} alt="delete" onClick={() => console.log('eliminar')}/>
                                    </span>
                                    
                                </p>

                                <hr />

                            </li>
                            

                            <li className="list_todo--item">

                                <p>

                                    <span>
                                        Stylus JS
                                    </span>

                                    <span className="noselect">
                                        <img src={edit} alt="edit" />
                                        <img src={trash} alt="edit" />
                                    </span>

                                </p>

                                <hr />


                            </li>

                            <li className="list_todo--item">

                                <p>

                                    <span>
                                        React JS - Inducción Props y States
                                    </span>
                                    
                                    <span className="noselect">
                                        <img src={edit} alt="edit" />
                                        <img src={trash} alt="edit" />
                                    </span>

                                </p>

                                <hr />

                            </li>

                            <li className="list_todo--item">

                                <p>

                                    <span>
                                        Vue JS - Inducción LifeCycle
                                    </span>
                                    
                                    <span className="noselect">
                                        <img src={edit} alt="edit" />
                                        <img src={trash} alt="edit" />
                                    </span>

                                </p>

                                <hr />

                                </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoList
