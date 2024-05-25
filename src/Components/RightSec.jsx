import React from "react";

export default function RightSec(props) {
    return (
        <div className="container px-5 py-8 lg:px-10 xl:px-16 lg:py-6 mx-auto flex flex-col md:flex-row xl:max-w-8xl lg:mx-auto ">

            <div className="md:hidden  flex w-60% justify-center my-6 items-center mx-auto">
                <img className="my-auto" src={props.image} width={props.width} />
            </div>


            <div className="md:w-1/2 md:pr-28 md:pl-4 md:py-12 md:text-left xl:gap-6 flex flex-col justify-center ">
                <h1 className="text-xl text-center md:text-left lg:text-2xl xl:text-3xl text-amber-500 font-bold pb-6 leading-12 lg:leading-20">{props.heading}</h1>
                <p className="text-base text-center md:text-left md:text-lg ">
                    {props.content}
                </p>
            </div>
            <div className="md:w-1/2 hidden md:flex items-center justify-center py-20">
                <img className="my-auto object-cover" src={props.image} width={props.width} />
            </div>
        </div>
    )
}