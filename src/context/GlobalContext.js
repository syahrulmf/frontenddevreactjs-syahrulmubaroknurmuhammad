import axios from "axios";
import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState();
  const [value, setValue] = useState("");
  const [priceValue, setPriceValue] = useState("");
  const [price, setPrice] = useState([
    { label: "Termurah", value: "Termurah" },
    { label: "Termahal", value: "Termahal" },
  ]);
  const [fetchRestaurantStatus, setFetchRestaurantStatus] = useState(false);

  const getRestaurants = async () => {
    setFetchRestaurantStatus(true);
    try {
      const res = await axios.get(
        "https://my-json-server.typicode.com/syahrulmf/restaurant/restaurant"
      );

      // memisahkan category untuk filter category
      let option = res.data.map((data) => {
        return {
          label: data.category,
          value: data.category,
        };
      });

      // filter data category yang duplicate
      const duplicatedDelete = [
        ...new Map(
          option.map((val) => [JSON.stringify([val.label, val.name]), val])
        ).values(),
      ];

      setCategory(duplicatedDelete);

      // filter response data API
      let filter = value
        ? res.data.filter((val) => val.category === value.label)
        : res.data;

      // cek priceValue apakah ada
      if (priceValue) {
        // jika ada dengan nilai tsb
        if (priceValue.label === "Termahal") {
          // urutkan dari termahal ke termurah
          let sorting = filter.sort(
            (a, b) => parseFloat(b.price) - parseFloat(a.price)
          );
          setData(sorting);
        } else if (priceValue.label === "Termurah") {
          // urutkan dari termurah ke termahal
          let sorting = filter.sort(
            (a, b) => parseFloat(a.price) - parseFloat(b.price)
          );
          setData(sorting);
        }
      } else {
        setData(filter);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setFetchRestaurantStatus(false);
    }
  };

  let state = {
    data,
    setData,
    category,
    setCategory,
    value,
    setValue,
    price,
    setPrice,
    priceValue,
    setPriceValue,
    fetchRestaurantStatus,
    setFetchRestaurantStatus,
  };

  let handleFunction = {
    getRestaurants,
  };
  return (
    <GlobalContext.Provider value={{ state, handleFunction }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
