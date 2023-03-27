import React from "react";
import Card from "../Card";

const MainSection = () => {
  return (
    <section className="container mx-auto px-12">
      <h2 className="text-2xl">All Restaurants</h2>
      <div className="flex flex-wrap items-center justify-start w-full -mx-3">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <div className="flex justify-center my-8">
        <button className="py-2 px-28 border border-slate-400">
          Load More
        </button>
      </div>
    </section>
  );
};

export default MainSection;
