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

    return (
        <div>
            <div className="listBox">
                <div className="leaderboard">
                    <div className="leaderboard__profiles">
                        {items.map((item) => (
                            <div key={item.id} className="leaderboard__profile" style={{ backgroundColor: item.color }}>
                                <button
                                    onClick={() => handleDelete(item.id)}
                                    className="delete"
                                >X</button>
                                <span className="leaderboard__value">{item.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            <div className="box" style={{ marginTop: "10px !important" }}>
                <div className="listBox">
                    <div className="leaderboard">
                        <div className="leaderboard__profiles">
                            {greenItems.map((item) => (
                                <div key={item.id} className="leaderboard__profile" style={{ backgroundColor: item.color }}>
                                    <button
                                        onClick={() => handleDelete(item.id)}
                                        className="delete"
                                    >X</button>
                                    <span className="leaderboard__value">{item.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="listBox">
                    <div className="leaderboard">
                        <div className="leaderboard__profiles">
                            {blueItems.map((item) => (
                                <div key={item.id} className="leaderboard__profile" style={{ backgroundColor: item.color }}>
                                    <button
                                        onClick={() => handleDelete(item.id)}
                                        className="delete"
                                    >X</button>
                                    <span className="leaderboard__value">{item.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="listBox">
                    <div className="leaderboard">
                        <div className="leaderboard__profiles">
                            {yellowItems.map((item) => (
                                <div key={item.id} className="leaderboard__profile" style={{ backgroundColor: item.color }}>
                                    <button
                                    onClick={() => handleDelete(item.id)}
                                    className="delete"
                                >X</button>
                                    <span className="leaderboard__value">{item.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="listBox">
                    <div className="leaderboard">
                        <div className="leaderboard__profiles">
                            {redItems.map((item) => (
                                <div key={item.id} className="leaderboard__profile" style={{ backgroundColor: item.color }}>
                                    <button
                                    onClick={() => handleDelete(item.id)}
                                    className="delete"
                                >X</button>
                                    <span className="leaderboard__value">{item.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotesList
