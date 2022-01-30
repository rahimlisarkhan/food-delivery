import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    basket: (typeof window !== 'undefined' && JSON.parse(localStorage.getItem("basket"))) || [],
}

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addbasket: (state, action) => {
            state.basket = [...state.basket, action.payload]
        },
        fillBasket: (state, action) => {
            state.basket = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { addbasket,fillBasket } = basketSlice.actions

export default basketSlice.reducer