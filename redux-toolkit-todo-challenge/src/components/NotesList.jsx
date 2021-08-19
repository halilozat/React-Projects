import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteNote } from '../redux/notes/notesSlice'
import './noteList.scss'

function NotesList() {
    const dispatch = useDispatch();
    const items = useSelector(state => state.notes.items)

    const greenItems = items.filter((item) => item.color === "green")
    const blueItems = items.filter((item) => item.color === "blue")
    const yellowItems = items.filter((item) => item.color === "yellow")
    const redItems = items.filter((item) => item.color === "red")

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

            <div className="box" style={{ marginTop: "10px !important" }}>
                {coloredList(greenItems)}
                {coloredList(blueItems)}
                {coloredList(yellowItems)}
                {coloredList(redItems)}
            </div>

        </div>
    )
}

export default NotesList
