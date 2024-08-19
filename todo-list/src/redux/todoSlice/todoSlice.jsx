import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        list: []
    },
    reducers: {
        addItem(state, action) {
            const newItem = {
                title: action.payload.title,
                id: new Date().getTime().toString()
            }
            state.list.push(newItem)
        },

        clearAll(state) {
            state.list = []
        },

        deleteItem(state, action) {
            const removeItem = state.list.filter((item) => item.id !== action.payload.id)
            state.list = removeItem
        },

        editItem(state, action) {
            const editing = state.list.find((item) => item.id === action.payload.id)
            editing.title = action.payload.title
        }

    }
})

export const { addItem, clearAll, deleteItem, editItem } = todoSlice.actions
export default todoSlice.reducer