import React from "react";
import { Link, Outlet } from "react-router-dom";
import {
  MdBookmarkAdd,
  MdDashboard,
  MdDashboardCustomize,
  MdMenuBook,
  MdPeople,
  MdShoppingBag,
  MdPerson,
  MdHome,
  MdShoppingCart,
  MdQuestionAnswer,
  MdMapsHomeWork,
} from "react-icons/md";
import logo from "/images/logo.png";

const sharedLinks = (
  <>
    <li className="mt-3">
      <Link to="/">
        <MdHome />
        Home
      </Link>
    </li>
    <li>
      <Link to="/menu">
        <MdShoppingCart />
        Menu
      </Link>
    </li>
    <li>
      <Link to="/dashboard/menu">
        <MdMapsHomeWork />
        Orders Tracking
      </Link>
    </li>
    <li>
      <Link to="/dashboard/reservations">
        <MdQuestionAnswer />
        Customer Support
      </Link>
    </li>
  </>
);

const DashboardLayout = () => {
  return (
    <div>
      <div className="drawer sm:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col sm:items-start sm:justify-start my-2">
          {/* Page content here */}
          <div className="flex items-center justify-between mx-4">
            <label
              htmlFor="my-drawer-2"
              className="btn btn-neutral drawer-button lg:hidden"
            >
              <MdDashboardCustomize className="text-xl" />
            </label>
            <button className="btn bg-violet-600 text-white rounded-full px-6 sm:hidden ">
              <MdPerson />
              Logout
            </button>
          </div>
          <div className="mt-5 md:mt-2 mx-4">
            <Outlet />
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <Link to="/dashboard" className="flex justify-start mb-3">
                <img src={logo} alt="" className="w-14" />
                <span className="badge badge-neutral">admin</span>
              </Link>
            </li>
            <hr />
            <li className="mt-3">
              <Link to="/dashboard">
                <MdDashboard />
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/dashboard">
                <MdShoppingBag />
                Booking
              </Link>
            </li>
            <li>
              <Link to="/dashboard">
                <MdMenuBook />
                Menu
              </Link>
            </li>
            <li>
              <Link to="/dashboard">
                <MdBookmarkAdd />
                Item
              </Link>
            </li>
            <li>
              <Link to="/dashboard/users">
                <MdPeople />
                Users
              </Link>
            </li>
            <hr />
            {/* shared link */}
            {sharedLinks}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
