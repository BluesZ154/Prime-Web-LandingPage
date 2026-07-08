import React, { useRef, useState } from "react";
import { contactItems } from "../constant/constant";
import { ArrowRight, Headset, Mail, Phone, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {

   const form = useRef();

   const [ loading, setLoading ] = useState(false);
   const [ fromEmail, setFromEmail ] = useState("");
   const [ fromName, setFromName ] = useState("");
   const [ projectType, setProjectType ] = useState("");
   const [ message, setMessage ] = useState("");

   const sendMessage = async (e) => {
      e.preventDefault();
      try {
         setLoading(true);

         await emailjs.sendForm(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_PUBLIC_KEY,
         )

         alert("Message sent successfully!");
         form.current.reset();
      } catch (error) {
         console.error(error);
         alert("Failed to send message.");
      } finally {
         setLoading(false);
      }
   };

   const isFormValid = 
      fromName.trim() !== "" &&
      fromEmail.trim() !== "" &&
      projectType.trim() !== "" &&
      message.trim() !== "" &&
      !loading;
   
  return (
   <div className="mx-25 mb-20">
      <div className="flex flex-row gap-10">
         <div className="flex flex-col items-start justify-start">
            <div>
               <p className="text-xs text-blue-600 font-bold">CONTACT US</p>
               <p className="text-3xl mt-1">Let's Talk About Your Project</p>
            </div>   
            <div className="mt-2">
               <p className="text-sm text-neutral-500">Punya proyek atau pertanyaan?</p>
               <p className="text-sm text-neutral-500">Kami siap membantu Anda.</p>
            </div>
            <div className="mt-4">
               {contactItems.map((item, index) => {
               const Logo = item.logo;

               return (
                  <div key={index} className="mt-1.5">
                     <div className="inline-flex gap-3">
                        <Logo className="text-blue-600" />
                        <p className="text-neutral-500 text-sm">{item.text}</p>
                     </div>
                  </div>
               );
               })}
            </div>
         </div>
         
         <form 
            onSubmit={sendMessage}
            ref={form}
         >
            <div className="shadow-xl rounded-xl p-6">
               <div className="grid grid-cols-2 gap-5">
                  <input name="from_name" type="text" placeholder=" Your Name" className="shadow px-2.5 py-2 shadow-blue-300
                     transition-all duration-300 ease-out

                     hover:-translate-y-0.5
                     hover:shadow-xl hover:shadow-blue-600/30
               
                     active:translate-y-0
                     active:scale-[0.98]
                  "
                     value={fromName}
                     onChange={(e) => setFromName(e.target.value)}
                  />
                  <input name="from_email" type="text" placeholder=" Your Email" className="shadow px-2.5 py-2 shadow-blue-300
                     transition-all duration-300 ease-out

                     hover:-translate-y-0.5
                     hover:shadow-xl hover:shadow-blue-600/30
               
                     active:translate-y-0
                     active:scale-[0.98]
                  "
                     value={fromEmail}
                     onChange={(e) => setFromEmail(e.target.value)}
                  />
                  <select name="project_type" placeholder="Your Project Type" className="shadow px-2.5 py-2 shadow-blue-300
                     transition-all duration-300 ease-out

                     hover:-translate-y-0.5
                     hover:shadow-xl hover:shadow-blue-600/30
               
                     active:translate-y-0
                     active:scale-[0.98]
                  "
                     value={projectType}
                     onChange={(e) => setProjectType(e.target.value)}
                  >
                     <option value="">Select Project</option>
                     <option value="businessWebsite">Business Website</option>
                     <option value="ecommerceWebsite">E-Commerce Website</option>
                     <option value="landingPage">Landing Page</option>
                     <option value="saasWebsite">Saas Website</option>
                     <option value="websiteMaintainance">Website Maintainance</option>
                     <option value="websiteDeployment">Website Deployment</option>
                     <option value="websiteOptimization">Website Optimization</option>
                     <option value="uiuxDesign">UI/UX Design</option>
                  </select>
               </div>
               <div className="mt-5">
                  <textarea name="message" placeholder=" Your Message" className="w-112 h-23 shadow px-2.5 py-2 shadow-blue-300
                     transition-all duration-300 ease-out

                     hover:-translate-y-0.5
                     hover:shadow-xl hover:shadow-blue-600/30
               
                     active:translate-y-0
                     active:scale-[0.98]
                  "
                     value={message}
                     onChange={(e) => setMessage(e.target.value)}
                  />
               </div>
               <button className={`
                  flex items-center justify-center gap-2 p-2 rounded-md text-white
                  text-sm tracking-wider w-113 mt-3 transition-all duration-300

                  ${
                     !isFormValid || loading
                        ? "bg-blue-600/50 cursor-not-allowed opacity-60"
                        : "bg-blue-600 hover:bg-blue-700 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-600/30 active:translate-y-0 active:scale-[0.98] group"
                  }
               `}
                  disabled={!isFormValid}
                  type="submit"
               >
                  <span>
                     { loading ? "Sending..." : "Send Message" }
                  </span>
                  
                  {!loading && (
                     <span>
                        <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-0.5"/>
                     </span>
                  )}
               </button>
            </div>
         </form>

         <div className="shadow-xl rounded-xl p-6 h-52">
            <div>
               <div className="flex border-b border-neutral-600/30">
                  <div className="rounded-full bg-blue-100 p-2.5 w-14 h-14 flex items-center mt-3">
                     <Headset size={35} className="text-blue-600"/>
                  </div>
                  <div className="ml-5">
                     <p className="text-xl mb-1 mt-1">Free Consultation</p>
                     <p className="text-sm text-neutral-500 mt-2 mb-5">Diskusikan kebutuhan proyek Anda bersama tim kami secara gratis</p>
                  </div>
               </div>
            </div>
            <div className="grid grid-cols-2">
               <a href="mailto:alihuang154@gmail.com" className="inline-flex gap-2 bg-blue-600 text-white rounded-md text-center p-2 w-45 mt-4 pl-3 justify-center items-center
                  transition-all duration-300 ease-out

                hover:bg-blue-700
                  hover:-translate-y-1
                  hover:shadow-xl hover:shadow-blue-600/30
            
                  active:translate-y-0
                  active:scale-[0.98]
               ">
                  Contact By Email <span><Mail size={20} /></span>
               </a>
               <a 
                  href="https://wa.me/6287736830775" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex gap-3 bg-white text-blue-600 rounded-md text-center p-2 w-45 mt-4 pl-3 border-2 items-center justify-center
                  transition-all duration-300 ease-out

                  hover:bg-blue-500
                  hover:text-white
                  hover:-translate-y-1
                  hover:shadow-lg hover:shadow-blue-600/20
              
                  active:translate-y-0
                  active:scale-[0.98]
               ">
                  Whatsapp <span><Phone size={20}/></span>
               </a>
            </div>
         </div>
      </div>
   </div> 
  );
};

export default Contact;