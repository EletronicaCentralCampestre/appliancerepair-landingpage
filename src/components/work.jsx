import React from "react";

import { Clock, Car, Hammer } from "lucide-react";
const Work = () => {
  const workInfoData = [
    {
      Icon: Hammer,
      title: "Trabalho bem feito",
      text: "Profissionais qualificados e com experiência.",
    },
    {
      Icon: Car,
      title: "Atendimento rápido",
      text: "Vamos até você, para melhor atender suas necessidades.",
    },
    {
      Icon: Clock ,
      title: "Horários flexíveis",
      text: "Atendemos em horários flexíveis, para melhor atender você.",
    },
  ];
  return (
    <div className="work-section-wrapper mt-[15rem] sm:mt-[5rem]" id="work">
      <div className="work-section-top flex justify-center items-center flex-col">
        <p className="primary-subheading sm:text-center text-center max-w-[600px] font-bold text-secondary text-xl">Funciona</p>
        <h1 className="primary-heading text-[#4c4c4c] max-w-[700px]">Como funciona?</h1>
        <p className="primary-text text-center max-w-[500px] text-gray-500 my-6">
          Você agenda uma avaliação, e vai um profissional para analiser e realizar os reparos. Simples assim!
        </p>
      </div>
      <div className="work-section-bottom mt-[5rem] flex justify-center items-center flex-wrap">
        {workInfoData.map((data) => (
          <div className="work-section-info sm:mt-6 w-[290px] min-h-[350px] p-4 px-8 flex flex-col justify-center items-center text-center rounded-lg text-gray-500 my-4 " key={data.title}>
            <div className="info-boxes-img-container">
              <data.Icon alt="" className="mt-6 w-[90px] h-full" color="#33599C"/>
            </div>
            <h2 className="my-4 text-[1.5rem] font-extrabold">{data.title}</h2>
            <p className="flex-1 items-center font-semibold">{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
