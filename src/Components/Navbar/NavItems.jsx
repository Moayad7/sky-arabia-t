import React from "react";
import { Link } from "react-router-dom";

export const NavItems = (props) => {
  return (
    <div className="mx-7 my-7 md:my-0 whitespace-nowrap block text-center w-full uppercase">
      <li>
        <Link to={props.url} className={props.color?"border-b-4 border-transparent hover:border-blue-800 duration-300 font-bold text-lg w-full text-slate-800 hover:text-blue-500 bold":"border-b-4 border-transparent hover:border-blue-800 duration-300 font-medium text-lg w-full  text-slate-800 md:text-slate-50 lg:text-slate-50 hover:text-blue-500 bold"}>
          {props.name}
        </Link>
      </li>
    </div>
  );
};
