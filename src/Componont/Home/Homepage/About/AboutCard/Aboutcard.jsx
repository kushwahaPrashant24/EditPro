import React from "react";
import AboutConst from "./Const";
import Card from "./Card";


function createCard(aa) {
    return <Card
    
     />

}


function Aboutcard() {
    return <div>
        {AboutConst.map((aa) => (
          <div> {createCard(aa)} </div>
        ))}
    </div>
}

export default Aboutcard;