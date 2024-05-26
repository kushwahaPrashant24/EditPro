import React from "react";



function Card(props) {
    return <>
       <div className="flex flex-col justify-center items-center bg-zinc h-80">
        <div className=""><p>{props.review}</p></div>
        <h2 className="text-head text-xl mt-10">{props.name}</h2>
        </div>
    </>
}

export default Card;