import React from 'react'
import Logo from "../assets/eletronicacentral-logo.png";
import { Linkedin, Youtube, Facebook} from "lucide-react";

const Footer = () => {
    const copyInput = () => {
        var copyText = "https://eletronicacentral.vercel.app/";
    
        navigator.clipboard.writeText(copyText);
        alert("Link copiado: " + copyText);
      }
  return (
    <div className="footer-wrapper container mx-auto py-24 flex" id="contato">
        <div className="footer-section-one justify-center">
            <div className="footer-logo-container max-w-xs">
                <img src={Logo} alt="logo" className="w-24" />
            </div>
            <div className="footer-icons mt-5 ">
                <a href="/" className=''><Youtube size={28}/></a>
                <a href="/" className='mr-4 h-6 w-6'><Facebook size={28} /></a>
                <a href="/" className='mr-4 h-6 w-6'><Linkedin size={28}/></a>
                <a href="/" className='mr-4 h-6 w-6'><Linkedin size={28}/></a>
            </div>
        </div>
    <div className="footer-section-two flex-1 flex justify-end">
      <div className="footer-section-columns flex flex-col min-w-[190px]">
        <span className='mx-2 my-1 font-semibold text-gray-500 cursor-pointer'>Qualidade</span>
        <span className='mx-2 my-1 font-semibold text-gray-500 cursor-pointer'>Ajuda</span>
        <span className='mx-2 my-1 font-semibold text-gray-500 cursor-pointer' onClick={copyInput}>Compartilhar</span>
        <span className='mx-2 my-1 font-semibold text-gray-500 cursor-pointer'>Work</span>
      </div>
      <div className="footer-section-columns flex flex-col min-w-[190px]">
      <span className='mx-2 my-1 font-semibold text-gray-500 cursor-pointer'>35998784997</span>
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