import React from "react";

const categoryItems = [
  {
    id: 1,
    name: "Main Dish",
    desc: "(40 dishes)",
    image: "/certifications/certificate-1.png",
  },
  {
    id: 2,
    name: "Dessert",
    desc: "(30 dessert)",
    image: "/certifications/certificate-2.png",
  },
  {
    id: 3,
    name: "Breakfast",
    desc: "(30 breakfast)",
    image: "/certifications/certificate-3.png",
  },
  {
    id: 4,
    name: "Browse All",
    desc: "(100 items)",
    image: "/certifications/certificate-4.png",
  },
];

const Categories = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 py-16">
      <div className="text-center">
        <p className="text-red uppercase tracking-wide font-semibold text-lg">
          Customer Favourites
        </p>
        <h2 className="font-bold text-4xl md:text-5xl my-2 md:leading-snug leading-snug">
          Popular Categories
        </h2>
      </div>

      {/* category cards */}
      <div className="flex flex-col md:flex-row flex-wrap gap-8 justify-around items-center mt-12">
        {categoryItems.map((category, index) => (
          <div
            key={index}
            className="shadow-xl py-6 px-5 rounded-md bg-white w-72 mx-auto text-center cursor-pointer hover:-translate-y-4 duration-300 transition-all"
          >
            <div className="flex w-full mx-auto items-center justify-center">
              <img
                className="bg-violet-200 p-5 rounded-full w-28 h-28"
                src={category.image}
                alt=""
              />
            </div>
            <div className="mt-5 space-y-1">
              <h5 className="text-xl font-bold">{category.name}</h5>
              <p className="text-sm">{category.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
