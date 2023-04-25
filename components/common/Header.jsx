import Link from 'next/link'
import React, {useState, useEffect} from 'react'
import {BiChevronRight, BiChevronLeft} from "react-icons/bi"
import {HiMail} from "react-icons/hi"
import {RxHamburgerMenu} from "react-icons/rx"

const Header = () => {
  const [servicesHovered, setServicesHovered] = useState(false);
  const [worksHovered, setWorksHovered] = useState(false);
  const [notesHovered, setNotesHovered] = useState(false);
  const [contactsHovered, setContactsHovered] = useState(false);
  const [below1050, setbelow1050] = useState(false)
  const [below950, setbelow950] = useState(false)
  const [below850, setbelow850] = useState(false)
  const [isMobile, setMobile] = useState(false)

  const handleMouseEnter = () => {
    setServicesHovered(true);
  };

  const handleMouseLeave = () => {
    setServicesHovered(false);
  };
  const handleMouseEnter1 = () => {
    setWorksHovered(true);
  };

  const handleMouseLeave1 = () => {
    setWorksHovered(false);
  };
  const handleMouseEnter2 = () => {
    setNotesHovered(true);
  };

  const handleMouseLeave2 = () => {
    setNotesHovered(false);
  };
  const handleMouseEnter3 = () => {
    setContactsHovered(true);
  };

  const handleMouseLeave3 = () => {
    setContactsHovered(false);
  };
 


  useEffect(() => {
    function handleResize() {
      setbelow1050(window.innerWidth < 1050);
      setbelow950(window.innerWidth<950)
      setbelow850(window.innerWidth<850)
    }

    window.addEventListener('resize', handleResize);

    // Cleanup function to remove the event listener when component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className='font-Inter'>
      <div className={`flex relative items-center justify-between h-20 text-white ${below1050 ? "w-full p-2" : "m-auto w-11/12"} ${isMobile ? "bg-darkgray w-full" : ""}`}>
        <div className={`name cursor-pointer p-0 m-0 ${below850 ? "text-2xl" : "text-3xl"}`}>
          <span className='font-Dm_Sans font-medium hover:text-green ease-in duration-200'>Diego </span>
          <span>Portafolio</span>
        </div>

      <div className={`middle-nav ease-in duration-300 font-Roboto_mono ${isMobile ? "mt-44 absolute right-0 top-[-100px] bg-darkgray w-full z-40" : (below850 ? "mt-[-500px] " : "")}`} onClick={() => setMobile(false)}>
          <ul className={`${below850 ? " block text-center space-y-6" :"flex space-x-6 items-center"}`}>
          <Link href="#services" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="flex items-center">
            <BiChevronLeft className={`inline ${servicesHovered ? 'opacity-100 ease-in duration-300 text-green text-2xl' : 'opacity-0 ease-in duration-300'}`} />
            <span className='opacity-90 hover:text-green ease-in duration-200 hover:font-medium'>Acerca de Mi</span>
            <BiChevronRight className={`inline ${servicesHovered ? 'opacity-100 ease-in duration-300 text-green text-2xl' : 'opacity-0 ease-in duration-300'}`} />
          </Link>
            <Link href="#works" onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1} className="flex items-center">
            <BiChevronLeft className={`inline ${worksHovered ? 'opacity-100 ease-in duration-300 text-green text-2xl' : 'opacity-0 ease-in duration-300'}`} />
            <span className='opacity-90 hover:text-green ease-in duration-200 hover:font-medium'>Habilidades y Experiencia</span>
            <BiChevronRight className={`inline ${worksHovered ? 'opacity-100 ease-in duration-300 text-green text-2xl' : 'opacity-0 ease-in duration-300'}`} />
            </Link>
            <Link href="#testimonials" onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2} className="flex items-center">
            <BiChevronLeft className={`inline ${notesHovered ? 'opacity-100 ease-in duration-300 text-green text-2xl' : 'opacity-0 ease-in duration-300'}`} />
            <span className='opacity-90 hover:text-green ease-in duration-200 hover:font-medium'>Proyectos</span>
            <BiChevronRight className={`inline ${notesHovered ? 'opacity-100 ease-in duration-300 text-green text-2xl' : 'opacity-0 ease-in duration-300'}`} />
            </Link>
            <Link href="#contact" onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3} className="flex items-center">
            <BiChevronLeft className={`inline ${contactsHovered ? 'opacity-100 ease-in duration-300 text-green text-2xl' : 'opacity-0 ease-in duration-300'}`} />
            <span className='opacity-90 hover:text-green ease-in duration-200 hover:font-medium'>Contacto</span>
            <BiChevronRight className={`inline ${contactsHovered ? 'opacity-100 ease-in duration-300 text-green text-2xl' : 'opacity-0 ease-in duration-300'}`} />
            </Link>
          </ul>
        </div>
        <div className={`end-nav flex space-x-10 items-center  ${below950 ? "space-x-5" : ""}`}>
              <RxHamburgerMenu className={`${below850 ? "block text-2xl" : "hidden"}`} onClick={() => setMobile(!isMobile)}/>
        </div>
      </div>
      </section>
  )
}

export default Header