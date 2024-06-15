import React from "react";
import "./IndustriesData.css"
import Card from "./Card";
import Data from "./DataConst.jsx";

function createcards(Regiment){
    return <Card 
          
          key= {Regiment.id}
          name= {Regiment.name}
          img= {Regiment.img}
          

    />
   }




function IndustriesData () {
    return <> <div className="flex flex-col justify-center items-center gap-16 m-10">{Data.map(createcards)}</div>
</>

}


export default IndustriesData;