import React from "react";
import Slider from "react-slick";
import { motion } from "motion/react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testemonialData } from "../utils/testemonial.jsx";

const Testemonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
  };

  return (
    <div className="h-[640px] pt-10 sm:pt-16 bg-[url(/lake.jpg)] bg-fixed bg-cover">
      <div className="w-[80%] m-auto">
        <p className=" text-white">GUEST FEEDBACK</p>
        <h1 className="mb-10 text-3xl font-medium text-white">
          {" "}
          OUR GUEST <span className="text-white">EXPERIENCE</span>
        </h1>
        <Slider {...settings}>
          {testemonialData.map((data, index) => {
            return (
              <div key={data.id} className="bg-black/70 p-3 ">
                <div className="flex flex-col justify-around items-center text-white">
                  <div>
                    <p className="mb-2">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Aspernatur non tempora explicabo, ab nostrum, facilis enim
                      praesentium cumque deserunt repellat saepe minima porro
                      laboriosam amet sint dolore dolorum optio? Autem.
                    </p>
                  </div>
                  <div>
                    <img src={data.img} className="w-[150px] rounded-full" />
                  </div>
                  <div>
                    <h1 className="text-xl font-bold">{data.name}</h1>
                    <p className=" text-lg pl-2">{data.address}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Testemonial;
