import React from "react";
import { whyChooseUsItems } from "../constant/constant";

const WhyChooseUs = () => {

   return (
      <div className="flex justify-center px-5 lg:px-0">
         <div className="bg-[#0C0233] lg:h-80 w-full h-263 md:h-150 lg:w-350 mb-20 rounded-2xl">
            <div className="flex flex-col lg:flex-row justify-around items-start mt-12 px-6 lg:pr-5 lg:pl-13">

               <div className="container w-full lg:w-180 flex flex-col justify-center items-center lg:items-start text-center lg:text-left mb-10 lg:mb-0 mr-0 lg:mr-4">
                  <p className="text-blue-500 text-xs font-bold mb-3">
                     WHY CHOOSE US
                  </p>

                  <h3 className="text-white text-2xl mb-3">
                     Why Work With
                     <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 text-transparent bg-clip-text">
                        {" "}Prime Web{" ?"}
                     </span>
                  </h3>

                  <p className="text-neutral-400 text-xs mb-3">
                     Kami tidak hanya membuat website, kami membantu bisnis anda tumbuh secara online.
                  </p>

                  <div className="hidden lg:flex justify-center space-x-12 items-center">
                     <a href="#CTA" className="py-2.5 px-3 rounded-md text-white bg-blue-600 mr-6 mt-2
                        transition-all duration-300 ease-out

                        hover:bg-blue-700
                        hover:-translate-y-1
                        hover:shadow-xl hover:shadow-blue-600/30
                  
                        active:translate-y-0
                        active:scale-[0.98]
                     ">
                        Start Your Project
                     </a>
                  </div>
               </div>

               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full mr-0 lg:mr-5">
                  {whyChooseUsItems.map((item, index) => {
                     const Logo = item.logo;

                     return (
                        <div
                           key={index}
                           className="flex flex-col gap-2.8 bg-[#0D024C] rounded-lg p-5 
                              transition-all
                              duration-300
                              hover:-translate-y-2
                              hover:shadow-md
                              hover:shadow-blue-800
                           "
                        >
                           <div>
                              <Logo size={40} className="text-blue-500 mb-4"/>
                           </div>

                           <h3 className="text-white mb-3">
                              {item.title}
                           </h3>

                           <p className="text-neutral-400 text-sm">
                              {item.text}
                           </p>
                        </div>
                     )
                  })}
               </div>

            </div>
         </div>
      </div>
   )
}

export default WhyChooseUs;