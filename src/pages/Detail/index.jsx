import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

const Detail = () => {
  return (
    <section className="container mx-auto">
      <div className="hidden md:flex items-center mt-12 mx-4">
        <BsArrowLeft className="mr-2" /> <Link to="/">Back To Home</Link>
      </div>
      <div className="flex flex-wrap my-4 md:my-12">
        <div className="w-full md:hidden px-4">
          <h2 className="text-3xl font-semibold truncate">Restaurant Name</h2>
          <span className="text-xl">$$.Price</span>
        </div>

        <div className="w-full md:w-1/2 px-4">
          <div className="relative item rounded-lg h-full overflow-hidden">
            <div className="w-full h-full bg-slate-300"></div>
          </div>
        </div>

        <div className="flex-1 px-4 md:p-6">
          <div className="flex flex-col sm:flex-row justify-between">
            <div>
              <h2 className="text-3xl font-semibold">Restaurant Name</h2>
              <div className="flex mt-4 mr-2">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <p className="text-xl pt-4">$$.Price</p>
            </div>
            <div className="flex flex-col items-end justify-end w-[150px]">
              <div className="inline-flex space-x-1 items-center">
                <span className="w-3 h-3 rounded-full bg-green-400"></span>
                <p className=" text-slate-600">OPEN NOW</p>
              </div>
            </div>
          </div>

          <hr className="my-8" />

          <h6 className="text-xl font-semibold mb-4">Description</h6>
          <p className="text-xl leading-7 mb-6">Description</p>
        </div>
      </div>
    </section>
  );
};

export default Detail;
