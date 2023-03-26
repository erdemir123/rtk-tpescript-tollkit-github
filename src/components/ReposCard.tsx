import React from "react";
import { IRepo } from "../models/model";

const ReposCard = ({ repo }: { repo: IRepo }) => {
  return (
    <div className="border py-3 px-5 mb-2 hover:shadow-md hover:bg-gray-100 transition-all">
      <a href={repo.html_url} target="_blank">
        <h2 className="text-lg font-bold">{repo.full_name}</h2>
        <p className="tetx-sm">
          forks:<span className="font-bold mr-2">{repo.forks}</span>
          Watchers:<span className="font-bold ">{repo.watchers}</span>
        </p>
      </a>
    </div>
  );
};

export default ReposCard;
