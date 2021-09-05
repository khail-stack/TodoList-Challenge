import React, { useState } from 'react'
import searchIcon from '../static/search_small.svg'

interface Props {
    initialState: [],
    setDataSearch: Function
}

const TodoSearchHead = ({initialState, setDataSearch} : Props) : JSX.Element => {    

    const [search, setSearch] = useState('')

    const filterElement = (e: { target: { value: string } }) => {

        const valor = e.target.value.toLowerCase()

        setSearch(e.target.value)

        let search = initialState.filter((todo: any) => {
            if (todo.text?.toLowerCase().includes(valor)) {
                return todo
            } else {
                return null
            }
        })

        setDataSearch(search)

    }

    return (
        <>
            <h3>Todo List</h3>
            <div className="search_container">
                <input type="text" placeholder="Buscar..." value={search} onChange={filterElement}/>
                <img src={searchIcon} alt="search" />
            </div>
        </>
    )
}

export default TodoSearchHead
