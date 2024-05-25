import React from "react";
import StatsCard from "./StatsCard";

export default function Stats() {
    return (
        <div className="container mx-auto px-2 py-4 flex flex-col md:flex-row xl:max-w-8xl lg:mx-auto lg:px-5 xl:px-8 lg:py-3 items-center">
            <div className="w-full  py-8">
                <div>
                    <p className="text-center text-3xl lg:text-2xl xl:text-3xl font-bold py-12  ">Our Stats speaks it all</p>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-6">
                    <StatsCard image="./members.png" stats="12K+" text="Active Members" />
                    <StatsCard image="./transaction.png" stats="$89Mn+" text="Lorem ipsum dolor sit" />
                    <StatsCard image="./stats.png" stats="$2Mn+" text="Lorem ipsum dolor sit" />
                    <StatsCard image="./profit.png" stats="11.4-16%" text="Lorem ipsum dolor sit" />
                </div>
            </div>
        </div>
    )
}