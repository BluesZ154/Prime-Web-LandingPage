import React from "react";
import { serviceItems } from "../constant/constant";

const Services = () => {

   return (
      <div className="mb-20 mx-25">
         <div className="flex flex-col justify-center items-center">
            <p className="text-sm font-bold text-blue-500 tracking-wider mb-3">OUR SERVICES</p>
            <p className="text-3xl font-bold tracking-normal mb-8">Solution for Your Business</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9">
               {serviceItems.map((item, index) => {
                  const Logo = item.logo;

                  return (
                     <div key={index} className="flex flex-col gap-2 items-center justify-start text-center px-5 py-5 bg-white shadow-xl rounded-xl transition-all
                        duration-300
                        hover:-translate-y-2
                        hover:shadow-xl">
                        <div>
                           <Logo size={40} className="text-blue-600 mb-3"/> 
                        </div>
                        <p className="font-bold">{item.title}</p>
                        <p className="text-neutral-400">{item.text}</p>
                     </div>
                  )
               })}
            </div>
         </div>
      </div>
   )
}

export default Services;