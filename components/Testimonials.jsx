import React, {useState, useEffect} from "react";
import Client from "./utils/client";
import { BsQuote } from "react-icons/bs";


const testimonials = [
    {
        name: "Diego Fajardo",
        position: "Junior",
        idname: "Hidekair",
        desc: " I was struggling with my website's frontend development un til I stumbled upon this website. The team's expertise and knowledge of frontend technologies helped me create an outstanding website that exceeded my expectations. Their attention to detail and ability to communicate complex concepts in simple terms were impressive",
    },
    
    

]

const Testimonials = () => {
    const [selectedClient, setSelectedClient] = useState(0);
    const [below1225, setlower1225] = useState(false)
    const [below850, setlower850] = useState(false)
    const [below630, setlower630] = useState(false)

    const handleClientClick = (index) => {
    setSelectedClient(index);
    };

    useEffect(() => {
        function handleResize () {
          setlower1225(window.innerWidth<1225);
          setlower850(window.innerWidth<850);
          setlower630(window.innerWidth<630);
    
        }
        window.addEventListener('resize', handleResize);
        
          return () => {
            window.removeEventListener('resize', handleResize);
          };
      }, [])
  return (
    <section id="testimonials" className={` m-auto mb-20 ${below1225 ? "w-10/12 mt-20" :"w-8/12 mt-32"}`}>
      <div className={` text-white font-Roboto_mono mb-20  ${below1225 ? "w-10/12":"w-8/12" } ${below850 ? "":"flex justify-between items-baseline" } `}>
        <h1 className={` mb-2 ${below850 ? "text-3.5xl" : "text-4xl"}`}>Proyectos</h1>
        <p className="opacity-70">que proyectos tengo </p>
      </div>
      <div className=" relative testimonialBox text-white font-Roboto_mono bg-gray3 py-10">
        <div className={` m-auto ${below630 ? "w-10/12": "w-8/12"}`}>
            <p className="mb-5">{testimonials[selectedClient].name}</p>
          <BsQuote className={`absolute right-10 top-6 opacity-60 text-6xl rotate-180 ${below630 ? "hidden": ""}` } />
          <p className="opacity-80">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <BsQuote className={` absolute left-5 opacity-60 text-6xl  rotate-180 transform -scale-x-100 ${below1225 ? "top-56": "top-48 "} ${below850 ? "top-80": ""} ${below630 ? "hidden": ""}`} />
        </div>
      </div>
      <div className={`clients text-white ${below850 ? "grid grid-cols-1 gap-6" : "flex justify-between items-center"} ${below630 ? "grid grid-cols-0 gap-6" : ""}`}>
        {testimonials.map((testimonial, index) => (
          <Client
            key={testimonial.idname}
            index={index}
            testimonial = {testimonial}
            onClick={handleClientClick}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
