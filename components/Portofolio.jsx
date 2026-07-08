import React from "react";
import { portofolioItems } from "../constant/constant";
import porto1 from "../assets/porto1.png";
import { ArrowRight } from "lucide-react";

const Portofolio = () => {

   return (
      <section>
         <div className="mb-15 py-12 px-20">
            <p className="uppercase text-blue-600 font-bold text-center">OUR PORTOFOLIO</p>
            <h4 className="text-3xl font-bold mt-4 mb-10 text-center">Some of Our Work</h4>
            <div className="grid grid-cols-4 gap-5">
               <div className="shadow-xl bg-white transition-all duration-300 ease-out
                  hover:-translate-y-1
                  hover:shadow-xl hover:shadow-blue-300/30
            
                  active:translate-y-0
                  active:scale-[0.98]
               ">
                  <img src={porto1} alt="Your browser do not support the photo tag." className="rounded-lg"/>
                  <p className="pt-3 pl-4">Grocify</p>
                  <p className="text-neutral-400 text-sm pl-4 mb-3">Landing Page</p>

                  <div className="inline-flex gap-1.5 justify-center items-center text-center ml-4 mb-3 mt-3 text-sm">
                     <a href="https://github.com/BluesZ154/Grocify-Landing-Page" className="text-blue-600 flex items-center gap-1
                        transition-all duration-300 ease-out

                        hover:-translate-y-1
                        hover:text-blue-700
                    
                        active:scale-[0.98]
                        group
                     ">
                        <span className="transition-transform duration-300 group-hover:-translate-y-0.5">
                           View Source
                        </span>

                        <span className="inline-flex transition-transform duration-300 group-hover:translate-x-1.5 group-hover:-translate-y-1 mt-1">
                           <ArrowRight size={15} />
                        </span>
                     </a>
                  </div>
               </div>
               {portofolioItems.map((item, index) => (
                  <div className="shadow-xl bg-white transition-all duration-300 ease-out
                     hover:-translate-y-1
                     hover:shadow-xl hover:shadow-blue-300/30
               
                     active:translate-y-0
                     active:scale-[0.98]
                  ">
                     <video autoPlay loop muted className="rounded-lg">
                        <source src={item.file} type="video/mp4" />
                        Your browser do not support the video tag.
                     </video>
                     <p className="pt-3 pl-4">{item.name}</p>
                     <p className="text-neutral-400 text-sm pl-4 mb-3">{item.category}</p>

                     <div className="inline-flex gap-1.5 justify-center items-center text-center ml-4 mb-3 mt-3 text-sm">
                     <a href={item.link} className="text-blue-600 flex items-center gap-1
                        transition-all duration-300 ease-out

                        hover:-translate-y-1
                        hover:text-blue-700
                    
                        active:scale-[0.98]
                        group
                     ">
                        <span className="transition-transform duration-300 group-hover:-translate-y-0.5">
                           View Source
                        </span>

                        <span className="inline-flex transition-transform duration-300 group-hover:translate-x-1.5 group-hover:-translate-y-1 mt-1">
                           <ArrowRight size={15} />
                        </span>
                     </a>
                  </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )  
}

export default Portofolio;