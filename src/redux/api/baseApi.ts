import {
    BaseQueryApi,
    BaseQueryFn,
    DefinitionType,
    FetchArgs,
    createApi,
    fetchBaseQuery,
  } from '@reduxjs/toolkit/query/react';
  import { RootState } from '../store';
import { logout, setUser } from '../feature/auth/authSlice';

  
  const baseQuery = fetchBaseQuery({
    baseUrl: 'https://portfolio-backend-ruby-gamma.vercel.app/api',
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
  
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
  
      return headers;
    },
  });
  
  const baseQueryWithRefreshToken: BaseQueryFn<
    FetchArgs,
    BaseQueryApi,
    DefinitionType
  > = async (args, api, extraOptions): Promise<any> => {
    let result = await baseQuery(args, api, extraOptions);
  
    if (result?.error?.status === 404) {
      // toast.error(result.error.data.message);
    }
    if (result?.error?.status === 403) {
      // toast.error(result.error.data.message);
    }
    if (result?.error?.status === 401) {
      //* Send Refresh
      console.log('Sending refresh token');
  
      const res = await fetch('http://localhost:5000/api', {
        method: 'POST',
        credentials: 'include',
      });
  
      const data = await res.json();
  
      if (data?.data?.token) {
        const user = (api.getState() as RootState).auth.user;
  
        api.dispatch(
          setUser({
            user: user || null,
            token: data.data.token,
          })
        );
  
        result = await baseQuery(args, api, extraOptions);
      } else {
        api.dispatch(logout());
      }
    }
  
    return result;
  };
  
  export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: baseQueryWithRefreshToken,
    // tagTypes: ['semester', 'courses', 'offeredCourse'],
    endpoints: () => ({}),
  });