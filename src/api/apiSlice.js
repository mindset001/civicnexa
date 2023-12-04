import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = "https://civicnexa.onrender.com/";
// export const api = "https://127.0.0.1:8000/";

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
        url: "profiling/",
        method: "GET",
      }),
    }),
    createUser: builder.mutation({
      query: (body) => ({
        url: "profiling/",
        method: "POST",
        body: { body },
      }),
    }),
  }),
});

export const { useGetProfileQuery, useCreateUserMutation } = profileApi;
