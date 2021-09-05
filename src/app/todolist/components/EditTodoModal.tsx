import React, { FormEvent, useState } from 'react'
import Notification, { type } from '../../shared/toast/Toast'

interface Props {
    todo: {
        id: string,
        text: string
    },
    setEditModal: Function,
    handleEditTodo: Function
}

const EditTodoModal = ({todo, setEditModal ,handleEditTodo}: Props) : JSX.Element => {

    const [textTodo, setTextTodo] = useState(todo.text)

    const handleSubmitEdit = (e: FormEvent) => {
        e.preventDefault()
        if (textTodo.trim() === '') {
            return Notification(type.warning, "No agregar espacios en blanco!")
        }
        const updatedTodo = {
            id: todo.id,
            text: textTodo,
        }
        handleEditTodo(updatedTodo)
        setEditModal(false)
        Notification(type.success, "Tarea editada correctamente!")
    }

    return (
        <form onSubmit={handleSubmitEdit}>
            <div>
                <label htmlFor="">
                    <p>Texto todo:</p>
                    <input type="text" value={textTodo} onChange={(e) => setTextTodo(e.target.value)} required autoComplete="off" />
                </label>
            </div>
            <div>
                <button type="button" onClick={() => setEditModal(false)}> Cancelar </button>
                <button type="submit"> Guardar </button>
            </div>
        </form>
    )
}

export default EditTodoModal
