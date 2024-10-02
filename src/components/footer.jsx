import React from 'react'
import Logo from "../assets/eletronicacentral-logo.png";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    const copyInput = () => {
        var copyText = "O melhor lugar para consertar seus eletrodomesticos! https://eletronicacentral.vercel.app/";
    
        navigator.clipboard.writeText(copyText);
        alert("Link copiado: " + copyText);
      }
  return (
    <div className="footer-wrapper py-[90px] pt-24 flex " id="contato">
        <div className="footer-section-one  ">
            <div className="footer-logo-container ml-8 max-w-[160px]  ">
                <img src={Logo} alt="logo" className="w-24" />
            </div>
            <div className="footer-icons mt-5  ml-3 flex">
                <a href="/" className='mt-8 mr-4 text-secondary'><FaYoutube size={32} /></a>
                <a href="/" className='mt-8 mr-4 text-secondary'><FaFacebook size={32} /></a>
                <a href="/" className='mt-8 mr-4 text-secondary'><FaInstagram size={32} /></a>
            </div>
        </div>
    <div className="footer-section-two flex-1 flex justify-end">
      <div className="footer-section-columns  flex flex-col min-w-[190px]">
        <span className='mx-2 my-1 font-semibold text-gray-500 cursor-pointer'>Qualidade</span>
        <a href="#home"><span className='mx-2 my-1 font-semibold text-gray-500 cursor-pointer'>Ajuda</span></a>
        <span className='mx-2 my-1 font-semibold text-gray-500 cursor-pointer' onClick={copyInput}>Compartilhar</span>
        <span className='mx-2 my-1 font-semibold text-gray-500 cursor-pointer'>Work</span>
      </div>
      <div className="footer-section-columns flex flex-col min-w-[190px]">
        <span className='mx-2 my-1 font-semibold text-gray-500 cursor-pointer'><a href="tel:+5535998784997" >(35)998784997 - Matheus</a></span>
        <span className='mx-2 my-1 font-semibold text-gray-500 cursor-pointer'><a href="tel:+553598996519">(35)99899-6519 - Dalmo</a></span>
        <span className='mx-2 my-1 font-semibold text-gray-500 cursor-pointer'>eletronicacentral_campestre@hotmail.com</span>
        <span className='mx-2 my-1 font-semibold text-gray-500 cursor-pointer'>Rua Poços de Caldas, 85</span>
        
      </div>
      <div className="footer-section-columns flex flex-col min-w-[190px]">
        <span className='mx-2 my-1 font-semibold text-gray-500 cursor-pointer'>Terms & Conditions</span>
        <span className='mx-2 my-1 font-semibold text-gray-500 cursor-pointer'>Privacy Policy</span>
        <span className='mx-2 my-1 font-semibold text-gray-500 cursor-pointer'>Feito com ❤ por <a href="https://www.linkedin.com/in/thiagoandrade072/">Thiago Silva Andrade</a></span>
      </div>
    </div>
  </div>
  )
}

export default Footer