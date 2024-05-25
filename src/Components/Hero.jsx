import React from "react";

export default function Hero() {
    return (
        <div className="container mx-auto px-5 py-8 flex flex-col md:flex-row xl:max-w-8xl lg:mx-auto lg:px-10 xl:px-16 lg:py-6 h-auto md:h-screen">

            <div className="md:hidden  flex w-60% justify-center my-6 items-center mx-auto">
                <img className="my-auto" src="./Img1.webp" width={"100%"} />
            </div>

            <div className="md:w-1/2 md:pr-28 md:pl-4 md:py-12 md:text-left xl:gap-6 flex flex-col justify-center ">
                <h1 className="text-3xl text-center heading md:text-left lg:text-4xl xl:text-6xl font-bold pb-6 leading-12 lg:leading-20 ">Do more than just real estate investing, build a Dynasty</h1>
                <p className="text-base text-center md:text-left md:text-lg ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, commodi quaerat modi magnam id, velit ipsum non mollitia suscipit molestias veritatis ad nemo sit officia.
                </p>
                <div className="mt-6 py-3 flex items-center justify-center md:justify-start">
                    <a href="#" className="lg:border-2 border-black rounded-lg text-white bg-black px-6 py-3 hover:bg-amber-300 hover:text-black hover:shadow-lg hover:shadow-amber-300">Get Started</a>
                </div>
            </div>

            <div className=" md:w-1/2 hidden md:flex items-center justify-center py-20">
                <img className="" src="./Img1.webp" alt="image" />
            </div>
        </div>
    )
}