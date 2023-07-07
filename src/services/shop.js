import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const shopApi = createApi({
    reducerPath: 'shopApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://fakestoreapi.com'}),
    endpoints: builder => ({
        getGoods: builder.query({
            query: () => '/products',
        }),
    }),
})

export const {useGetGoodsQuery} = shopApi