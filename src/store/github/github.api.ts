import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { ıServer, ıUser } from "../../models/model";

export const githubApi = createApi({
  reducerPath: "github/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.github.com/",
  }),
  endpoints: (build) => ({
    searchUsers: build.query<ıServer<ıUser>, string>({
      query: (search: string) => ({
        url: "search/users",
        params: {
          q: search,
          per_page: 10,
        },
        transformResponse: (response: ıServer<ıUser>) => response.items,
      }),
    }),
  }),
});

export const { useSearchUsersQuery } = githubApi;
