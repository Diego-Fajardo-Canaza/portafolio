import React, {useState, useEffect} from 'react'
import rightImage from "../public/js.png"
import leftImage1 from "../public/HTML5.png"
import leftImage2 from "../public/Java.png"
import Image from 'next/image'

const Works = () => {
  const [lower1200, setlower1200] = useState(false);
  const [lower850, setlower850] = useState(false);
  const [lower450, setlower450] = useState(false);

  useEffect(() => {
    function handleResize () {
      setlower1200(window.innerWidth<1200);
      setlower850(window.innerWidth<850);
      setlower450(window.innerWidth<450);

    }
    window.addEventListener('resize', handleResize);
    
      return () => {
        window.removeEventListener('resize', handleResize);
      };
  }, [])

  return (
    <section id='works' className='bg-gray3'>
      <hr className='text-green opacity-10' />
      <div className={`inner ${lower850 ? "" : "grid grid-cols-1"} m-auto pt-10 pb-10 text-white font-Roboto_mono ${lower1200 ? "w-11/12" : "w-10/12"}`}>
        <div className={`  ${lower850 ? "flex flex-col  justify-center items-center" : "grid grid-rows-3"}`}>
            <div className={`text1 ${lower850 ? "w-8/12 m-auto": ""}`}>
                <h1 className={` mb-2 ${lower450 ? "text-3.5xl": "text-4xl"}`}>Habilidades y Experiencia</h1>
                <p className='opacity-70'>las habilidades que poseo </p>
            </div>
            <div className={`image ${lower850 ? "mt-10": ""}`}>
                <Image className={` rounded-2xl shadow-4xl ${lower1200 ? "w-[150px]":"w-[250px]"} ${lower450 ? "w-80": ""}`} src = {rightImage} alt = "Image" />
            </div>
            <div className={`text2  m-auto ${lower850 ? "w-8/12 mt-10 mb-14": "w-9/12 mt-20 "}`}>
              <h1 className={` mb-5 ${lower450 ? "text-3xl": "text-3.5xl"}`}>Conocer mas en </h1>
              <p className='text-xl mb-10 opacity-60'>Java scrip, Java, HTML5, css,lorem imsump</p>
              <p className='text-green underline underline-offset-2'>Contactactame</p>
            </div>
        </div>
        <div className="left grid grid-row-2 gap-20">
            <div className="image1 flex justify-center">
            <Image className={`rounded-2xl shadow-4xl aspect-auto ${lower1200 ? "w-[150px]":"w-[400px]"} ${lower450 ? "w-000": ""} `} src = {leftImage1} alt = "Image" />
            </div>
            <div className="image1 flex justify-center">
            <Image className={`rounded-2xl shadow-4xl  aspect-auto ${lower1200 ? "w-[200px]":"w-[300px]"} ${lower450 ? "w-80": ""}`} src = {leftImage2} alt = "Image" />
            </div>
        </div>
        </div>
    </section>
  )
}

export default Works