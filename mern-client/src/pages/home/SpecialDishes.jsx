import React, { useEffect, useRef, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "../../components/Cards";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const simpleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    >
      Next
    </div>
  );
};

const simplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "violet-600" }}
      onClick={onClick}
    >
      Prev
    </div>
  );
};

const SpecialDish = () => {
  const [recipes, setRecipes] = useState([]);
  const slider = useRef(null);

  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        const specials = data.filter((item) => item.category === "popular");
        // console.log(specials);
        setRecipes(specials);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],

    nextArrow: <simpleNextArrow />,
    prevArrow: <simplePrevArrow />,
  };
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 my-20 relative">
      <div>
        <div className="text-left">
          <p className="subtitle">
            Special Dishes
          </p>
          <h2 className="font-bold text-4xl md:text-5xl my-2 md:leading-snug leading-snug md:w-[520px]">
            Lorem ipsum dolor sit amet
          </h2>
        </div>
        {/* Arrow Button */}
        <div className="md:absolute right-3 top-8 mb-10 md:mr-24">
          <button
            onClick={() => slider?.current?.slickPrev()}
            className="btn p-2 rounded-full ml-5"
          >
            <FaAngleLeft className="w-8 h-8 p-1" />
          </button>
          <button
            onClick={() => slider?.current?.slickNext()}
            className="btn p-2 rounded-full ml-5 bg-violet-600 text-white"
          >
            <FaAngleRight className="w-8 h-8 p-1" />
          </button>
        </div>

        <Slider ref={slider} {...settings} className="overflow-hidden mt-10 space-x-5">
          {recipes.map((item, i) => (
            <Cards key={i} item={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SpecialDish;