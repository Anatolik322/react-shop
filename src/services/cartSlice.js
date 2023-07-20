import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartArr: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToCart: (state, action) => {
            state.cartArr.push(action.payload)
        },
        removeFromCart: (state, action) => {
            const index = state.cartArr.findIndex(item => item.id === action.payload);
            console.log(action.payload)
            state.cartArr = state.cartArr.filter(e => {
                return e.id !== action.payload
            })
        },
        clearState: (state, action) => {
            state.cartArr = []
        }
    },
})

export const {addToCart, removeFromCart} = cartSlice.actions
export default cartSlice.reducer