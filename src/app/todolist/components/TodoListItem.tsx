import React, { useState } from 'react'
import ContainerModal from '../../shared/modal/ContainerModal'
import edit from '../static/edit.svg'
import trash from '../static/trash.svg'
import DeleteTodoModal from './DeleteTodoModal'
import EditTodoModal from './EditTodoModal'

interface Props {
    todo: {
        id: string,
        text: string
    },
    handleDeleteTodo: Function,
    handleEditTodo: Function
}

const TodoListItem = ({todo, handleDeleteTodo, handleEditTodo} : Props) : JSX.Element => {

    const [editModal, setEditModal] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)

    return (
        <li className="list_todo--item">
            <p>
                <span>{todo.text}</span>
                <span className="noselect">
                    <img src={edit} alt="edit" onClick={() => setEditModal(true)} />
                    <img src={trash} alt="delete" onClick={() => setDeleteModal(true)} />
                </span>
            </p>
            <hr />
            <ContainerModal showModal={deleteModal} setShowModal={setDeleteModal} title="Eliminar Todo">
                <DeleteTodoModal todoId={todo.id} setDeleteModal={setDeleteModal}  handleDeleteTodo={handleDeleteTodo} />
            </ContainerModal>
            
            <ContainerModal showModal={editModal} setShowModal={setEditModal} title="Editar Todo">
                <EditTodoModal todo={todo} setEditModal={setEditModal} handleEditTodo={handleEditTodo} />
            </ContainerModal>
        </li>    
    )
}

export default TodoListItem
