import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import { FaFilter } from "react-icons/fa";
const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [filteredItem, setFilteredItem] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");

  // loading data
  useEffect(() => {
    // fetch data menu.json
    const fetchData = async () => {
      try {
        const response = await fetch("/menu.json");
        const data = await response.json();
        setMenu(data);
        setFilteredItem(data);
      } catch (error) {
        console.log("Err to fetching data", error);
      }
    };
    // call the function
    fetchData();
  }, []);

  const filterItems = (category) => {
    const filtered =
      category === "all"
        ? menu
        : menu.filter((item) => item.category === category);

    setFilteredItem(filtered);
    setSelectedCategory(category);
  };

  //   show all data func
  const showAll = () => {
    setFilteredItem(menu);
    setSelectedCategory("all");
  };

  //   sorting
  const handleSortChange = (option) => {
    setSortOption(option);
    let sortedItems = [...filteredItem];

    // logic
    switch (option) {
      case "A-Z":
        sortedItems.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Z-A":
        sortedItems.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "low-to-high":
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      case "high-to-low":
        sortedItems.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    setFilteredItem(sortedItems);
  };
  return (
    <div>
      {/* Menu Banner */}
      <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%">
        <div className="py-48 flex flex-col justify-center items-center gap-8 ">
          {/* text */}
          <div className="text-center space-y-7 px-4">
            <h2 className="text-4xl font-bold md:text-5xl md:leading-snug leading-snug">
              Lorem ipsum dolor sit amet
              <span className="text-violet-600"> Food</span>
            </h2>
            <p className="text-xl text-[#4A4A4A] md:w-4/5 mx-auto">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, nesciunt natus. In nesciunt rem doloribus!
            </p>
            <button className="btn bg-violet-600 px-8 py-3 font-semibold text-white rounded-full ">
              Order now
            </button>
          </div>
        </div>
      </div>

      {/* Menu SHop */}
      <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
        {/* filtering $ sorting */}
        <div className="flex flex-col md:flex-row flex-wrap md:justify-between items-center space-x-3 mb-8 ">
          {/* all btn */}
          <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap ">
            <button
              className={
                selectedCategory === "all"
                  ? "text-violet-600 underline underline-offset-4"
                  : ""
              }
              onClick={showAll}
            >
              All
            </button>
            <button
              className={
                selectedCategory === "salad"
                  ? "text-violet-600 underline underline-offset-4"
                  : ""
              }
              onClick={() => filterItems("salad")}
            >
              Salad
            </button>
            <button
              className={
                selectedCategory === "pizza"
                  ? "text-violet-600 underline underline-offset-4"
                  : ""
              }
              onClick={() => filterItems("pizza")}
            >
              Pizza
            </button>
            <button
              className={
                selectedCategory === "soup"
                  ? "text-violet-600 underline underline-offset-4"
                  : ""
              }
              onClick={() => filterItems("soup")}
            >
              Soups
            </button>
            <button
              className={
                selectedCategory === "dessert"
                  ? "text-violet-600 underline underline-offset-4"
                  : ""
              }
              onClick={() => filterItems("dessert")}
            >
              Dessert
            </button>
            <button
              className={
                selectedCategory === "drinks"
                  ? "text-violet-600 underline underline-offset-4"
                  : ""
              }
              onClick={() => filterItems("drinks")}
            >
              Drinks
            </button>
          </div>

          {/* sorting */}
          <div className="flex justify-end mb-4 rounded-sm">
            {/* sorting options */}
            <select name="sort" id="sort"
              className="select select-bordered w-full max-w-xs"
              onChange={(e) => handleSortChange(e.target.value)}
            >
              <option disabled selected>
                Sort
              </option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
              <option value="low-to-high">Low to High</option>
              <option value="high-to-low">High to Low</option>
            </select>
          </div>
        </div>
        {/* products card */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {filteredItem.map((item) => (
            <Card key={item._id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
