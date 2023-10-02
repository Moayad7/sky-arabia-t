import React, { useState } from "react";
import { NavItems } from "./NavItems";
import logo2 from "../../Assets/sky logo-03.png";
import logo from "../../Assets/sky logo-02.png";
import "../../App.css"

const Navbar = () => {


    const [color,setColor]= useState(false)
    const changeColor = () =>{
        if(window.scrollY >= 80){
            setColor(true)
        }
        else{
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)




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
    <div className={color?'bg-slate-300 duration-300':' duration-300'}>
      <nav className="p-5 text-slate-800 md:flex md:items-center justify-evenly md:justify-evenly">
        <a href="#" className="float-right">
        {color ? <img src={logo} alt="" width="140px" /> : <img src={logo2} alt="" width="140px" />}
        </a>
        <div className="flex justify-between items-center">
          <span className={color?"navbar-toggler text-3xl cursor-pointer mx-2 md:hidden text-slate-800 ":"navbar-toggler text-3xl cursor-pointer mx-2 md:hidden text-slate-50 "}>
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
          <NavItems url="sky-arabia" name="Home" color={color} />
          <NavItems url="About" name="About" color={color}/>
          <NavItems url="Services" name="Services" color={color}/>
          <NavItems url="Projects" name="Projects" color={color}/>
          <NavItems url="Contact" name="Contact" color={color}/>
        </ul>
      </nav>
    </div>
    </div>
  );
};

export default Navbar;
