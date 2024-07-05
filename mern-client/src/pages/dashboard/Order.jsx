import React from "react";
import useAuth from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { FaChalkboard } from "react-icons/fa";

const Order = () => {
  const { user } = useAuth();
  // console.log(user.email)
  const token = localStorage.getItem("access-token");

  const { refetch, data: orders = [] } = useQuery({
    queryKey: ["orders", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5001/payments?email=${user?.email}`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      return res.json();
    },
  });
  
  const formatedDate = (createdAt) => {
    const newDate = new Date(createdAt);
    return newDate.toLocaleDateString();
  };
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      {/* banner */}
      <div className=" bg-gradient-to-r from-0% from-[#FAFAFA] to-[#FCFCFC] to-100%">
        <div className="py-28 flex flex-col items-center justify-center">
          {/* content */}
          <div className=" text-center px-4 space-y-7">
            <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
              Tracking your
              <span className="text-violet-600 italic"> Orders</span>
            </h2>
          </div>
        </div>
      </div>

      <div>
        {orders.length > 0 ? (
          <div>
            <div className="">
              <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead className="bg-violet-600 text-white rounded-sm">
                    <tr className="text-center">
                      <th>No</th>
                      <th>Order Date</th>
                      <th>Transaction ID</th>
                      <th>Price</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((item, index) => (
                      <tr key={index} className="text-center">
                        <td>{index + 1}</td>
                        <td>
                          {formatedDate(item.createdAt)}
                        </td>
                        <td>{item.transitionId}</td>
                        <td>
                          ${item.price}
                        </td>
                        <td>
                          {item.status}
                        </td>
                        <td>
                          <Link to="/contact" className="btn bg-violet-600 text-white ">
                            <FaChalkboard/> Contact
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  {/* foot */}
                </table>
              </div>
            </div>
            <hr />
          </div>
        ) : (
          <div className="text-center mt-20">
            <p>Cart is empty. Please add products.</p>
            <Link to="/menu">
              <button className="btn bg-violet-600 text-white mt-3">
                Back to Menu
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Order;
