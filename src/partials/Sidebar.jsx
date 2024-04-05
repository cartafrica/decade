import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";

import SidebarLinkGroup from "./SidebarLinkGroup";
import logo from "../images/logo-w.svg";
import icon from "../images/icon-w.svg";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded);
    if (sidebarExpanded) {
      document.querySelector("body").classList.add("sidebar-expanded");
    } else {
      document.querySelector("body").classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <div>
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 bg-gray-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-black p-4 transition-all duration-200 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-64"
        }`}
      >
        {/* Sidebar header */}
        <div className="flex justify-between mb-10 pr-3 sm:px-2">
          {/* Close button */}
          <button
            ref={trigger}
            className="lg:hidden text-gray-500 hover:text-gray-400"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
          {/* Logo */}
          <NavLink exact to="/" className="block">
            <img className="h-6 block" src={icon} alt="cart.africa" />
          </NavLink>
        </div>

        {/* Links */}
        <div className="space-y-8">
          {/* Pages group */}
          <div>
            <h3 className="text-xs uppercase text-gray-500 font-semibold pl-3">
              <span
                className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6"
                aria-hidden="true"
              >
                •••
              </span>
              <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                Navigation
              </span>
            </h3>
            <ul className="mt-3">
              {/* Dashboard */}
              <li
                className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                  pathname === "/dashboard" && "bg-white"
                }`}
              >
                <NavLink
                  exact
                  to="/dashboard"
                  className={`block hover:text-gray-400 truncate transition duration-150 ${
                    pathname === "/dashboard" ?
                    "text-black" : "text-gray-200"
                  }`}
                >
                  <div className="flex items-center">
                    <span className="text-sm font-medium ml-3 duration-200">
                      Dashboard
                    </span>
                  </div>
                </NavLink>
              </li>
              {/* Orders */}
              <li
                className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                  pathname.includes("orders") && "bg-white"
                }`}
              >
                <NavLink
                  exact
                  to="/orders"
                  className={`block hover:text-gray-400 truncate transition duration-150 ${
                    pathname.includes("orders") ?
                    "text-black"
  : "text-gray-200"                 }`}
                >
                  <div className="flex items-center">
                    <span className="text-sm font-medium ml-3 duration-200">
                      Orders
                    </span>
                  </div>
                </NavLink>
              </li>
              {/* Products */}
              <li
                className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                  pathname.includes("products") && "bg-white"
                }`}
              >
                <NavLink
                  exact
                  to="/products"
                  className={`block hover:text-gray-400 truncate transition duration-150 ${
                    pathname.includes("products") ?
                    "text-black"
    : "text-gray-200"               }`}
                >
                  <div className="flex items-center">
                    <span className="text-sm font-medium ml-3 duration-200">
                      Products
                    </span>
                  </div>
                </NavLink>
              </li>
              {/* Customers */}
              <li
                className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                  pathname.includes("customers") && "bg-white"
                }`}
              >
                <NavLink
                  exact
                  to="/customers"
                  className={`block hover:text-gray-400 truncate transition duration-150 ${
                    pathname.includes("customers") ?
                    "text-black"
     : "text-gray-200"              }`}
                >
                  <div className="flex items-center">
                    <span className="text-sm font-medium ml-3 duration-200">
                      Customers
                    </span>
                  </div>
                </NavLink>
              </li>
              {/* <li
                className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                  pathname.includes("shipping") && "bg-white"
                }`}
              >
                <NavLink
                  exact
                  to="/shipping"
                  className={`block hover:text-gray-400 truncate transition duration-150 ${
                    pathname.includes("shipping") ?
                    "text-black"
    : "text-gray-200"               }`}
                >
                  <div className="flex items-center">
                    <span className="text-sm font-medium ml-3 duration-200">
                      Shipping & Delivery
                    </span>
                  </div>
                </NavLink>
              </li> */}
              {/* Settings */}
              <li
                className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                  pathname.includes("settings") && "bg-white"
                }`}
              >
                <NavLink
                  exact
                  to="/settings/account"
                  className={`block hover:text-gray-400 truncate transition duration-150 ${
                    pathname.includes("settings") ?
                    "text-black"
    : "text-gray-200"               }`}
                >
                  <div className="flex items-center">
                    <span className="text-sm font-medium ml-3 duration-200">
                      Settings
                    </span>
                  </div>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        {/* Expand / collapse button */}
        {/* <div className="pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto">
          <div className="px-3 py-2">
            <button onClick={() => setSidebarExpanded(!sidebarExpanded)}>
              <span className="sr-only">Expand / collapse sidebar</span>
              <svg className="w-6 h-6 fill-current sidebar-expanded:rotate-180" viewBox="0 0 24 24">
                <path className="text-gray-400" d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z" />
                <path className="text-gray-600" d="M3 23H1V1h2z" />
              </svg>
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Sidebar;
