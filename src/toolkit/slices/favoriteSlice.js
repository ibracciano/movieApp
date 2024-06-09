import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    total: 0,
    favoriteList: [],
}

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        add: (state, action) => {
            state.favoriteList.push(action.payload)
            state.total = state.favoriteList.length
        },
        remove: (state, action) => {
            state.favoriteList = state.favoriteList.filter(item => item.id !== action.payload.id)
            state.total = state.favoriteList.length
        },
        clear: (state) => {
            state.favoriteList = []
            state.total = 0
        }
    },
})

// Action creators are generated for each case reducer function
export const { add, remove, clear } = favoriteSlice.actions

export const favoriteReducer = favoriteSlice.reducer