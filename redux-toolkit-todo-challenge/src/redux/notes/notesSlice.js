import { createSlice } from '@reduxjs/toolkit'

export const notesSlice = createSlice({
    name: 'notes',
    initialState: {
        items: [],
    },
    reducers: {
        addNote: (state, action) => {
            state.items.push((action.payload))
        },
        deleteNote: (state, action) => {
            const id = action.payload
            const filtered = state.items.filter((item) => item.id !== id)
            state.items = filtered
        }
    },
})

export const { addNote, deleteNote } = notesSlice.actions;
export default notesSlice.reducer;