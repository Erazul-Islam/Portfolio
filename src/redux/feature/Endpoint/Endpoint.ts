import { baseApi } from "../../api/baseApi";


const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => (
        {
            createBlog: builder.mutation({
                query: (newPost) => ({
                    url: '/blog',
                    method: 'POST',
                    body: newPost
                })
            })
        }
    )
})

export const { useCreateBlogMutation } = authApi