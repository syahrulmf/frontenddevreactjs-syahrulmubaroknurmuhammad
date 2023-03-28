import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Card = ({ data }) => {
  const navigate = useNavigate();

  let star = [];

  for (let index = 0; index < 5; index++) {
    if (index < data.rating) {
      star.push(<AiFillStar />);
    } else star.push(<AiOutlineStar />);
  }

  return (
    <div className="card w-full md:w-1/2 lg:w-1/4 p-3">
      <div className="w-full h-60 overflow-hidden">
        <img src={data.image} alt={data.name} className="h-full w-full" />
      </div>
      <h2 className="font-semibold text-lg mt-3">{data.name}</h2>
      <div className="flex mt-2 mr-2">
        {star.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>
      <div className="flex items-center justify-between mt-2">
        <p className="text-sm font-light text-slate-500 uppercase">
          {data.category} - ${data.price}
        </p>
        <div className="inline-flex space-x-1 items-center">
          <span
            className={`${
              data.isOpen ? "bg-green-400" : "bg-orange-400"
            } w-3 h-3 rounded-full`}
          ></span>
          <p className="text-xs text-slate-600 uppercase">
            {data.isOpen ? "open now" : "closed"}
          </p>
        </div>
      </div>
      <button
        onClick={() => navigate(`detail/${data.id}`)}
        className="w-full py-3 bg-blue-900 hover:bg-blue-800 duration-200 text-white mt-2 uppercase"
      >
        Learn More
      </button>
    </div>
  );
};

export default Card;
