import React from "react";

const Navbar = () => {
  return (
    <section className="container mx-auto flex items-center justify-between border-y border-y-slate-300 py-4 px-12 my-10">
      <div className="flex items-center space-x-4">
        <span>Filter by:</span>
        <li className="flex items-center space-x-4">
          <ul>Open Now</ul>
          <ul>Price</ul>
          <ul>Categories</ul>
        </li>
      </div>
      <div className="flex items-center">
        <button className="py-2 px-6 border border-slate-300 text-sm text-slate-300">
          CLEAR ALL
        </button>
      </div>
    </section>
  );
};

export default Navbar;
