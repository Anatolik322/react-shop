import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import { shopApi } from "./shop";
import { getDefaultNormalizer } from "@testing-library/react";

export const store = configureStore({
    reducer: {
        cartReducer,
        [shopApi.reducerPath]: shopApi.reducer,
    },

    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(shopApi.middleware),
})