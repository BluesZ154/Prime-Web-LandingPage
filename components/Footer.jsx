import React from "react";
import logo from "../assets/logoTransparent.png";
import { iconFooter, contactItems, navItems } from "../constant/constant";

const Footer = () => {

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

               <input
                  type="text"
                  placeholder="Enter Your Email"
                  className="text-sm mt-4 rounded-md border border-blue-950 p-3 text-white w-full"
               />
            </div>

         </div>
      </div>
   )
}

export default Footer;