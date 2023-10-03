import React, { useState } from "react";
import { NavItems } from "./NavItems";
import logo2 from "../../Assets/sky logo-03.png";
import logo from "../../Assets/sky logo-02.png";
import "../../App.css"

const Navbar = (props) => {



  function Menu() {
    let item = document.querySelector("ion-icon");
    let list = document.querySelector("ul");
    item.name === "menu" ? (item.name = "close") : (item.name = "menu");
    item.name === "close"
      ? list.classList.add("left-[0px]")
      : list.classList.remove("left-[0px]");
  }

  return (
    <div className=" w-full ">
    <div className={props.color?'bg-slate-300 duration-300':' duration-300'}>
      <nav className="p-5 text-slate-800 md:flex md:items-center justify-evenly md:justify-evenly">
        <a href="#" className="ms-20 float-right">
        {props.color ? <img src={logo} alt="" width="180px" /> : <img src={logo2} alt="" width="180px" />}
        </a>
        <div className="flex justify-between items-center">
          <span className={props.color?"navbar-toggler text-3xl cursor-pointer mx-2 md:hidden text-slate-800 ":"navbar-toggler text-3xl cursor-pointer mx-2 md:hidden text-slate-50 "}>
            <ion-icon
              name="menu"
              onClick={Menu}
              className=" transition-all ease-in duration-500"
            ></ion-icon>
          </span>
        </div>

        <ul className="md:pr-14 md:flex sm:items-center z-[1] md:z-auto md:static bg-slate-300 md:bg-transparent lg:bg-transparent absolute text-slate-700 w-full left-0  md:w-auto md:py-0 py-4 text-center md:opacity-100 top-[75px] left-[-1080px] transition-all ease-in mx-auto">
          {/* <div className="flex justify-between items-center">
            <span className="text-3xl cursor-pointer mx-2 md:hidden text-slate-50 ">
              <ion-icon
                name="close"
                onClick={Menu}
                className=" transition-all ease-in duration-500"
              ></ion-icon>
            </span>
          </div> */}
          <NavItems url="sky-arabia" name="Home" color={props.color} />
          <NavItems url="About" name="About us" color={props.color}/>
          <NavItems url="Services" name="Our Services" color={props.color}/>
          <NavItems url="Projects" name="Our Projects" color={props.color}/>
          <NavItems url="Contact" name="Contact us" color={props.color}/>
        </ul>
      </nav>
    </div>
    </div>
  );
};

export default Navbar;
