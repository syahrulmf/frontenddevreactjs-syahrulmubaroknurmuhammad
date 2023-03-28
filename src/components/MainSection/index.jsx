/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import Card from "../Card";

const MainSection = () => {
  const [limit, setLimit] = useState(8);
  const [isLoading, setLoading] = useState(false);
  const { state, handleFunction } = useContext(GlobalContext);
  const { data, value, priceValue, fetchRestaurantStatus } = state;
  const { getRestaurants } = handleFunction;

  useEffect(() => {
    getRestaurants();
  }, [value, priceValue]);

  const handleLoad = () => {
    setLoading(true);

    setTimeout(() => {
      setLimit(limit + 4);
      setLoading(false);
    }, 1000);
  };

  return (
    <section className="container mx-auto px-12">
      <h2 className="text-2xl">All Restaurants</h2>
      <div
        className={`flex flex-wrap items-center w-full -mx-3 ${
          fetchRestaurantStatus ? "justify-center" : "justify-start"
        }`}
      >
        {fetchRestaurantStatus ? (
          <div aria-label="Loading..." role="status">
            <svg
              className="h-12 w-12 animate-spin mt-10 mx-auto"
              viewBox="3 3 18 18"
            >
              <path
                className="fill-gray-200"
                d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
              ></path>
              <path
                className="fill-gray-800"
                d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"
              ></path>
            </svg>
          </div>
        ) : (
          data
            .filter((item, index) => {
              return item && index < limit;
            })
            .map((item) => <Card data={item} key={item.id} />)
        )}
      </div>

      <div
        className={`${
          fetchRestaurantStatus ? "hidden" : "flex justify-center my-8"
        }`}
      >
        {isLoading ? (
          <div aria-label="Loading..." role="status">
            <svg className="h-8 w-8 animate-spin mx-auto" viewBox="3 3 18 18">
              <path
                className="fill-gray-200"
                d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
              ></path>
              <path
                className="fill-gray-800"
                d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"
              ></path>
            </svg>
          </div>
        ) : (
          <button
            className="py-2 px-28 border border-slate-400 hover:bg-slate-900 hover:text-white duration-200"
            onClick={handleLoad}
          >
            Load More
          </button>
        )}
      </div>
    </section>
  );
};

export default MainSection;
