import React from "react";

export default function ValuesCards(props){
    return(
        <div className=" text-white  hover:text-slate-900 hover:bg-amber-300 p-4">
            <h3 className="text-md font-bold mb-4">{props.heading}</h3>
            <p>{props.content}</p>
        </div>
    )
}