import React from "react";

const serviceLists = [
  {
    id: 1,
    title: "Catering",
    desc: "Lorem ipsum dolor sit amet consectetur.",
    image: "/images/web-design.png",
  },
  {
    id: 2,
    title: "Apapun itu",
    desc: "Lorem ipsum dolor sit amet consectetur.",
    image: "/images/web-development.png",
  },
  {
    id: 3,
    title: "Apadia ini",
    desc: "Lorem ipsum dolor sit amet consectetur.",
    image: "/images/play-game.png",
  },
  {
    id: 4,
    title: "Emang iya",
    desc: "Lorem ipsum dolor sit amet consectetur.",
    image: "/images/mobile-design.png",
  },
];

const Services = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* text */}
        <div className="md:w-1/2">
          <p className="text-red uppercase tracking-wide font-semibold text-lg">
            Our Services
          </p>
          <h2 className="font-bold text-4xl md:text-5xl my-2 md:leading-snug leading-snug">
            Lorem ipsum dolor sit amet consectetur.
          </h2>
          <p className="my-5 text-secondary leading-[30px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
            consectetur corporis eius sequi placeat illum officiis veniam
            suscipit assumenda quo.
          </p>
          <button className="btn bg-violet-600 text-white px-8 py-3 rounded-full">
            Explore now
          </button>
        </div>
        {/* images */}
        <div className="md:w-1/2">
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-6 items-center">
            {serviceLists.map((service) => (
              <div
                key={service.id}
                className="shadow-md rounded-sm py-5 px-4 text-center space-y-2 text-violer-600 cursor-pointer hover:border-indigo-600 transition-all duration-300 hover:border"
              >
                <img src={service.image} alt="" className="mx-auto h-24" />
                <h5 className="pt-3 font-semibold">{service.title}</h5>
                <p className="text-[#90BD95]">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
