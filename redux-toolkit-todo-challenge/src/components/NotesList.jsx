import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteNote, selectNotes, selectColor } from '../redux/notes/notesSlice'
import './noteList.scss'

function NotesList() {
    const dispatch = useDispatch();
    const items = useSelector(selectNotes)
    // const filterText = useSelector(state => state.notes.filterText)
    // const filteredNotes = items.filter((item) => item.notes.includes(filterText))

    const [show, setShow] = useState(false)

    const greenItems = items.filter(selectColor === "green")
    const blueItems = items.filter(selectColor === "blue")
    const yellowItems = items.filter(selectColor === "yellow")
    const redItems = items.filter(selectColor === "red")

    
    const handleDelete = (id) => {
        if (window.confirm('Are you sure?')) {
            dispatch(deleteNote(id))
        }
    }

    const mapFunction = (item) => (
        <div key={item.id} className="leaderboard__profile" style={{ backgroundColor: item.color }}>
            <button
                onClick={() => handleDelete(item.id)}
                className="delete"
            >X</button>
            <span className="leaderboard__value">{item.title}</span>
        </div>
    )

    const coloredList = (e) => (
        <div className="listBox">
            <div className="leaderboard">
                <div className="leaderboard__profiles">
                    {e.map(mapFunction)}
                </div>
            </div>
        </div>
    )

    return (
        <div>

            {coloredList(items)}

            <br />
            <br />
            <button className="showButton" onClick={() => setShow(!show)}><b>Show Filters</b></button>
            <br />
            <br />
            {
                show &&
                <div className="box" style={{ marginTop: "10px !important" }}>
                    {coloredList(greenItems)}
                    {coloredList(blueItems)}
                    {coloredList(yellowItems)}
                    {coloredList(redItems)}
                </div>
            }

        </div>
    )
}

export default NotesList
