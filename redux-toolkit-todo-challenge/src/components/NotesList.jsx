import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteNote } from '../redux/notes/notesSlice'

function NotesList() {
    const dispatch = useDispatch();
    const items = useSelector(state => state.notes.items)

    const handleDelete = (id) => {
        if (window.confirm('Are you sure?')) {
            dispatch(deleteNote(id))
        }
    }

    return (
        <div>
            <div className="greenBox" style={{ backgroundColor: "white", color: "black" }}>
                <ul style={{ listStyleType: "none !important" }}>
                    {

                        items.map((item) => (
                            item.color === ""
                                ? <div key={item.id}>
                                    <button
                                        onClick={() => handleDelete(item.id)}
                                        className="delete"
                                    >X</button>
                                    {item.title}
                                </div>
                                : null
                        ))
                    }
                </ul>
            </div>

            <div className="box" style={{ marginTop: "10px !important" }}>

                <div className="greenBox" style={{ backgroundColor: "#2ecc71" }}>
                    {
                        items.map((item) => (
                            item.color === "green"
                                ? <div key={item.id}><button onClick={() => handleDelete(item.id)} className="delete">X</button> {item.title}</div>
                                : null
                        ))

                    }
                </div>

                <div className="greenBox" style={{ backgroundColor: "#3498db" }}>
                    {
                        items.map((item) => (
                            item.color === "blue"
                                ? <div key={item.id}><button onClick={() => handleDelete(item.id)} className="delete">X</button> {item.title}</div>
                                : null
                        ))

                    }
                </div>
                <div className="greenBox" style={{ backgroundColor: "#f1c40f" }}>
                    {
                        items.map((item) => (
                            item.color === "yellow"
                                ? <div key={item.id}><button onClick={() => handleDelete(item.id)} className="delete">X</button> {item.title}</div>
                                : null
                        ))

                    }
                </div>
                <div className="greenBox" style={{ backgroundColor: "#e74c3c" }}>
                    {
                        items.map((item) => (
                            item.color === "red"
                                ? <div key={item.id}><button onClick={() => handleDelete(item.id)} className="delete">X</button> {item.title}</div>
                                : null
                        ))

                    }
                </div>
            </div>
        </div>
    )
}

export default NotesList
