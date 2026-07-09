import React, { useState, useRef } from "react";
import logo from "../assets/logoTransparent.png";
import { iconFooter, contactItems, navItems } from "../constant/constant";
import { GrSend } from "react-icons/gr";
import emailjs from "@emailjs/browser";

const Footer = () => {

   const [fromEmail, setFromEmail] = useState("");
   const [loading, setLoading] = useState(false);

   const form = useRef();
   const isFormValid = fromEmail.trim() !== "";

   const sendNewsletter = async (e) => {
      e.preventDefault();

      try {
         setLoading(true);

         await emailjs.sendForm(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE2_ID,
            form.current,
            import.meta.env.VITE_PUBLIC_KEY,
         )

         alert("Berhasil berlangganan newsletter!");
         form.current.reset();
      } catch (error) {
         console.error(error);
         alert("Gagal mengirim. Silakan coba lagi.");
      } finally {
         setLoading(false);
      }
   };

   return (
      <div>
         <div className="bg-[#02073b] h-auto lg:h-70 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 items-start px-6 lg:pr-6 py-10 lg:py-0">

            <div className="mx-0 lg:mx-15 flex flex-col items-center lg:items-start text-center lg:text-left">
               <img src={logo} alt="" className="h-27 w-45"/>

               <p className="text-neutral-300 text-sm font-normal mb-4">
                  Kami membantu bisnis Anda tampil profesional di dunia digital dengan website modern, cepat, dan efektif
               </p>

               <div className="grid grid-cols-4 gap-2">
                  {iconFooter.map((item, index) => {
                     const Icon = item.icon;

                     return (
                        <div
                           key={index}
                           className="rounded-full h-8 w-8 bg-blue-950 flex items-center justify-center"
                        >
                           <Icon size={20} className="text-white"/>
                        </div>
                     )
                  })}
               </div>
            </div>

            <div className="flex flex-col gap-2 pt-0 lg:pt-11 ml-0 lg:ml-13 text-center lg:text-left">
               <h4 className="text-white">
                  Quick Links
               </h4>

               {navItems.map((item, index) => (
                  <a
                     key={index}
                     href={item.href}
                     className="text-neutral-300 font-normal text-sm"
                  >
                     {item.label}
                  </a>
               ))}
            </div>

            <div className="flex flex-col gap-2 pt-0 lg:pt-11 text-center lg:text-left">
               <h4 className="text-white">
                  Services
               </h4>

               <p className="text-neutral-300 font-normal text-sm">Business Website</p>
               <p className="text-neutral-300 font-normal text-sm">E-Commerce Website</p>
               <p className="text-neutral-300 font-normal text-sm">Landing Page</p>
               <p className="text-neutral-300 font-normal text-sm">Website Optimization</p>
               <p className="text-neutral-300 font-normal text-sm">Website Maintainance</p>
            </div>

            <div className="flex flex-col gap-3 pt-0 lg:pt-11 text-center lg:text-left">
               <h4 className="text-white">
                  Contact Us
               </h4>

               {contactItems.map((item, index) => {
                  const Logo = item.logo;

                  return (
                     <div
                        key={index}
                        className="inline-flex gap-3 text-neutral-300 font-normal text-sm justify-center lg:justify-start"
                     >
                        <Logo size={20}/>
                        <p>{item.text}</p>
                     </div>
                  )
               })}
            </div>

            <div className="flex flex-col gap-3 pt-0 lg:pt-11 text-center lg:text-left">
               <h4 className="text-white">
                  Newsletter
               </h4>

               <p className="text-neutral-300 font-normal text-sm">
                  Dapatkan tips dan insight seputar website dan digital bisnis.
               </p>

               <form
                  onSubmit={sendNewsletter}
                  ref={form}
               >
                  <div className="inline-flex gap-2 items-center justify-center mr-3">
                     <input
                        name="from_email"
                        type="text"
                        placeholder="Enter Your Email"
                        className="text-sm mt-4 rounded-md border border-blue-950 p-3 text-white w-full"
                        onChange={(e) => setFromEmail(e.target.value)}
                        value={fromEmail}
                     />
                     <button 
                        className={`rounded-md w-15 h-11 mt-3.5 flex items-center justify-center transition-all duration-200
                           ${
                           !isFormValid || loading
                              ? "bg-gray-500 cursor-not-allowed opacity-60"
                              : "bg-blue-600 hover:bg-blue-700 cursor-pointer"
                           }`}
                        type="submit"
                        disabled={loading || !isFormValid}
                     >
                        <span><GrSend className="text-white"/></span>
                     </button>
                  </div>
               </form>
            </div>

         </div>
      </div>
   )
}

export default Footer;