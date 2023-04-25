import React, { Fragment, useState, useEffect } from "react";
import heroImage from "../public/maletin.jpg";
import Image from "next/image";

const Hero = () => {
    const [below1300, setbelow1300] = useState(false);
    const [below1250, setbelow1250] = useState(false);
    const [below1200, setbelow1200] = useState(false);
    const [below1000, setbelow1000] = useState(false);
    const [below600, setbelow600] = useState(false);

    useEffect(() => {
        function handleResize() {
          setbelow1300(window.innerWidth < 1300);
          setbelow1250(window.innerWidth < 1250);
          setbelow1200(window.innerWidth < 1200);
          setbelow1000(window.innerWidth < 1000);
          setbelow600(window.innerWidth < 600);
        }
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
  return (
    <Fragment>
        { !below1000 ? (
      <section className={` grid ${below1250 ? "grid-cols-1" : "grid-cols-2"} grid-cols-2 w-10/12 ${below1200 ? "w-11/12" : "w-10/12"} m-auto mt-24 font-Roboto_mono`}>
        <div className="text-elements inline-flex relative text-white flex-col">
          <div className={`w-10/12 ${below1300 ? "ml-0" : "ml-10"}`}>
            <div>
              <p className="work bg-green p-1 inline-block rounded-xl">
                Pagina Principal
              </p>
            </div>
            <div className={`head leading-12  ${below1200 ? "mt-4 mb-8 text-4xl" : "mt-12 mb-12 text-5xl"}`}>
              <p>Portafolio</p>
              <p>Seminario de Sistemas</p>
            </div>
            <div className="desc text-base opacity-60 mb-10">
              <p>Un estudiante de la universidad autonoma tomas frias.Estudiante de la carrera de Ing. de Sistemas </p>
              
            </div>
            <h3 className={`uppercase text-green text-3xl underline underline-offset-4  ${below1200 ? "mb-10" : "mb-20"}`}>
              Diego Fajardo Canaza
            </h3>
          </div>
          <div className="experience uppercase flex space-x-8 pb-7">
            <div className="year flex items-center">
              <p className={` mr-4 ${below1200 ? "text-4xl" : "text-5xl"}`}>5</p>
              <div className={`opacity-75 ${below1200 ? "text-sm" : "text-base"}`}>
                años <p>En la UATF</p>{" "}
              </div>
            </div>
            <div className="projects flex items-center justify-between">
              <p className={` mr-4 ${below1200 ? "text-4xl" : "text-5xl"}`}>Proyecto</p>
              <div className={`opacity-75 ${below1200 ? "text-sm" : "text-base"}`}>
                Con react <p> y Next js</p>{" "}
              </div>
            </div>
          </div>
        </div>
        <div className=" image-elements relative">
          <div class="flex justify-end items-center bg-gradient-primary-2 absolute bottom-0">
            <Image
              className={`w-[600px]`}
              src={heroImage}
              alt="Picture of the author"
            />
          </div>
        </div>
      </section> ) 
      : 
      (
        <section className={` flex flex-col-reverse w-11/12 m-auto font-Roboto_mono`}>
        <div className={`text-elements relative text-white  w-10/12 m-auto ${below600 ? "w-11/12": ""}`}>
          <div className={`w-10/12 m-auto ${below600 ? "w-full": ""}`}>
            <div>
              <p className="work bg-green p-1 inline-block rounded-xl">
                Pagina Principal
              </p>
            </div>
            <div className={`head leading-12 mt-4 mb-8 ${below600 ? "text-3.5xl" : "text-4xl"}`}>
              <p>Portafolio</p>
              <p>Seminario de Sistemas</p>
            </div>
            <div className="desc text-base opacity-60 mb-10">
              <p>Un estudiante de la universidad autonoma tomas frias. Estudiante de la carrera de Ing. de Sistemas </p>
              
            </div>
            <h3 className={`uppercase text-green text-3xl underline underline-offset-4"`}>
              Diego Fajardo Canaza
            </h3>
          </div>
          <div className={`experience uppercase w-11/12 m-auto mt-7 pb-7 ${below600 ? "w-full float-left space-y-2": "flex space-x-8"}`}>
            <div className="year flex items-center">
              <p className={` mr-4 text-4xl`}>5</p>
              <div className={`opacity-75 text-sm`}>
                años <p>en la UATF</p>
              </div>
            </div>
            <div className="projects flex items-center ">
              <p className={` mr-4 text-4xl`}>Proyecto</p>
              <div className={`opacity-75 text-sm`}>
               con React  <p> y Next js</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" image-elements relative mt-16 mb-20">
          <div class="flex justify-end items-center bg-gradient-primary-2 w-8/12 m-auto">
           
            <Image
              className={`w-[400px]`}
              src={heroImage}
              alt="Picture of the author"
            />
          </div>
        </div>
      </section>
      )}
    </Fragment>
  );
};

export default Hero;
