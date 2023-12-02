import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = "https://epay-profiling.onrender.com/";

export const profileApi = createApi({
  reducerPath: "ProfileApi",
  baseQuery: fetchBaseQuery({
    baseUrl: api,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.userToken;
      console.log('token in api ===========>>>>>>>>>>>>', token)
      if (token) {
        headers.set("Authorization", `JWT ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: () => ({
        url: "api/profile/",
        method: "GET",
      }),
    }),
    createUser: builder.mutation({
      query: (body) => ({
        url: "api/profile/",
        method: "POST",
        body: { body },
      }),
    }),
  }),
});

export const { useGetProfileQuery, useCreateUserMutation } = profileApi;
