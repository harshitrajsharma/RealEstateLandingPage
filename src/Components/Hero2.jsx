import React from "react";

export default function Hero() {
    return (
        <div className="container mx-auto px-5 py-8 flex flex-col md:flex-row xl:max-w-8xl lg:mx-auto lg:px-10 xl:px-16 lg:py-6">

            <div className=" flex flex-col md:flex-row">
                <div className="md:w-1/2 flex justify-center">
                    <img className="my-auto w-3/5 md:w-full" src="./Img2.webp" width={"100%"} />
                </div>
                <div className="md:w-1/2 lg:pr-28 md:pl-4 md:py-12 md:text-left xl:gap-6 flex flex-col justify-center ">
                    <h1 className="text-3xl text-center md:text-left lg:text-4xl xl:text-6xl font-bold pb-6 leading-12 lg:leading-20">Build to help smart investors invest smater</h1>
                    <p className="text-base text-center md:text-left md:text-lg ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, voluptatum, a optio repellendus, illum facere quos tenetur odio quam eos vero incidunt amet! Odio, architecto.
                    </p>
                    <div className=" py-3">
                        <a href="#" className=" pr-6 py-3 hover:underline flex justify-end md:justify-start ">Learn more</a>
                    </div>
                </div>
            </div>

        </div>
    )
}