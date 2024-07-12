import React from 'react'
import Companies from "../components/Companies/Companies";
import Contact from "../components/Contact/Contact";
// import Footer from "../components/Footer/Footer";
import GetStarted from "../components/GetStarted/GetStarted";
// import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Residencies from "../components/residencies/Residencies";

import Value from "../components/Value/Value";

const Website = () => {
  return (
    <div className="App">
      <div>
        <Hero />
      </div>
      <Companies />
      <Residencies/>
      <Value/>
      <Contact/>
      <GetStarted/>
    </div>
  )
}

export default Website
