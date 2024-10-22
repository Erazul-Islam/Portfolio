import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
      signup: builder.mutation({
        query: (userInfo) => ({
          url: '/auth/register',
          method: 'POST',
          body: userInfo,
        }),
      }),
    }),
  });
  
  export const { useSignupMutation} = authApi;