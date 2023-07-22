import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartArr: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToCart: (state, action) => {
           const idArray = state.cartArr.map(item => item.id);

           if (idArray.includes(action.payload.id)) {
               state.cartArr.forEach(item => {
                   if (item.id === action.payload.id) {
                       item.quantity += 1
                    }
               });
            } else {
               state.cartArr.push(action.payload)
           }
        },
        removeFromCart: (state, action) => {
            const idArray = state.cartArr.map(item => item.id);

            if (idArray.includes(action.payload)) {

                state.cartArr.forEach(item => {
                    if (item.id === action.payload && item.quantity === 1) {
                        state.cartArr = state.cartArr.filter(e => {
                            return e.id !== action.payload
                        })
                       
                    } else if(item.id === action.payload) {
                        item.quantity -= 1
                    }
                });
            }
        },
        clearState: (state, action) => {
            state.cartArr = []
        }
    },
})

export const {addToCart, removeFromCart, clearState} = cartSlice.actions
export default cartSlice.reducer

// if (e.id === action.payload) {
//     e.quantity -= 1
// }