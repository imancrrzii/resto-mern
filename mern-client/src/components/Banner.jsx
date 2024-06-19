import React from "react";

import HeroImg from "/hero/hero.png";
import Food1 from "/images/play-game.png";
import Food2 from "/images/web-design.png";

const Banner = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%">
      <div className="py-24 flex flex-col md:flex-row-reverse justify-between items-center gap-8 ">
        {/* image */}
        <div className="md:w-1/2">
          <img className="md:ml-12" src={HeroImg} alt="" />
          <div className="flex flex-col md:flex-row-reverse  items-center justify-around -mt-14 gap-4">
            <div className="flex bg-white py-2 px-3 rounded-2xl items-center gap-3 shadow-md w-64">
              <img src={Food1} alt="" className="w-1/6 h-1/6 rounded-2xl" />
              <div className="space-y-1">
                <h5 className="font-medium mb-1">Sushi Pork</h5>
                <div className="rating rating-sm ">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                  />
                </div>
                <p className="text-red">$19.00</p>
              </div>
            </div>
            {/* 2 */}
            <div className="sm:flex hidden bg-white py-2 px-3 rounded-2xl items-center gap-3 shadow-md w-64">
              <img src={Food2} alt="" className="w-1/6 h-1/6 rounded-2xl" />
              <div className="space-y-1">
                <h5 className="font-medium mb-1">Sushi Pork</h5>
                <div className="rating rating-sm ">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                  />
                </div>
                <p className="text-red">$19.00</p>
              </div>
            </div>
          </div>
        </div>

        {/* text */}
        <div className="md:w-1/2 space-y-7 px-4">
          <h2 className="text-4xl font-bold md:text-5xl md:leading-snug leading-snug">
            Lorem ipsum dolor sit amet
            <span className="text-violet-600"> Food</span>
          </h2>
          <p className="text-xl text-[#4A4A4A]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptates, nesciunt natus. In nesciunt rem doloribus!
          </p>
          <button className="btn bg-violet-600 px-8 py-3 font-semibold text-white rounded-full ">
            Order now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
