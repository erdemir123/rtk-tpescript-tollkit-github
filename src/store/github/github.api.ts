import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { IRepo, ıServer, ıUser } from "../../models/model";

export const githubApi = createApi({
  reducerPath: "github/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.github.com/",
  }),
  refetchOnFocus:true,
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
   getUsersRepos: build.query<IRepo[], string>({
      query: (username: string) => ({
        url: `users/${username}/repos`,       
      }),
    }),
  }),
});

export const { useSearchUsersQuery,useGetUsersReposQuery } = githubApi;
