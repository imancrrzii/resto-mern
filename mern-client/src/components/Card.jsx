import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import '../App.css';

const Card = ({ item }) => {
    const [isHeartFilled, setIsHeartFilled] = useState(false);

    const handleHeartClick = () => {
      setIsHeartFilled(!isHeartFilled);
    }
  return (
      <div className="card w-96 bg-base-100 shadow-xl relative">
        <div className={`rating gap-1 absolute right-2 top-2 p-4 rounded-full bg-violet-600 ${isHeartFilled ? "text-rose-500" : "text-white"}`}
        onClick={handleHeartClick}>
            <FaHeart className="h-5 w-5 cursor-pointer"/>
        </div>
        <Link to={`/menu/${item._id}`}>
        <figure>
          <img
            src={item.image}
            alt="Food enak"
            className="hover:scale-105 duration-200 transition-all md:h-48 h-32"
          />
        </figure>
        </Link>
        <div className="card-body">
          <Link to={`/menu/${item._id}`}>
          <h2 className="card-title">{item.name}</h2>
          </Link>
          <p>gek ku kebok kalo dak pesen</p>
          <div className="card-actions justify-between">
            <h5 className="font-semibold"><span className="text-sm text-red">$</span>{item.price}</h5>
            <button className="btn bg-violet-600 text-white">Buy Now</button>
          </div>
        </div>
      </div>
  );
};

export default Card;
