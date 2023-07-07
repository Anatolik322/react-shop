import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const shopApi = createApi({
    reducerPath: 'shopApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://fakestoreapi.com'}),
    endpoints: builder => ({
        getGoods: builder.query({
            query: () => '/products',
        }),
        getByCategory: builder.query({
            query: (category) => `/products/category/${category}`,
        })
    }),
})

export const {useGetGoodsQuery, useGetByCategoryQuery} = shopApi