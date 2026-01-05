import React from 'react'
import Landing from "./components/hero/Landing";
import About from './components/other/About';
import Skills from './components/other/Skills';
import Experience from './components/other/Experience';
import Projects from './components/other/Projects';
import EducationCertificate from './components/other/EducationCertificate';
import Freelance from './components/other/Freelance';
import Contact from './components/other/Contact';
import Footer from './components/other/Footer';


export default function App() {
  return (
    <>
   <Landing />
   <About />
   <Skills />
   <Experience />
   <Projects />
   <EducationCertificate />
   <Freelance />
   <Contact />
   <Footer />
    </>
  )
}
