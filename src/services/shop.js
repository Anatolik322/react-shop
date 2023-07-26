import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const shopApi = createApi({
    reducerPath: 'shopApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://dummyjson.com'}),
    endpoints: builder => ({
        getGoods: builder.query({
            query: () => '/products',
        }),
        getByCategory: builder.query({
            query: (category) => `/products${category ? `/category/${category}`: ''}`,
        }),
        getById: builder.query({
          query: (id) =>  `/products/${id}`
        }),
        getByPagination: builder.query({
            query: (page) =>  `/products?limit=12&skip=${page ? page +'0': '10'}`  
        })
    }),
})

export const {useGetGoodsQuery, useGetByCategoryQuery, useGetByIdQuery, useGetByPaginationQuery} = shopApi