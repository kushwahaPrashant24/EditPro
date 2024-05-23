import React from "react";
                 




    function Cards(props) {
        return  <div className="flex flex-col justify-center items-center">
       
       
        
        
        <div className="  h-36 w-36 -mt-5"><img className="rounded-full h-36 w-36 object-cover" src={props.img}/></div>
        <h2 className="text-2xl font-black text-head2">{props.name}</h2>
       
      
        </div>
      }

     


export default Cards;