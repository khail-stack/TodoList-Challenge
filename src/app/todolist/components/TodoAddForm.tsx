import React, { FormEvent, useState } from 'react'
import Notification, { type } from '../../shared/toast/Toast'
import plusCircle from '../static/plus-circle.svg'

interface Props {
    dispatchAddTodo: Function
}

const TodoAddForm = ({dispatchAddTodo} : Props) : JSX.Element => {

    const [textTodo, setTextTodo] = useState('')

    const handleSubmitTodo = (e : FormEvent) => {

        e.preventDefault()

        if (textTodo.trim() === '') {
            return Notification(type.warning, "No agregar espacios en blanco!")
        }

        const newTodo = {
            id: new Date().getTime(),
            text: textTodo,
        }

        dispatchAddTodo({
            type: 'addTodo',
            payload: newTodo 
        })

        setTextTodo('')

        Notification(type.success, "Nueva tarea agregada!")

    }

    return (
        <form onSubmit={handleSubmitTodo} className="todo_input_form">
            <input placeholder="Agrega el tema a revisar ..." type="text" name="textTodo" autoComplete="off" value={textTodo} onChange={(e) => setTextTodo(e.target.value)} required />
            <button type="submit"> <img src={plusCircle} alt="plus-circle"></img> Add</button>
        </form>
    )
}

export default TodoAddForm
