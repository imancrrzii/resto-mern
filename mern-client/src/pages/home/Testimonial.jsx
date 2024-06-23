import React from "react";
import { FaStar } from "react-icons/fa";

const Testimonial = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2">
          <img src="/images/mobile-design.png" alt="" />
        </div>
        <div className="md:w-4/5">
          <p className="text-red uppercase tracking-wide font-semibold text-lg">
            Testimonials
          </p>
          <h2 className="font-bold text-4xl md:text-5xl my-2 md:leading-snug leading-snug">
            Why always me balotelli as long as us!!
          </h2>
          <blockquote className="my-5 text-secondary leading-[30px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
            consectetur corporis eius sequi placeat illum officiis veniam
            suscipit assumenda quo.
          </blockquote>

          {/* Avatar */}
          <div className="flex items-center gap-4 flex-wrap">
            <div className="avatar-group -space-x-6 rtl:space-x-reverse">
              <div className="avatar">
                <div className="w-12">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <div className="avatar placeholder">
                <div className="bg-neutral text-neutral-content w-12">
                  <span>+99</span>
                </div>
              </div>
            </div>

            <div className="space-y-1">
              <h5 className="text-lg font-semibold">Customer Feedback</h5>
              <div className="flex items-center gap-2">
                <FaStar className="text-yellow-400"/>
                <span className="font-medium">4.9</span><span className="text-[#807E7E]">(200k reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
