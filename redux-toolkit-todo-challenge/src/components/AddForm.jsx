import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNote } from '../redux/notes/notesSlice'
import { nanoid } from '@reduxjs/toolkit'

function AddForm() {
    const [title, setTitle] = useState('')
    const [color, setColor] = useState('')

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addNote({ id: nanoid(), title, color }))
        setTitle('')
    }



    return (
        <form onSubmit={handleSubmit}>
            
            <div className="buttonInText">
                <textarea
                    id="react"
                    name="react"
                    className="textArea"
                    cols="50"
                    rows="10"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button className="inputButton">Submit</button>
            </div>

            <div className="custom-radios" onChange={(e) =>setColor(e.target.value)}>

                <input
                    type="radio"
                    id="color-1"
                    name="color"
                    value="green"
                />
                <label htmlFor="color-1">
                    <span>
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
                    </span>
                </label>


                <input
                    type="radio"
                    id="color-2"
                    name="color"
                    value="blue"
                />
                <label htmlFor="color-2">
                    <span>
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
                    </span>
                </label>



                <input
                    type="radio"
                    id="color-3"
                    name="color"
                    value="yellow"
                />
                <label htmlFor="color-3">
                    <span>
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
                    </span>
                </label>



                <input
                    type="radio"
                    id="color-4"
                    name="color"
                    value="red"
                />
                <label htmlFor="color-4">
                    <span>
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
                    </span>
                </label>

            </div>
           
            <br />
            <br />

        </form>
    )
}

export default AddForm
