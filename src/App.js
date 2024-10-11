import React from "react";
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import AboutMe from './components/aboutme/AboutMe';
import Skills from "./components/skills/Skills";
import Experience from "./components/experience/Experience";
function App(){
  return (
    <>
        <Navbar/>
        <Header/>
        <AboutMe/>
        <Skills/>
        <Experience/>
    </>

  );
}
export default App;