import React, { useEffect, useState } from "react";
import { useWaiting } from "../components/Waiting";
import { ıUser } from "../models/model";
import { useSearchUsersQuery } from "../store/github/github.api";

const HomePage = () => {
  const [search, setSearch] = useState<string>("");
  const [dropDown, setdropDown] = useState<boolean>(false);
  const waiting = useWaiting(search);
  const { isError, isLoading, isSuccess, data } = useSearchUsersQuery(waiting, {
    skip: waiting.length < 3,
  });
  console.log(data);
  const [user, setUser] = useState<ıUser[] | []>([]);
  return (
    <div className="flex justify-center items-center pt-10 mx-auto h-screen w-screen">
      {isError && (
        <p className="text-center text-red-500"> SomeThing went Wrong...</p>
      )}
      <div className="relative w-[560px]">
        <input
          type="text"
          className="border py-2 px-4 w-full h-[42px] mb-2"
          placeholder="search for GitHub userName..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <ul className="list-none absolute top-[42px] left-0 right-0 max-h-[200px] shadow-lg bg-white  overflow-y-scroll">
          {isLoading && <p className="text-center">Loading...</p>}
          {data?.items.map((user) => (
            <li
              key={user.id}
              className="py-2 pl-4 hover:bg-gray-500 hover:text-white duration-300 transition-color cursor-pointer "
            >
              {user.login}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
