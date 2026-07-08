import React from "react";
import { useState } from "react";
import logo from "../assets/logoTransparent.png";
import { navItems } from "../constant/constant";
import { Menu, X } from "lucide-react";

const Navbar = () => {
   const [ mobileDrawerOpen, setMobileDrawerOpen ] = useState(false);

   const toggleNavbar = () => {
      setMobileDrawerOpen(!mobileDrawerOpen);
    };
   
   return (
      <nav className="sticky top-0 z-50 backdrop-blur-lg border-b border-neutral-700/40 ml-3">
         <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="flex justify-between items-center h-20">
               <div className="flex items-center flex-shrink-0">
               <img
                  src={logo}
                  alt="Prime Web"
                  className="h-20 lg:h-26 w-auto 
                     transition-transform
                     duration-300
                     
                     hover:scale-105"
               />
               </div>
               <ul className="hidden lg:flex ml-10 gap-12">
                  {navItems.map((item, index) => (
                     <li key={index}>
                        <a className="text-base" href={item.href} className="relative
                           inline-block
                           py-1

                           text-gray-700
                           font-medium
                           transition-colors
                           duration-300
                           hover:text-blue-600

                           after:absolute
                           after:left-0
                           after:-bottom-1
                           after:h-[2px]
                           after:w-0
                           after:bg-blue-600
                           after:rounded-full
                           after:transition-all
                           after:duration-300
                           after:ease-out
                           hover:after:w-full"
                           >{item.label}</a>
                     </li>
                  ))}
               </ul>
               <div className="hidden lg:flex justify-center space-x-12 items-center">
                  <a href="#CTA" className="py-2.5 px-3 border rounded-md text-white bg-blue-600 mr-6
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
               <div className="flex lg:hidden flex-col justify-end">
                  <button onClick={toggleNavbar} className="
                     p-2
                     rounded-lg

                     transition-all
                     duration-300

                     hover:bg-neutral-100
                     hover:scale-105

                     active:scale-95
                  ">
                  {mobileDrawerOpen ? <X /> : <Menu size={28} />}
                  </button>
               </div>
            </div>
            {mobileDrawerOpen && (
               <div className="
                  fixed
                  top-20
                  left-0
                  w-full
                  
                  bg-white/95
                  backdrop-blur-xl
                  
                  border-b
                  border-neutral-200
                  
                  shadow-xl
                  
                  p-10
                  
                  flex
                  flex-col
                  items-center
                  
                  lg:hidden
                  "
               >
                  <ul>
                  {navItems.map((item, index) => (
                     <li key={index} className="py-4">
                        <a href={item.href} onClick={() => setMobileDrawerOpen(false)} className="
                           text-lg
                           font-medium
                       
                           text-neutral-700
                       
                           transition-colors
                           duration-300
                       
                           hover:text-blue-600
                        ">
                           {item.label}
                        </a>
                     </li>
                  ))}
                  </ul>
            </div>
            )}
         </div>
      </nav>
   )
}

export default Navbar;