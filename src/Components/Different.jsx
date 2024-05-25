import React from "react";
import LeftSec from "./LeftSec";
import RightSec from "./RightSec";

export default function Different() {
    return (
        <div className="container mx-auto px-2 py-4 flex flex-col md:flex-row xl:max-w-8xl lg:mx-auto lg:px-5 xl:px-8 lg:py-3">
            <div className="bg-gray-300">
                <div>
                    <h1 className="text-center text-xl lg:text-2xl xl:text-3xl font-bold py-12  ">What makes us different</h1>
                </div>
                <div>
                    <LeftSec image="./building1.webp" width="" heading="Our proven process for growing your assets" content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum temporibus natus, voluptatibus amet iusto sint fugiat, labore voluptate placeat tenetur expedita at id quaerat dicta." />

                    <RightSec image="./building2.webp" width="" heading="Lorem Ipsum" content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum temporibus natus, voluptatibus amet iusto sint fugiat, labore voluptate placeat tenetur expedita at id quaerat dicta." />

                    <LeftSec image="./building3.webp" width="" heading="Lorem Ipsum" content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum temporibus natus, voluptatibus amet iusto sint fugiat, labore voluptate placeat tenetur expedita at id quaerat dicta." />

                    <RightSec image="./building2.webp" width="" heading="Lorem Ipsum" content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum temporibus natus, voluptatibus amet iusto sint fugiat, labore voluptate placeat tenetur expedita at id quaerat dicta." />
                </div>
            </div>
        </div>
    )
}