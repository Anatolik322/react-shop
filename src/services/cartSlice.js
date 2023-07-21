import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartArr: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToCart: (state, action) => {
            //const index = state.cartArr.findIndex(item => item.id === action.payload.id);
            // state.cartArr.map(e => {
            //     console.log(e)
            // })
            //e.id !== action.payload
            const idArray = state.cartArr.map(item => item.id);
            // state.cartArr.length > 0 ? 
            // state.cartArr = state.cartArr.map(e => {
            //     console.log('cart', e.id, 'payload', action.payload.id)
            //     if(e.id !== action.payload.id){
            //        console.log('first time')
            //        state.cartArr.push(action.payload)
            //     }else{ e.quantity+= 1; console.log('incluse')}
            // }): state.cartArr.push(action.payload)
            if(idArray.includes(action.payload.id)){
                state.cartArr.forEach(item => {
                    if (item.id === action.payload.id) {
                      item.quantity+=1 
                    }
                });
            }else{
                state.cartArr.push(action.payload)
            }
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