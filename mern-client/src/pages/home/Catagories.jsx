import React from 'react'

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

const Catagories = () => {
  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 py-16'>
        <div className='text-center'>
            <p className='subtitle'>Customer Favorites</p>
            <h2 className='title'>Popular Catagories</h2>
        </div>

        {/* category cards */}
        <div className='flex flex-col sm:flex-row flex-wrap gap-8 justify-around items-center mt-12 '>
            {
                categoryItems.map((item, i) => (
                    <div key={i} className='shadow-lg rounded-md bg-white py-6 px-5 w-72 mx-auto text-center cursor-pointer hover:-translate-y-4 transition-all duration-300 z-10'>
                        <div className='w-full mx-auto flex items-center justify-center'><img src={item.image} alt="" className='bg-violet-200 p-5 rounded-full w-28 h-28' /></div>
                        <div className='mt-5 space-y-1'>
                            <h5 className='text-[#1E1E1E] font-semibold'>{item.title}</h5>
                            <p className='text-secondary text-sm'>{item.despriction}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Catagories