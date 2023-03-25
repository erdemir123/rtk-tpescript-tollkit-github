import React, { useEffect, useState } from "react";
import { ıUser } from "../components/models/model";
import { useSearchUsersQuery } from "../store/github/github.api";

const HomePage = () => {
    const [search, setSearch] = useState<string>("");
  const { isError, isLoading, data } = useSearchUsersQuery(`${search}`);
  const [user, setUser] = useState<ıUser[] | []>([]);
  
  console.log(data?.items);
  useEffect(() => {
    console.log(search)
    console.log(isError)
  }, [user]);
  return (
    <div className="flex justify-center items-center pt-10 mx-auto h-screen w-screen">
      {isError && (
        <p className="text-center text-red-500"> SomeThing went Wrong...</p>
      )}
      <div className="relative, w-[560px]">
        <input
          type="text"
          className="border py-2 px-4 w-full h-[42px] mb-2"
          placeholder="search for GitHub userName..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="absolute top-[42px] left-0 right-0 max-h-[200px] shadow-lg bg-white"></div>
      </div>
    </div>
  );
};

export default HomePage;
