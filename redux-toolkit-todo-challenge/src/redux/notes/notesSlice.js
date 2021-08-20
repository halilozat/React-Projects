import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from '@reduxjs/toolkit'

export const notesSlice = createSlice({
    name: 'notes',
    initialState: {
        items: [
            { id: 1, color: "green", title: "green note" },
            { id: 2, color: "blue", title: "blue note" },
            { id: 3, color: "yellow", title: "yellow note" },
            { id: 4, color: "red", title: "red note" },
        ],
        filterText: ""
    },
    reducers: {
        addNote: {
            reducer: (state, action) => {
                state.items.push((action.payload))
            },
            prepare: ({title, color}) => {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        color,
                    }
                }
            },
        },
        deleteNote: (state, action) => {
            const id = action.payload
            const filtered = state.items.filter((item) => item.id !== id)
            state.items = filtered
        },
        setFilterText: (state, action) => {
            state.filterText = action.payload
        }
    },
})

export const selectNotes = (state) => state.notes.items;
export const selectColor = (item) => item.color;

export const { addNote, deleteNote, setFilterText } = notesSlice.actions;
export default notesSlice.reducer;