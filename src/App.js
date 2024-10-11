import React from "react";
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import AboutMe from './components/aboutme/AboutMe';
import Skills from "./components/skills/Skills";
import Experience from "./components/experience/Experience";
import TrainingAndCertifications from "./components/trainingandcertificates/TrainingAndCertifications";
function App(){
  return (
    <>
        <Navbar/>
        <Header/>
        <AboutMe/>
        <Skills/>
        <Experience/>
        <TrainingAndCertifications/>
    </>

  );
}
export default App;