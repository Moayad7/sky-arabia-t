import React from "react";
import Navbar from "../Components/Navbar/Navbar";

const About = (props) => {
  console.log("about");

  return (
    <div className=" ">
      <div className="about-bg w-full bg-slate-900 ">
        <div className="w-full h-full flex flex-col  justify-center items-center bg-slate">
          {/* <div className="w-full h-full opacity-75 bg-slate-700 "></div> */}
          <div className="relative w-full h-full flex flex-col justify-between items-center text-start ">
            <h1 className="text-blue-50 text-5xl py-48">About us</h1>
            <div className="text-blue-50 text-center  w-full bg-slate-300">
              <div className=" grid justify-evenly lg:grid-cols-5 md:grid-cols-5 grid-cols-1 text-2xl text-blue-800">
                <a
                  href="#skyInBrief"
                  className="py-6 h-full border-b-4 border-transparent hover:border-blue-800 duration-300 font-bold"
                >
                  Sky in brief
                </a>
                <a
                  href="#charmin"
                  className="py-6 h-full border-b-4 border-transparent hover:border-blue-800 duration-300 font-bold"
                >
                  Chairmen’s Message
                </a>
                <a
                  href="#vision&mission"
                  className="py-6 h-full border-b-4 border-transparent hover:border-blue-800 duration-300 font-bold"
                >
                  Vision & Mission
                </a>
                <a
                  href="#"
                  className="py-6 h-full border-b-4 border-transparent hover:border-blue-800 duration-300 font-bold"
                >
                  Our Services
                </a>
                <a
                  href="#"
                  className="py-6 h-full border-b-4 border-transparent hover:border-blue-800 duration-300 font-bold"
                >
                  WHY?
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* sky in brief */}

      <div className=" brief">
        <div className="py-10 px-10 bg-slate">
          <div className="lg:px-40">
            <div className="pb-6">
              <h1 className="text-4xl text-blue-700">Sky in Brief</h1>
            </div>
            <div>
              <p className="text-lg text-start text-slate-50" id="skyInBrief">
                “Sky Alarabia Contracting Company” is an example of excellence,
                development, and a symbol of progress, owned and led by Saudi
                National and backed by team of competent, professional, and
                highly experienced team. “Sky Alarabia Company” takes its first
                step in the year of 1997 and expand its integrity in all regions
                with a vision of complete construction services to the clients.
                <br />
                <br />
                Our services are customized to address the needs of our
                principals. We attempt to hire the best people and give them
                opportunities to grow. We constantly improve upon our management
                systems & invest in the best equipment and latest technology.
                <br />
                <br /> We ourselves completely devote towards the safety and
                wellbeing of our people, clients, suppliers, and the society in
                which we work and live. We are committed to achieving Social,
                Economic, and environmental sustainability in everything we do.
                Our Aim is to maintain good reputation of integrity whatever we
                do.
                <br />
                <br /> We have a passion for what we do, and for being the best
                in the industry
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* charmin */}

      <div className="chairmen border-b-2" id="charmin">
        <div className="px-10 py-10 bg-slate-light">
          <div className="lg:px-40">
            <div className="pb-6">
              <h1 className="text-4xl text-blue-700">Chairmen’s Message</h1>
            </div>
            <div>
              <p className="text-lg text-start text-slate-700" id="skyInBrief">
                It’s my pleasure to introduce ourselves as “Sky Alarabia
                Contracting Company”. Since 1997 we enjoyed good reputation for
                its successful completion of numerous projects in Saudi Arabia.
                The company provides a comprehensive array of services including
                construction, project management, engineering, and maintenance.
                the field covered by our high-quality services including
                building and housing, civil works.
                <br />
                <br />
                At present we are serving major giants like Saudi Aramco, SCECO
                and all the government departments. We are having professional
                team specialized in all areas no matter your project needs are,
                our services team can fully satisfy your requirement.
                <br />
                <br /> “We Will Develop Best to Our Abilities for The Ultimate
                Satisfaction of Our Customers”
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* vision & mission */}
      <div
        className=" flex justify-center bg-slate-100 py-20"
        id="vision&mission"
      >
        <div className=" container grid gap-5 p-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <div className="vision shadow-xl relative h-80 duration-300">
            <div className="p-6 absolute top-0 h-full left-0 flex flex-col justify-center items-center w-full bg-slate text-slate-50">
              <div className="p-2 border-b-2 border-l-2 border-blue-500">
                <h1 className="pb-2  text-2xl lg:text-3xl font-bold">Vision</h1>
                <p className="text-sm font-medium">
                  To grow our organization through investigating advancing
                  technology, industry changes and the varying needs of our
                  clientele as the industry evolves. We will continuously
                  diversify our skill set to distinguish us from our competition
                  and foster loyal customers as we build infrastructure and
                  energy projects that improve the quality of life in Kingdom of
                  Saudi Arabia.
                </p>
              </div>
            </div>
          </div>
          <div className="mission shadow-xl duration-300 ">
            <div className="p-6 flex flex-col justify-center items-center h-80 w-full bg-slate-light text-slate-800">
              <div className="border-b-2 p-2 border-l-2 border-blue-500">
                <h1 className="pb-2 text-2xl lg:text-3xl font-bold">Mission</h1>
                <p className="text-sm font-medium">
                  We aspire to be the recognized leader in the construction
                  industry, committed to building infrastructure, power, and
                  industrial projects across Kingdom of Saudi Arabia. We strive
                  always to provide the highest value to our owners, customers,
                  and community with a critical eye towards safety, quality, and
                  service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Services */}
      <div className="ourServices">
        <div className="py-10 px-10 bg-slate-light ">
          <div className="lg:px-40">
            <div className="pb-6">
              <h1 className="text-4xl text-blue-700">Our Services</h1>
            </div>
            <div>
              <p className="text-slate-800 font-medium">
                For the last few years “Sky Alarabia Contracting Company”
                company successfully delivered different types of projects in
                Saudi Arabia ranging from schools and university facilities bank
                premises, housing projects construction of residential and
                commercial Buildings, office buildings, hospitals. We also have
                done Multi storied Buildings, Box Culverts, Bridges (under pass
                & fly over), Heavy RCC foundations for erection of machineries,
                Telecom Towers, RCC Piles, Cuttings and Forming Embankments for
                Railroad Traffic, laying of Pipelines for Water Supply and
                Sewerage network, fabrication of steel structures for the
                Construction of industrial sheds etc.
                <br />
                <br />
                Delivering Excellence in…. Residential, Infrastructure,
                commercial.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* WHY? */}
      <div className="why">
        <div className="py-10 px-10 bg-slate">
          <div className="lg:px-40">
            <div className="pb-6">
              <h1 className="text-4xl text-blue-700">WHY?</h1>
            </div>
            <div>
              <p className="text-slate-50 font-medium">
                WHY “SKY ALARABIA CONTRACTING COMPANY” ?<br />
                <br />
                We have the Local Experience We grew and evolved with the Saudi
                market and witnessed its every economic boom, including all
                major real estate developments. We know the market well,
                understand its needs, and enjoy a long and proven record that
                counts a diversity of projects in all sectors.
                <br />
                <strong>We deliver to International Standards</strong>
                <br />
                <br />
                At “Sky Alarabia Contracting Company” we constantly keep our
                business promises by remaining transparent, reliable and result
                focused. Abiding by the highest international industry
                standards, we k
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
