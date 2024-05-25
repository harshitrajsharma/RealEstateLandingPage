import React from "react";
import Carousel from "./Carousel";

export default function Reviews(){
    return(
        <div className="container mx-auto px-5 py-8 flex flex-col xl:max-w-8xl lg:mx-auto lg:px-10 xl:px-16 lg:py-6">
            <div className="text-3xl text-center lg:text-4xl xl:text-6xl font-bold pb-6">Reviews</div>
            <Carousel />
        </div>
    )
}