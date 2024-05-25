import React from "react";

export default function StatsCard(props){
    return(
        <div className="bg-neutral-300 hover:bg-slate-900 flex flex-col justify-center items-center py-8 px-6 gap-4  hover:text-amber-400 h-80 w-60" >
            <div>
                <img src={props.image} />
            </div>
            <div className="text-4xl font-bold" >{props.stats}</div>
            <div>
                <p>{props.text}</p>
            </div>
        </div>
    )
}