import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postApi = createApi({
	reducerPath: 'postApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://jsonplaceholder.typicode.com',
	}),
	endpoints: builder => ({
		getPosts: builder.query({
			query: ({ limit = 5, start = 0 }) => ({
				url: '/posts',
				params: {
					_limit: limit,
					_start: start,
				},
			}),
		}),
		getPostsById: builder.query({
			query: (id = 1) => ({
				url: `/posts/${id}`,
			}),
		}),
	}),
})

export const { useGetPostsQuery, useGetPostsByIdQuery } = postApi
