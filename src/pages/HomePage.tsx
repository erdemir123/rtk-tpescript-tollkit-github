import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../app/hooks";
import ReposCard from "../components/ReposCard";
import { useWaiting } from "../components/Waiting";
import { ıUser } from "../models/model";
import {
  useGetUsersReposQuery,
  useSearchUsersQuery,
} from "../store/github/github.api";

const HomePage = () => {
  const [search, setSearch] = useState<string>("");
  const [dropDown, setdropDown] = useState<boolean>(false);
  const waiting = useWaiting(search);
  const {
    isError,
    isLoading,
    isSuccess,
    data: users,
  } = useSearchUsersQuery(waiting, {
    skip: waiting.length < 3,
    refetchOnFocus: true,
  });
  const [user, setUser] = useState("");
  const handleClick = (username: string) => {
    setUser(username);
  };
  const { data: repos, isLoading: areReposLoading } = useGetUsersReposQuery(
    user,
    { skip: waiting.length < 3 }
  );

  return (
    <div className="flex justify-center  pt-10 h-screen mx-auto">
      {isError && (
        <p className="text-center text-red-500"> SomeThing went Wrong...</p>
      )}
      <div className="relative w-[560px]  mx-4">
        <input
          type="text"
          className="border py-2 px-4 w-full h-[42px] mb-2 rounded-md"
          placeholder="search for GitHub userName..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <ul className="list-none absolute top-[42px] left-0 right-0 max-h-[200px] shadow-lg bg-white  overflow-y-scroll">
          {isLoading && <p className="text-center">Loading...</p>}
          {users?.items.map((user) => (
            <li
              key={user.id}
              className="py-2 pl-4 hover:bg-gray-500 hover:text-white duration-300 transition-color cursor-pointer"
              onClick={() => handleClick(user.login)}
            >
              {user.login}
            </li>
          ))}
        </ul>
        <div className="container mt-52 absolute">
          {areReposLoading && (
            <p className="text-center">Repos are Loading...</p>
          )}
          {repos?.map((repo) => (
            <ReposCard repo={repo} key={repo.id} />
          ))}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default HomePage;
