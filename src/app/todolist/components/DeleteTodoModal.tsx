import React from 'react'
import Notification, { type } from '../../shared/toast/Toast'

interface Props {
    todoId: string
    setDeleteModal: Function
    handleDeleteTodo: Function
}

const DeleteTodoModal = ({todoId, setDeleteModal, handleDeleteTodo} : Props) : JSX.Element => {

    const deleteTodoFunc = () => {
        handleDeleteTodo(todoId)
        setDeleteModal(false)
        Notification(type.success, "Todo eliminado correctamente!")
    }

    return (
        <div>
            <p> ¿Esta seguro de eliminar el Todo? </p>
            <div>
                <button onClick={() => setDeleteModal(false)} > Cancelar </button>
                <button onClick={deleteTodoFunc} > Eliminar </button>
            </div>
        </div>
    )
}

export default DeleteTodoModal
