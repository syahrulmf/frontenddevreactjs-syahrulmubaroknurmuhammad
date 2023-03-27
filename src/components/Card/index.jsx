import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const navigate = useNavigate();
  return (
    <div className="card w-1/4 p-3">
      <div className="w-full h-60 bg-slate-200"></div>
      <h2 className="font-semibold text-lg mt-3">Restaurant Name</h2>
      <div className="flex mt-2 mr-2">
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
      </div>
      <div className="flex items-center justify-between mt-2">
        <p className="text-sm font-light text-slate-500">Categories - $.123</p>
        <div className="inline-flex space-x-1 items-center">
          <span className="w-3 h-3 rounded-full bg-green-400"></span>
          <p className="text-xs text-slate-600">OPEN NOW</p>
        </div>
      </div>
      <button
        onClick={() => navigate("detail")}
        className="w-full py-3 bg-blue-900 text-white mt-2"
      >
        Learn More
      </button>
    </div>
  );
};

export default Card;
