import React, { useContext } from "react";
import Select from "react-select";
import { GlobalContext } from "../../context/GlobalContext";

const Navbar = () => {
  const { state } = useContext(GlobalContext);
  const { category, value, setValue, price, priceValue, setPriceValue } = state;

  const clearFilter = () => {
    setValue("");
    setPriceValue("");
  };

  return (
    <section className="container mx-auto flex items-center justify-between border-y border-y-slate-300 py-4 px-12 my-10">
      <div className="flex items-center space-x-4">
        <span>Filter by:</span>
        <div className="flex items-center space-x-4">
          <div className="flex items-center border-b border-b-slate-300 pb-1">
            <input type="radio" name="open" id="radio" />
            <label htmlFor="radio" className="ml-1 text-slate-500">
              Open Now
            </label>
          </div>
          <Select
            name="Price"
            placeholder="Price"
            isClearable={true}
            options={price}
            onChange={(e) => setPriceValue(e)}
            value={priceValue}
            className="w-auto lg:w-[200px]"
          />
          <Select
            name="Categories"
            placeholder="Categories"
            isClearable={true}
            options={category}
            onChange={(e) => setValue(e)}
            value={value}
            className="w-auto lg:w-[200px]"
          />
        </div>
      </div>
      <div className="flex items-center">
        <button
          className="py-2 px-6 border border-slate-300 text-sm text-slate-300 hover:bg-slate-900 hover:text-white duration-200"
          onClick={clearFilter}
        >
          CLEAR ALL
        </button>
      </div>
    </section>
  );
};

export default Navbar;
