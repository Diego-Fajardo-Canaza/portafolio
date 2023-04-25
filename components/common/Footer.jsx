import React from "react";

const Footer = () => {
  return (
    <section id="contact" className="bg-gray3 font-Dm_Sans">
      <div className="text-white flex flex-col items-center  py-16">
        <div className="w-36 h-12 border flex items-center justify-center my-8 hover:border-green cursor-pointer">
          <h1 className="text-2xl">Contactame</h1>

        </div>
        <div className="icons flex space-x-10 text-3xl mb-8">
        </div>
        <p className="tracking-wider text-center">
          Diego Fajardo | &#169; hecho con react y next js | Footer
        </p>
      </div>
    </section>
  );
};

export default Footer;
