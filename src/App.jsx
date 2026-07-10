import { useState } from 'react'
import "@fontsource/inter";
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Services from '../components/Services'
import WhyChooseUs from '../components/WhyChooseUs'
import Process from '../components/Process'
import CTA from '../components/CTA'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Portofolio from '../components/Portofolio'

function App() {

  return (
    <>
      <Navbar />
      <div className='max-w-8xl pt-1 mx-8 lg:ml-20 lg:mr-5'>
         <section id='home'>
            <Hero />
         </section>
      </div>
      <div className='max-w-8xl pt-1 mx-auto'>
         <Stats />
         <section id='services'>
            <Services />
         </section>
         <section id='whychooseus'>
            <WhyChooseUs />
         </section>
         <section id='portofolio'>
            <Portofolio />
         </section>
         <section id='process'>
            <Process />
         </section>
         <section id='CTA'>
            <CTA />
         </section>
         <section id='contact'>
            <Contact />
         </section>
         <Footer />
      </div>
    </>
  )
}

export default App
