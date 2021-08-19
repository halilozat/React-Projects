import React from 'react'
import AddForm from './AddForm'
import NotesList from './NotesList'
import './textArea.scss'

function NotesArea() {
    return (
        <>
            <AddForm />

            <NotesList />
        </>
    )
}

export default NotesArea;
