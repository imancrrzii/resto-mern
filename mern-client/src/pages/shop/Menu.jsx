import React, { useEffect, useState } from "react";
import Card from "../../components/Card"; 
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
        <div>Filtering and sorting</div>
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
