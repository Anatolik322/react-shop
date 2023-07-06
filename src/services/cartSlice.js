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
        }
    },
})

export const {addToCart} = cartSlice.actions
export default cartSlice.reducer