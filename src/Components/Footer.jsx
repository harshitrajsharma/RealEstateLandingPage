import React from "react";
import FooterList from "./FooterList";

export default function Footer(){
    return(
        <div className="bg-slate-900 text-white flex flex-col justify-center gap-6 lg:flex-row py-12 px-8" >
            <div className=" lg:w-1/5 flex flex-col justify-center items-center gap-6">
                <div className="text-3xl font-bold">DYNASTY</div>
                <div>
                    <p className="text-sm font-thin text-gray-400">Follow us on:</p>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-8 lg:w-4/5 justify-around">
                <FooterList heading="Product" opt1="How it works" link1="#" opt2="Investments" link2="#" opt3="Performance" link3="#" opt4="Resources" link4="#" />
                <FooterList heading="Company" opt1="About Us" link1="#" opt2="Help Center" link2="#"  opt3="FAQs" link3="#" opt4="Resources" link4="#" />
                <FooterList heading="Legal" opt1="Term and Conditions" link1="#" opt2="Privacy Policy" link2="#"  opt3="Disclamer" link3="#" opt4="Sitemap" link4="#" />
                <FooterList heading="Contact us" opt1="ABC location, 10th floor, Somewhere" link1="#" opt2="Dynastyworks@gmail.com" link2="#"  opt3="+91 9099090990" link3="#" />
            </div>
        </div>
    )
}