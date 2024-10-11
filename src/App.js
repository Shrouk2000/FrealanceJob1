import React from "react";
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import AboutMe from './components/aboutme/AboutMe';
import Skills from "./components/skills/Skills";
function App(){
  return (
    <>
        <Navbar/>
        <Header/>
        <AboutMe/>
        <Skills/>
    </>

  );
}
export default App;