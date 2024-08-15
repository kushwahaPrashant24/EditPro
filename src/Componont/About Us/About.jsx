import React from "react";
import Main from "./Main/Main";
import Story from "./Story/Story";
import Achive from "./Achive/Achive";
import Values from "./Values/Values";
import Director from "./Director/Directors";
import Design from "./Design/Design";
import Impact from "./Impact/Impact";
import Opportunities from "./Opportunities/Opportunities";

function About() {
      return <>
         
           <div  className="text-white">
           <section><Main /></section>
            <section> 
            <section><Achive /></section>
            <Story />
            <Values />
            <Director />
            <Design />
            
            <section></section>
            <section></section>

            <Impact />
            <Opportunities /></section>
          
            </div>
          
      </>
}

export default About;