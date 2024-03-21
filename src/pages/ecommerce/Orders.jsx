import React, { useState, useEffect } from "react";

import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import DateSelect from "../../components/DateSelect";
import OrdersTable from "../../partials/orders/OrdersTable";
import PaginationClassic from "../../components/PaginationClassic";
import FulfillButton from "../../partials/actions/FulfillButton";
import OrdersTableItem from "../../partials/orders/OrdersTableItem";
import OrdersListItem from "../../partials/orders/OrdersListItem";
import {
  ArrowLeftIcon,
  BackspaceIcon,
  ChevronLeftIcon,
  ClipboardCopyIcon,
  PlusIcon,
} from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import axiosClient from "../../api/axiosClient";
import { fetchOrders } from "../../api/services/commerce";
function Orders(props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [isCheck, setIsCheck] = useState([]);
  const [list, setList] = useState([]);
  const order = props.order;
  const handleSelectedItems = (selectedItems) => {
    setSelectedItems([...selectedItems]);
  };

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setIsCheck(list.map((li) => li.id));
    if (selectAll) {
      setIsCheck([]);
    }
  };

  const handleClick = (e) => {
    const { id, checked } = e.target;
    setSelectAll(false);
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== id));
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      console.log("fethcing...");
      try {
        const response = await fetchOrders();
        const data = response.data;
        console.log(data);
      } catch (error) {
        console.error("Failed to fetch dashboard data:", error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    setList(orders);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const orders = [
    {
      id: "0",
      order: "#123567",
      date: "22/01/2021",
      customer: "Patricia Semklo",
      total: "₦129.00",
      status: "Refunded",
      items: "1",
      location: "🇨🇳 Shanghai, CN",
      type: "Subscription",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: "1",
      order: "#779912",
      date: "22/01/2021",
      customer: "Dominik Lamakani",
      total: "₦89.00",
      status: "Approved",
      items: "2",
      location: "🇲🇽 Mexico City, MX",
      type: "Subscription",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: "2",
      order: "#889924",
      date: "22/01/2021",
      customer: "Ivan Mesaros",
      total: "₦89.00",
      status: "Approved",
      items: "2",
      location: "🇮🇹 Milan, IT",
      type: "One-time",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: "3",
      order: "#897726",
      date: "22/01/2021",
      customer: "Maria Martinez",
      total: "₦59.00",
      status: "Pending",
      items: "1",
      location: "🇮🇹 Bologna, IT",
      type: "One-time",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: "4",
      order: "#123567",
      date: "22/01/2021",
      customer: "Vicky Jung",
      total: "₦39.00",
      status: "Refunded",
      items: "1",
      location: "🇬🇧 London, UK",
      type: "Subscription",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: "5",
      order: "#896644",
      date: "21/01/2021",
      customer: "Tisho Yanchev",
      total: "₦59.00",
      status: "Approved",
      items: "1",
      location: "🇫🇷 Paris, FR",
      type: "One-time",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: "6",
      order: "#136988",
      date: "21/01/2021",
      customer: "James Cameron",
      total: "₦89.00",
      status: "Approved",
      items: "1",
      location: "🇫🇷 Marseille, FR",
      type: "Subscription",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: "7",
      order: "#442206",
      date: "21/01/2021",
      customer: "Haruki Masuno",
      total: "₦129.00",
      status: "Approved",
      items: "2",
      location: "🇺🇸 New York, USA",
      type: "Subscription",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: "8",
      order: "#764321",
      date: "21/01/2021",
      customer: "Joe Huang",
      total: "₦89.00",
      status: "Pending",
      items: "2",
      location: "🇨🇳 Shanghai, CN",
      type: "One-time",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: "9",
      order: "#908764",
      date: "21/01/2021",
      customer: "Carolyn McNeail",
      total: "₦59.00",
      status: "Refunded",
      items: "1",
      location: "🇬🇧 Sheffield, UK",
      type: "Subscription",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full xl:w-3/4 max-w-9xl mx-auto">
      {/* Page header */}
      {!order ? (
        <>
          <div className="sm:flex sm:justify-between sm:items-center mb-8">
            {/* Left: Title */}
            <div className="mb-4 sm:mb-0">
              <h1 className="text-2xl md:text-3xl text-gray-800 font-bold">
                Orders{" "}
              </h1>
            </div>

            {/* Right: Actions */}
            <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
              {/* Fulfill button */}
              <FulfillButton selectedItems={selectedItems} />
              {/* Dropdown */}
              <DateSelect />
              {/* Filter button */}
              {/* <FilterButton align="right" /> */}
              {/* Add customer button */}
              <button className="btn bg-black hover:bg-black text-white">
                <PlusIcon className="h-4" />
                <span className="hidden xs:block ml-2">Add Order</span>
              </button>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-sm border border-gray-200 relative">
            <header className="px-5 py-4">
              <h2 className="font-semibold text-gray-800">
                All Orders{" "}
                <span className="text-gray-400 font-medium">442</span>
              </h2>
            </header>
            <div>
              {/* Table */}
              <div className="overflow-x-auto">
                <ul className="lg:hidden divide-y divide-gray-200 text-sm">
                  {list.map((order) => {
                    return (
                      <OrdersListItem
                        key={order.id}
                        id={order.id}
                        order={order.order}
                        date={order.date}
                        customer={order.customer}
                        total={order.total}
                        status={order.status}
                        items={order.items}
                        location={order.location}
                        type={order.type}
                        description={order.description}
                        handleClick={handleClick}
                        isChecked={isCheck.includes(order.id)}
                      />
                    );
                  })}
                </ul>
                <table className="table-auto w-full divide-y divide-gray-200 hidden lg:table">
                  {/* Table header */}
                  <thead className="text-xs uppercase text-gray-500 bg-gray-50 border-t border-gray-200">
                    <tr>
                      <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
                        <div className="flex items-center">
                          <label className="inline-flex">
                            <span className="sr-only">Select all</span>
                            <input
                              className="form-checkbox"
                              type="checkbox"
                              checked={selectAll}
                              onChange={handleSelectAll}
                            />
                          </label>
                        </div>
                      </th>
                      <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                        <div className="font-semibold text-left">Order</div>
                      </th>
                      <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                        <div className="font-semibold text-left">Date</div>
                      </th>
                      <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                        <div className="font-semibold text-left">Customer</div>
                      </th>
                      <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                        <div className="font-semibold text-left">Total</div>
                      </th>
                      <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                        <div className="font-semibold">Items</div>
                      </th>
                      <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                        <div className="font-semibold text-left">Status</div>
                      </th>
                    </tr>
                  </thead>
                  {/* Table body */}
                  {list.map((order) => {
                    return (
                      <OrdersTableItem
                        key={order.id}
                        id={order.id}
                        order={order.order}
                        date={order.date}
                        customer={order.customer}
                        total={order.total}
                        status={order.status}
                        items={order.items}
                        location={order.location}
                        type={order.type}
                        description={order.description}
                        handleClick={handleClick}
                        isChecked={isCheck.includes(order.id)}
                      />
                    );
                  })}
                </table>
              </div>
            </div>
          </div>
          {/* Table */}
          {/* <OrdersTable selectedItems={handleSelectedItems} /> */}

          {/* Pagination */}
          <div className="mt-8">
            <PaginationClassic />
          </div>
        </>
      ) : (
        <>
          <div className="sm:flex sm:justify-between sm:items-center mb-8">
            {/* Left: Title */}
            <div className="flex space-x-5 mb-4 sm:mb-0">
              <Link to="/dashboard/orders">
                <button className="btn bg-gray-100 hover:bg-century hover:text-white border border-century text-century">
                  <ArrowLeftIcon className="h-4" />
                </button>
              </Link>
              <h1 className="text-2xl md:text-3xl text-gray-800 font-bold">
                #222
              </h1>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4	">
            <div className="bg-white shadow-lg col-span-3 lg:col-span-2 rounded-sm border border-gray-200 lg:order-first">
              <header className="px-5 py-4">
                <h2 className="font-semibold text-gray-800">Order</h2>
              </header>

              <ul className="divide-y divide-gray-200">
                <li className="flex items-center space-x-5 p-4">
                  <div className="shrink-0 relative">
                    <div className="bg-gray-200 rounded-full absolute -right-2 -top-2 px-2">
                      3
                    </div>
                    <img
                      src="https://tailwindcss.com/_next/static/media/classic-utility-jacket.0f108046e151c8576017eaf383406fe6.jpg"
                      className="rounded-md w-16 h-16"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-1 flex-col lg:flex-row">
                    <h4 className="text-gray-800 flex-1">The Essential Kit</h4>
                    <h4 className="text-gray-800 flex-1">N30,000 x 3</h4>
                    <h4 className="text-gray-800">N90,000</h4>
                  </div>
                </li>
              </ul>

              <div className="p-6">
                <ul className="space-y-4">
                  <li className="flex border-t pt-2 border-slate-200">
                    <p className="text-sm text-gray-600 flex-1">Subtotal</p>
                    <p className="text-sm text-gray-600">N3,030,000</p>
                  </li>
                  <li className="flex border-b pb-2 border-slate-200">
                    <p className="text-sm text-gray-600 flex-1">Shipping Fee</p>
                    <p className="text-sm text-gray-600">N1,000</p>
                  </li>
                  <li className="flex">
                    <p className="text-sm text-gray-600 flex-1 font-bold">
                      Total
                    </p>
                    <p className="text-sm text-gray-600">N3,031,000</p>
                  </li>
                </ul>
                <Link to="/dashboard/orders">
                  <button
                    className="bg-century w-full text-white my-3 py-3 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Mark as Delivered
                  </button>
                </Link>
              </div>
            </div>
            <div className="bg-white shadow-lg col-span-3 lg:col-span-1 rounded-sm border border-gray-200 order-first h-fit">
              <header className="px-5 py-4">
                <h2 className="font-semibold text-gray-800">Customer</h2>
              </header>
              <ul className="divide-y divide-gray-200 text-sm">
                <li className="p-5 ">
                  <Link
                    to="/dashboard/customers"
                    className="text-blue-500 underline"
                  >
                    <h3>Tife Pariola</h3>
                  </Link>
                  <small>1 order</small>
                </li>
                <li className="p-5 ">
                  <h3 className="font-semibold uppercase">Delivery Info</h3>
                  <div className="flex justify-between">
                    <div>
                      <p>Tife Pariola</p>
                      <p>5 Ola Adebiyi Street,</p>
                      <p>Gbagada</p>
                      <p>Lagos</p>
                      <p>Nigeria</p>
                      <a
                        href="tel:+2348100908752"
                        className="text-blue-500 underline"
                      >
                        +2348100908752
                      </a>
                    </div>
                    <ClipboardCopyIcon className="h-5" title="Copy" />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Orders;
