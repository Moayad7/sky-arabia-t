import React from "react";
import logo from "../Assets/sky logo-03.png";
import "../App.css"

const Footer = () => {
  return (
    <div className="bg-blue-900 p-5">
    
      <div className="container">
      
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-4  justify-center lg:text-start">
          
        <div className="link order-1 text-slate-500 flex justify-center w-100 py-5">
            
            <div className="">
            <img src={logo} alt="" />
            </div>
          </div>
          <div className="order-2 flex flex-col px-5 ">
            <h3 className="text-blue-50 text-4xl pb-3">visit</h3>
            <a href="#" className="  text-lg text-slate-800 no-underline hover:text-slate-50">Home</a>
            <a href="#" className="  text-lg text-slate-800 no-underline hover:text-slate-50">About</a>
            <a href="#" className="  text-lg text-slate-800 no-underline hover:text-slate-50">Projects</a>
            <a href="#" className="  text-lg text-slate-800 no-underline hover:text-slate-50">Contact</a>
            <a href="#" className="  text-lg text-slate-800 no-underline hover:text-slate-50">Privacy</a>
          </div>
          <div className="order-3 flex flex-col px-5 ">
          <h3 className="text-blue-50 text-4xl pb-3">Services</h3>
            <a href="#" className="  text-lg text-slate-800 no-underline hover:text-slate-50">General Contracting</a>
            <a href="#" className="  text-lg text-slate-800 no-underline hover:text-slate-50">Steel Fabrication</a>
            <a href="#" className="  text-lg text-slate-800 no-underline hover:text-slate-50">Transportation</a>
            <a href="#" className="  text-lg text-slate-800 no-underline hover:text-slate-50">Mechanical and Electrical Services</a>
          </div>
          <div className="order-4 flex flex-col px-5 ">
            <h3 className="text-blue-50 text-4xl pb-3">Contact</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
              <div className="">
              <h4 className="text-xl">Dammam Head Office</h4>
            <div><a href="#" className="  text-lg text-slate-800 no-underline hover:text-slate-50">King Fahad Road, Dammam, KSA</a></div>
            <div><a href="#" className="  text-lg text-slate-800 no-underline hover:text-slate-50">013821-0276</a></div>
            <div className="pb-3"><a href="#" className="  text-lg text-slate-800 no-underline hover:text-slate-50">013-821-1938</a></div>
            
              </div>
              <div className="">
              <h4 className="text-xl">Ibn Haiyan Road - Najran - Industrial Area</h4>
            <div><a href="#" className="  text-lg text-slate-800 no-underline hover:text-slate-50">King Fahad Road, Dammam, KSA</a></div>
            <div><a href="#" className="  text-lg text-slate-800 no-underline hover:text-slate-50"> (+966) 017 – 523 - 0123</a></div>
            <div><a href="#" className="  text-lg text-slate-800 no-underline hover:text-slate-50">(+966) 0505726627</a></div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
