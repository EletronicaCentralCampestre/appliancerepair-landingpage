import React from "react";
import video from "../assets/video-home.mp4"; // Substitua pelo caminho do seu vídeo

const Home = () => {
  const concordancias = {
    refrigerador: 'no',
    fogão: 'no',
    "maquina de lavar": 'na',
    microondas: 'no',
    geladeira: 'na',
    outros: 'em',
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nome = event.target.nome.value;
    const servico = event.target.servico.value;

    // Construindo a URL do WhatsApp
    const artigo = concordancias[servico] || 'em'; // Valor padrão caso o serviço não esteja no objeto
    const whatsappUrl = `https://wa.me/+5535998784997?text=Olá,%20eu%20sou%20${nome}%20e%20estou%20com%20um%20problema ${artigo} ${servico} e queria fazer um orçamento.`;

    // Redirecionando para a URL do WhatsApp
    window.location.href = whatsappUrl;
  };

  return (
    <div className="bg-blue-500 min-h-[90vh] flex flex-col items-center justify-center" id="home">
      <div className="text-center py-9">
        <h1 className="primary-heading font-bold text-white mb-4">
          ATENDEMOS TODOS <br />
          APARELHOS DE ALTA QUALIDADE E BÁSICOS
        </h1>
        <p className="text-white text-lg">
          Conserto de Geladeira, Fogão, Maquina de Lavar, Microondas, Fornos de
          todas as marcas e modelos
        </p>
      </div>
      <hr className="w-4/5 border-t-2 border-white pb-[40px]" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 my-8">
            {/* Seu vídeo aqui */}
            <video controls autoplay loop muted className="w-full h-96">
              <source src={video} type="video/mp4" />
            </video>
          </div>
          <div className="w-full md:w-1/3 px-4">
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mt-4">
            <h1 className="text-gray-700 text-md font-bold mb-2">Com o que podemos te ajudar?</h1>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nome">
                Nome
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus/shadow-outline mb-3" id="nome" type="text" name="nome" />
              
              <label className="block text-gray-700 text-sm font-bold " htmlFor="serviço">
                O que está com problema?
              </label>
              <select name="servico" className="border border-gray rounded px-4 py-2 text-gray-700 text-sm font-semibold mb-2 shadow-md ">
                <option value="geladeira">Geladeira</option>
                <option value="fogão">Fogão</option>
                <option value="maquina de lavar">Maquina de Lavar</option>
                <option value="microondas">Microondas</option>
                <option value="outros">Outros</option>
              </select>
            </div>
            {/* Outros campos do formulário (email, telefone, etc.) */}
            <div className="flex justify-center">
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-5 rounded focus:outline-none focus:shadow-outline" type="submit"> 
              Enviar
            </button>
            </div>
          </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
