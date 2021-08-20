import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setFilterText } from '../redux/notes/notesSlice'

function Search() {

    const [search, setSearch] = useState('')
    const dispatch = useDispatch()

    const handleChange = (e) => {
        setSearch(e.target.value)
        dispatch(setFilterText(search))
    }

    return (
        <div>
            <input
                type="text"
                className="search"
                placeholder="   Search..."
                onChange={handleChange}
            />
        </div>
    )
}

export default Search
