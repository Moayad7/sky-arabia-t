import React from "react";
import king from "../Assets/images/king.png";
import king1 from "../Assets/images/king (1).png";
import mbs from "../Assets/images/mbs.jpg";
import mbs1 from "../Assets/images/prince.png";
import ContactForm from "../Components/ContactForm";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div className="">
      <div className="background bg-slate-900">
        <div className="w-100 h-full flex flex-col justify-center items-center bg-slate">
          {/* <div className="w-full h-full opacity-75 bg-slate-700 "></div> */}
          <div className="container px-16 mx-auto w-100 h-full flex flex-col justify-center items-center text-start ">
            <h1 className="text-blue-700 text-5xl">Sky Al-arabia Company</h1>
            <h1 className="text-blue-50 text-2xl">
              We have a passion for what we do, and for being the best in the
              industry.
            </h1>
          </div>
        </div>
      </div>

      {/* kings say */}

      <div className=" p-5 w-full flex justify-center items-center">
        <div className="gap-5 grid grid-cols-1 sm:grid-cols-2 justify-center items-center py-5">
          <div className="items-center justify-center grid grid-col-1 py-2">
            <img src={king} alt="" className="p-4 lg:p-16 rounded-5" />
          </div>
          <div className="text-start flex-col flex justify-center items-center py-2">
            <p className="text-slate-800 text-3xl p-4">
              Your country is witnessing a comprehensive and sustainable
              development movement and is awaiting the second phase of Vision
              2030, targeting the promising and new development of tomorrow that
              supports local content.
            </p>
            <img src={king1} alt="" className="w-80" />
          </div>
        </div>
      </div>

      <div className="bg-slate-300">
        <div className=" p-5 w-full flex justify-center items-center">
          <div className="gap-5 grid grid-cols-1 sm:grid-cols-2 justify-center items-center py-5">
            <div className="items-center order-1 justify-center grid grid-col-1 py-2">
              <img src={mbs} alt="" className="p-4 lg:p-16 rounded-5" />
            </div>
            <div className="text-start  flex-col flex justify-center items-center py-2">
              <p className="text-slate-800 text-3xl p-4">
                We possess all the factors that enable us to achieve our goals
                together, and there is no excuse for any of us to remain in our
                place, or to retreat, God forbid.
              </p>
              <img src={mbs1} alt="" className="w-80" />
            </div>
          </div>
        </div>
      </div>

      {/* mission & vision */}

      <div className=" w-full justify-center flex mt-16 mx-auto container ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cos-2 lg:grid-cols-4">
          <div className="order-1 w-80 h-80 bg-slate-200">
            <h3 className="w-full h-full flex justify-center items-center bg-blue-700 text-blue-50 text-3xl">
              Mission
            </h3>
          </div>
          <div className="order-2 w-80 h-80 bg-slate-200 h-full flex justify-center items-center overflow-hidden">
            <h3 className="text-blue-700 p-3 bold">
              We aspire to be the recognized leader in the construction
              industry, committed to building infrastructure, power, and
              industrial projects across Kingdom of Saudi Arabia. We strive
              always to provide the highest value to our owners, customers, and
              community with a critical eye towards safety, quality, and
              service.
            </h3>
          </div>
          <div className=" photo-3 w-full h-80 bg-slate-300 lg:col-span-2 md:col-span-2 col-span-1 ">
            <div className="bg-mission h-full w-full">
              <div className="w-full h-full bg-3 flex justify-center items-center relative">
                <div className="w-full h-full absolute bg-dark1 bg-opacity opacity-50"></div>
                <button className="text-slate-50 p-2 rounded border border-slate-50 hover:bg-slate-800 absolute z-5 btn-2">
                  Our Projects
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full justify-center flex mx-auto container mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cos-2 lg:grid-cols-4">
          <div className="w-80 h-80 bg-slate-200">
            <h3 className="w-full h-full flex justify-center items-center bg-blue-700 text-blue-50 text-3xl">
              Vision
            </h3>
          </div>
          <div className="w-80 h-80 bg-slate-200 h-full flex justify-center items-center overflow-hidden">
            <h3 className="text-blue-700 p-3">
              To grow our organization through investigating advancing
              technology, industry changes and the varying needs of our
              clientele as the industry evolves. We will continuously diversify
              our skill set to distinguish us from our competition and foster
              loyal customers as we build infr astructure and energy projects
              that improve the quality of life in Kingdom of Saudi Arabia.
            </h3>
          </div>
          <div className="  photo-3 w-full h-80 bg-slate-300 lg:col-span-2 md:col-span-2 col-span-1  ">
            <div className="bg-vision h-full w-full relative ">
              <div className="w-full h-full absolute bg-dark1 bg-opacity opacity-50"></div>
              <div className=" h-full w-full bg-3 flex justify-center items-center  relative">
                <button className="text-slate-50 p-2 rounded border border-slate-50 hover:bg-slate-800 absolute z-5 btn-2">
                  Our Projects
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* services */}

      <div className="flex justify-center bg-slate-100 py-5">
        <div className="container ">
          <div className="">
            <h1 className="my-4 text-4xl">Services</h1>
          </div>
          <div className="p-4 text-start grid xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-x-5 ">
            <div className="cards h-80 my-4 shadow  p-10 bg-blue-50 text-slate-800 hover:bg-blue-700 hover:text-slate-50 flex flex-col items-between justify-between">
              <div className="card-title">
                <h3 className="text-xl lg:text-4xl">General Contracting</h3>
              </div>
              <p className="text-sm lg:text-xl">
                Civil Contractors is dedicated to producing quality civil
                construction works for the residential commercial and
                infrastructure sectors, whereas maintain the highest level of
                integrity at all levels of project.
              </p>
              <div className="card-btn cursor-pointer">
                <button className="border border-slate-700 rounded p-2">
                  Read more..
                </button>
              </div>
            </div>
            {/* <style>
            .cards:hover{

            }
          </style> */}
            <div className="cards h-80 w-full my-4 shadow flex flex-col justify-between p-10 bg-slate-50 text-blue-700 hover:bg-slate-800 hover:text-blue-50 ">
              <div className="card-title">
                <h3 className="text-xl lg:text-4xl">Steel Fabrication</h3>
              </div>
              <p className="text-sm lg:text-xl">
                Sky Alarabia owns a steel fabrication facility in Jubail light
                industrial area with all the required machines and allotted area
                for sandblasting and painting to fulfill and cater clients under
                one roof.
              </p>
              <div className="card-btn cursor-pointer">
                <button className="border border-slate-700 rounded p-2">
                  Read more..
                </button>
              </div>
            </div>
            <div className="cards h-80 w-full my-4 shadow flex flex-col justify-between p-10 bg-slate-50 text-blue-700 hover:bg-slate-800 hover:text-blue-50 ">
              <div className="card-title">
                <h3 className="text-xl lg:text-4xl">Transportation</h3>
              </div>
              <p className="text-sm lg:text-xl">
                “Sky Alarabia Contracting Company”– transportation is 100% Saudi
                owned company founded in 1997 with only four trucks serving the
                local market.
              </p>
              <div className="card-btn cursor-pointer">
                <button className="border border-slate-700 rounded p-2">
                  Read more..
                </button>
              </div>
            </div>
            <div className="cards h-80 w-full my-4 p-10 shadow bg-blue-50 text-slate-800 hover:bg-blue-700 hover:text-slate-50 flex flex-col items-between justify-between">
              <div className="card-title">
                <h3 className="text-xl lg:text-4xl">
                  Mechanical and Electrical Services
                </h3>
              </div>
              <p className="text-sm lg:text-xl">
                “Sky Alarabia Contracting Company” gives full-service of
                mechanical and electrical to commercial and industrial
                customers. We have established a quality-driven reputation of
                providing unparalleled design.
              </p>
              <div className="card-btn cursor-pointer">
                <button className="border border-slate-700 rounded p-2">
                  Read more..
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* projects */}
      <div className="py-5 container-fluid">
        <div className="py-5">
          <h2 className="text-4xl">Projects</h2>
        </div>
        <div className=" p-4 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4">
          <div className="proj-card w-full ">
            <div className="proj-pic1 flex relative items-end">
              <h3 className=" proj-title text-blue-700 absolute  text-center w-full lg:text-3xl bg-slate-50 mb-0 py-2 ">
                Cleaning and Demolition of 3 Abandoned Tanks
              </h3>
            </div>
          </div>
          <div className="proj-card">
            <div className="proj-pic2  flex  items-end relative">
              <h3 className="proj-title text-blue-700 absolute text-center w-full text-xl lg:text-3xl bg-slate-50 mb-0 px-3 py-2 ">
                Najran University
              </h3>
            </div>
          </div>
          <div className="proj-card ">
            <div className="proj-pic3 flex  items-end relative">
              <h3 className="proj-title text-blue-700 absolute text-center w-full text-xl lg:text-3xl bg-slate-50 mb-0 px-3 py-2 ">
                SFC- AFK MONORAIL HOISTS REPAIRING
              </h3>
            </div>
          </div>
          <div className="proj-card ">
            <div className="proj-pic4 flex  items-end relative">
              <h3 className="proj-title text-blue-700 absolute text-center w-full text-xl lg:text-3xl bg-slate-50 mb-0 px-3 py-2 ">
                Ministry of Interior Police
              </h3>
            </div>
          </div>
        </div>
        <div className="py-5">
          <button className="text-blue-700 text-2xl">See All Projects</button>
        </div>
      </div>

      {/* *************** */}
      <div className=" bg-blue-700 sm:text-start md:text-start lg:text-start relative text-slate-50 p-10">
        {/* <div className="bg-blue-700 absolute w-full h-full"></div> */}
        <div className="bg-blue">
          <div className=" grid lg:grid-cols-3 ">
            <div className="col-span-2 container  grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 py-5 ">
              <h3 className="py-5 col-span-1 sm:col-span-3 md:col-span-3 lg:col-span-3 text-3xl">
                We always strive to be the first and preferred choice
              </h3>

              <div>
                <h3 className="text-slate-900 text-3xl">17</h3>
                <p className="text-xl">Our Projects</p>
              </div>
              <div>
                <h3 className="text-slate-900 text-3xl">10</h3>
                <p className="text-xl">Our Clients</p>
              </div>
              <div>
                <h3 className="text-slate-900 text-3xl">3</h3>
                <p className="text-xl">Experince</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-5">
        <ContactForm />
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default Home;
