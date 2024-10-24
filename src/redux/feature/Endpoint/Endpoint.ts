import { TProject, TResponseRedux } from "../../../utils/global";
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
            }),
            getAllProject: builder.query({
                query: () => {
                    return { url: '/project', method: 'GET' };
                },
                transformResponse: (response: TResponseRedux<TProject[]>) => {
                    return {
                        data: response.data
                    };
                },
            }),
            getAllBlogs: builder.query({
                query: () => {
                    return { url: '/blog', method: 'GET' };
                },
                transformResponse: (response: TResponseRedux<TProject[]>) => {
                    return {
                        data: response.data
                    };
                },
            }),
        }
    )
})

export const { useCreateBlogMutation,useCreateProjectMutation,useGetAllBlogsQuery,useGetAllProjectQuery } = authApi