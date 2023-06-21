import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// ----------------------------------------
export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "0017c38538msh4c40284554dd0ffp161aa1jsn6e1f3c920135"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => "/charts/world" }),
  }),
});
// ----------------------------------------
export const { useGetTopChartsQuery } = shazamCoreApi;
