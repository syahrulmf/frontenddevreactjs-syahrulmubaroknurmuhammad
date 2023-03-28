import axios from "axios";
import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";

const Detail = () => {
  const [restaurant, setRestaurant] = useState();
  const { id } = useParams();

  useState(() => {
    const getDetailRestaurant = async () => {
      try {
        const res = await axios.get(
          `https://my-json-server.typicode.com/syahrulmf/restaurant/restaurant/${id}`
        );
        setRestaurant(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getDetailRestaurant();
  }, []);

  let star = [];

  for (let index = 0; index < 5; index++) {
    if (index < restaurant?.rating) {
      star.push(<AiFillStar />);
    } else star.push(<AiOutlineStar />);
  }

  return (
    <section className="container mx-auto">
      <div className="flex items-center mt-12 mx-4">
        <BsArrowLeft className="mr-2" /> <Link to="/">Back To Home</Link>
      </div>
      <div className="flex flex-wrap my-4 md:my-12">
        <div className="w-full md:hidden px-4">
          <h2 className="text-3xl font-semibold truncate">
            {restaurant?.name}
          </h2>
          <span className="text-xl">$$.{restaurant?.price}</span>
        </div>

        <div className="w-full md:w-1/2 px-4">
          <div className="relative item rounded-lg h-full overflow-hidden">
            <img
              src={restaurant?.image}
              alt={restaurant?.name}
              className="w-full h-full"
            />
          </div>
        </div>

        <div className="flex-1 px-4 md:p-6">
          <div className="flex flex-col sm:flex-row justify-between">
            <div>
              <h2 className="text-3xl font-semibold">{restaurant?.name}</h2>
              <div className="flex mt-4 mr-2">
                {star.map((item, index) => (
                  <span key={index}>{item}</span>
                ))}
              </div>
              <p className="text-xl pt-4">$$.{restaurant?.price}</p>
            </div>
            <div className="flex flex-col items-end justify-end">
              <div className="inline-flex space-x-1 items-center">
                <span
                  className={`w-3 h-3 rounded-full ${
                    restaurant?.isOpen ? "bg-green-400" : "bg-orange-400"
                  }`}
                ></span>
                <p className=" text-slate-600 uppercase">
                  {restaurant?.isOpen ? "open now" : "closed"}
                </p>
              </div>
            </div>
          </div>

          <hr className="my-8" />

          <h6 className="text-xl font-semibold mb-4">Description</h6>
          <p className="text-xl leading-7 mb-6">{restaurant?.description}</p>
        </div>
      </div>
    </section>
  );
};

export default Detail;
