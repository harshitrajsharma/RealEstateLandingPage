import React from "react";

export default function FooterList(props){
    return(
        <div className="flex flex-col gap-4">
            <div className="text-gray-400">{props.heading}</div>
            <div className="flex flex-col gap-2">
            <a href={props.link1}>{props.opt1}</a>
            <a href={props.link2}>{props.opt2}</a>
            <a href={props.link3}>{props.opt3}</a>
            <a href={props.link4}>{props.opt4}</a>
            </div>
        </div>
    )
}