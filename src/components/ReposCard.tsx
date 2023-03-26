import React from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { IRepo } from "../models/model";
import { addFavorite } from "../store/github/github.slice";

const ReposCard = ({ repo }: { repo: IRepo }) => {
  const dispatch = useAppDispatch();
  const {favorites} =useAppSelector(state=>state.gitHub)
  console.log(favorites)
  return (
    <div className="border py-3 px-5 mb-2 hover:shadow-md hover:bg-gray-400 transition-all rounded-md shadow-md">
      <a href={repo.html_url} target="_blank">
        <h2 className="text-lg font-bold">{repo.full_name}</h2>
        <p className="text-sm">
          forks:<span className="font-bold mr-2">{repo.forks}</span>
          Watchers:<span className="font-bold ">{repo.watchers}</span>
        </p>
      </a>
      <button onClick={() => dispatch(addFavorite(repo.html_url))} className="bg-amber-600 text-white font-bold p-2 rounded-md hover:bg-slate-800 transition-all">
        Add Favorite
      </button>
    </div>
  );
};

export default ReposCard;
