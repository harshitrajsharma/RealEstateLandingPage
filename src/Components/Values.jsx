import React from "react";
import RightSec from "./RightSec";
import ValuesCards from "./ValuesCard";

export default function Values() {
    return (
        <div className="container mx-auto px-2 py-4 flex flex-col xl:max-w-8xl lg:mx-auto lg:px-5 xl:px-8 lg:py-3">
            <div className="bg-slate-900 text-white">
                <RightSec heading="We strive to embody our core values and reamin REGAL at all times" content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum temporibus natus, voluptatibus amet iusto sint fugiat, labore voluptate placeat tenetur expedita at id quaerat dicta. " image="./crownimg.png" />
                <div className="container px-5 py-8 lg:px-10 xl:px-16 lg:py-6 mx-auto flex flex-col lg:flex-row xl:max-w-8xl lg:mx-auto gap-4 my-6">
                    <ValuesCards heading="RELENTLESS" content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum temporibus natus, voluptatibus amet iusto sint fugiat" />
                    <ValuesCards heading="EMPOWERMENT" content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum temporibus natus, voluptatibus amet iusto sint fugiat" />
                    <ValuesCards heading="TRUST" content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum temporibus natus, voluptatibus amet iusto sint fugiat" />
                    <ValuesCards heading="ACCOUNTABILITY" content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum temporibus natus, voluptatibus amet iusto sint fugiat" />
                    <ValuesCards heading="LOYALITY" content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum temporibus natus, voluptatibus amet iusto sint fugiat" />
                </div>
            </div>

        </div>
    )
}