import React from "react";
import { Send, ArrowRight } from "lucide-react";

const CTA = () => {
   
   return (
      <div className="mb-10 flex items-center justify-center">
         <div className="flex flex-row bg-blue-600 rounded-lg w-350 h-30 items-center">
            <div className="rounded-full border-3 border-white p-4 flex items-center justify-center text-center ml-18 mr-3">
               <Send size={35} className="text-white"/>
            </div>
            <div className="ml-10">
               <p className="text-xs text-neutral-200 mb-0.5">Ready to Get Started?</p>
               <p className="text-xl text-white font-bold mb-1">Ready to Build your Business Website?</p>
               <p className="text-sm text-neutral-200">Konsultasikan kebutuhan Anda sekarang. Gratis!</p>
            </div>
            <div className="flex justify-center space-x-12 items-center">
               <a href="#CTA" className="inline-flex gap-2 items-center ml-145 py-3 px-4 rounded-md text-blue-600 font-bold bg-white mr-6
                  transition-all duration-300 ease-out

                  hover:-translate-y-1
                  hover:shadow-xl hover:shadow-blue-900/20
                  hover:text-blue-700
              
                  active:scale-[0.98]
                  group
               ">
                  Start Your Project <ArrowRight className="transition-transform duration-300 group-hover:translate-x-0.5"/>
               </a>
            </div>
         </div>
      </div>
   )
}

export default CTA;