import React from "react";
import { statItems } from "../constant/constant";

const Stats = () => {

   return (
      <>
         <div className="flex justify-center">
            <div className="bg-[#0C0233] h-45 w-350 mb-20 rounded-2xl">
               <div className="flex flex-row justify-around items-start mt-7 pr-7 pl-10">
                  {statItems.map((item, index) => (
                     <div key={index} className={`flex flex-row w-70 pr-3 
                        ${index !== statItems.length-1 ? "border-r border-blue-100/15" : ""}`}
                     >
                        <div className="mt-3">
                           <span className="text-blue-700">{item.logo}</span>
                        </div>
                        {item.header ? (
                           <div className="flex flex-col ml-5">
                              <h3 className="text-white text-2xl">{item.header}</h3>
                              <p className="text-white text-sm mt-1">{item.desc}</p>
                              <p className="text-neutral-400 text-sm mt-3">{item.text}</p>
                           </div>
                        ) : (
                           <div className="flex flex-col ml-5">
                              <h3 className="text-white text-2xl">{item.header}</h3>
                              <p className="text-white text-base mt-1">{item.desc}</p>
                              <p className="text-neutral-400 text-sm mt-3">{item.text}</p>
                           </div>
                        )}
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </>
   )
}

export default Stats