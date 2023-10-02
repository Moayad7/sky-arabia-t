import React from "react";
import { Link } from "react-router-dom";

export const NavItems = (props) => {
  return (
    <div className="mx-4 my-6 md:my-0 whitespace-nowrap block text-center w-full">
      <li>
        <Link to={props.url} className={props.color?" w-full text-xl text-slate-800 hover:text-blue-500 bold":" w-full text-xl text-slate-800 md:text-slate-50 lg:text-slate-50 hover:text-blue-500 bold"}>
          {props.name}
        </Link>
      </li>
    </div>
  );
};
