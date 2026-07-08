import React from "react";
import macbookPhone from "../assets/macbookphone.png"

const Hero = () => {
   
   return (
      <div className="flex items-center mt-3 lg:mt-10">
         <div className="flex-col ml-3">
            <p className="text-xs text-blue-600 font-bold mb-4 ml-1">
               PROFESSIONAL WEB SOLUTIONS
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl text-start tracking-wider font-[750] mb-8">
               Professional Website That Help Your Business
               <span className="text-blue-600">
                  {" "}Grow
               </span>
            </h1>
            <p className="text-sm mt-3 text-neutral-500 ml-1">Kami merancang dan membangun website modern yang cepat, aman, dan dirancang untuk meningkatkan kredibilitas bisnis Anda</p>
            <div className="flex justify-center my-10 justify-start ml-1">
               <a href="#CTA" className="text-white  rounded-md bg-blue-600 px-4 py-3 mr-7
                  transition-all duration-300 ease-out

                  hover:bg-blue-700
                  hover:-translate-y-1
                  hover:shadow-xl hover:shadow-blue-600/30
            
                  active:translate-y-0
                  active:scale-[0.98]
               ">
                  Start your project
               </a>
               <a href="#portofolio" className="font-bold border border-blue-600 text-blue-600 px-4 py-3 mx-3 rounded-md border-2
                  transition-all duration-300 ease-out

                  hover:bg-blue-500
                  hover:text-white
                  hover:-translate-y-1
                  hover:shadow-lg hover:shadow-blue-600/20
              
                  active:translate-y-0
                  active:scale-[0.98]
               ">
                  View Portofolio
               </a>
            </div>
         </div>
         <div>
            <img src={macbookPhone} alt="" className="w-550" />
         </div>
      </div>
   )
}

export default Hero;