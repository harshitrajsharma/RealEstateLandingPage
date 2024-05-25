import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="w-3/4 m-auto">
            <div className="mt-6">
                <Slider {...settings}>
                    {reviews.map((r, index) => (
                        <div className="flex"> {/* Added wrapper div with class flex */}
                            <div className="w-full flex justify-center items-center">
                                <img src={r.image} alt="" />
                            </div>

                            <div className="w-full flex flex-col mt-6 gap-4 bg-slate-900 text-white p-6 rounded-xl">
                                <div className="text-center">
                                    <p>{r.review}</p>
                                </div>
                                <div className="text-xl font-bold text-right">
                                    <p>{r.name}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

const reviews = [
    {
        name: "- Person 1",
        review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet",
        image: "./building2.webp"
    },
    {
        name: "- Person 2",
        review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet",
        image: "./building3.webp"
    },
    {
        name: "- Person 3",
        review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet",
        image: "./building1.webp"
    }
];
