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
            }),
            createProject: builder.mutation({
                query: (newProject) => ({
                    url: '/project',
                    method: 'POST',
                    body: newProject
                })
            })
        }
    )
})

export const { useCreateBlogMutation,useCreateProjectMutation } = authApi