import React from "react";
import { useAppSelector } from "../app/hooks";

const FavoritesPage = () => {
  const { favorites } = useAppSelector((state) => state.gitHub);
  return (
    <div className="flex flex-col justify-center items-center pt-10 h-screen mx-auto">
      <h1 className="font-bold text-lg text-amber-600 mb-3">
        My Favorites Repos
      </h1>
      <ul className="list-none  flex gap-2 flex-col ">
        {favorites.map((favorite, index) => (
          <li
            key={index}
            className="py-2 pl-4 font-bold hover:bg-gray-300 hover:text-amber-600 duration-300 transition-color cursor-pointer border rounded-md border-slate-500 px-2 bg-slate-200 shadow-md shadow-amber-300"
          >
            {favorite}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesPage;
