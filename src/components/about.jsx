import React from "react";
import image from "../assets/main-image.jpg";

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between my-6 pl-[3rem] gap-8 max-w-[1700px]" id="about">
      <div className="lg:w-1/4">
        <img src={image} alt="main" className="rounded-lg" />
      </div>
      <div className="lg:w-3/4">
        <h1 className="text-3xl font-bold mb-4">
          Especialistas em consertos <br /> & manutenção
        </h1>
        <p className="text-gray-600">
          Sua casa merece cuidados especiais. Desde 1987, somos referência em
          conserto de eletrodomésticos em Campestre-MG.
          <br /> Nossa equipe de técnicos
          especializados oferece soluções rápidas e eficientes para diversos
          tipos de equipamentos.
          <br />  Conte com a nossa experiência para deixar seus
          eletrodomésticos funcionando como novos.
        </p>
      </div>
    </div>
  );
};

export default About