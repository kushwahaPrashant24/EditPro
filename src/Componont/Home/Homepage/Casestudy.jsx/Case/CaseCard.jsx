import React from "react";
import Card from "../Case/Case1.jsx"
import CaseConst from "../Case/CaseConst.jsx"


function createCard(Casestudy) {
    return <Card 
        key= {Casestudy.id}
        name= {Casestudy.name}
     />

    
}


function CaseCard() {
    console.log(CaseConst);
    return (
        <div className="App"></div>
    )
}

export default CaseCard;