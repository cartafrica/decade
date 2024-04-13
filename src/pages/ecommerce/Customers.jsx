import React, { useState, useEffect } from "react";
import Image01 from "../../images/user-40-01.jpg";
import Image02 from "../../images/user-40-02.jpg";
import Image03 from "../../images/user-40-03.jpg";
import Image04 from "../../images/user-40-04.jpg";
import Image05 from "../../images/user-40-05.jpg";
import Image06 from "../../images/user-40-06.jpg";
import Image07 from "../../images/user-40-07.jpg";
import Image08 from "../../images/user-40-08.jpg";
import Image09 from "../../images/user-40-09.jpg";
import Image10 from "../../images/user-40-10.jpg";
import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import DateSelect from "../../components/DateSelect";
import CustomersTable from "../../partials/customers/CustomersTable";
import PaginationClassic from "../../components/PaginationClassic";
import DeleteButton from "../../partials/actions/DeleteButton";
import CustomersTableItem from "../../partials/customers/CustomersTableItem";
import CustomersListItem from "../../partials/customers/CustomersListItem";

import {
  ArrowLeftIcon,
  BackspaceIcon,
  ChevronLeftIcon,
  ClipboardCopyIcon,
  PlusIcon,
} from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import axiosClient from "../../api/axiosClient";
import { fetchCustomers } from "../../api/services/commerce";
function Customers(props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [isCheck, setIsCheck] = useState([]);
  const [list, setList] = useState([]);
  const customer = props.customer;
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
        const response = await fetchCustomers();
        const data = response.data;
        console.log(data);
      } catch (error) {
        console.error("Failed to fetch dashboard data:", error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    setList(customers);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const customers = [
    {
      id: "0",
      image: Image01,
      name: "Patricia Semklo",
      email: "patricia.semklo@app.com",
      location: "🇬🇧 London, UK",
      orders: "24",
      lastOrder: "#123567",
      spent: "₦2,890.66",
      refunds: "-",
      fav: true,
    },
    {
      id: "1",
      image: Image02,
      name: "Dominik Lamakani",
      email: "dominik.lamakani@gmail.com",
      location: "🇩🇪 Dortmund, DE",
      orders: "77",
      lastOrder: "#779912",
      spent: "₦14,767.04",
      refunds: "4",
      fav: false,
    },
    {
      id: "2",
      image: Image03,
      name: "Ivan Mesaros",
      email: "imivanmes@gmail.com",
      location: "🇫🇷 Paris, FR",
      orders: "44",
      lastOrder: "#889924",
      spent: "₦4,996.00",
      refunds: "1",
      fav: true,
    },
    {
      id: "3",
      image: Image04,
      name: "Maria Martinez",
      email: "martinezhome@gmail.com",
      location: "🇮🇹 Bologna, IT",
      orders: "29",
      lastOrder: "#897726",
      spent: "₦3,220.66",
      refunds: "2",
      fav: false,
    },
    {
      id: "4",
      image: Image05,
      name: "Vicky Jung",
      email: "itsvicky@contact.com",
      location: "🇬🇧 London, UK",
      orders: "22",
      lastOrder: "#123567",
      spent: "₦2,890.66",
      refunds: "-",
      fav: true,
    },
    {
      id: "5",
      image: Image06,
      name: "Tisho Yanchev",
      email: "tisho.y@kurlytech.com",
      location: "🇬🇧 London, UK",
      orders: "14",
      lastOrder: "#896644",
      spent: "₦1,649.99",
      refunds: "1",
      fav: true,
    },
    {
      id: "6",
      image: Image07,
      name: "James Cameron",
      email: "james.ceo@james.tech",
      location: "🇫🇷 Marseille, FR",
      orders: "34",
      lastOrder: "#136988",
      spent: "₦3,569.87",
      refunds: "2",
      fav: true,
    },
    {
      id: "7",
      image: Image08,
      name: "Haruki Masuno",
      email: "haruki@supermail.jp",
      location: "🇯🇵 Tokio, JP",
      orders: "112",
      lastOrder: "#442206",
      spent: "₦19,246.07",
      refunds: "6",
      fav: false,
    },
    {
      id: "8",
      image: Image09,
      name: "Joe Huang",
      email: "joehuang@hotmail.com",
      location: "🇨🇳 Shanghai, CN",
      orders: "64",
      lastOrder: "#764321",
      spent: "₦12,276.92",
      refunds: "-",
      fav: true,
    },
    {
      id: "9",
      image: Image10,
      name: "Carolyn McNeail",
      email: "carolynlove@gmail.com",
      location: "🇮🇹 Milan, IT",
      orders: "19",
      lastOrder: "#908764",
      spent: "₦1,289.97",
      refunds: "2",
      fav: false,
    },
  ];
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
      {/* Page header */}
      {!customer ? (
        <>
          <div className="sm:flex sm:justify-between sm:items-center mb-8">
            {/* Left: Title */}
            <div className="mb-4 sm:mb-0">
              <h1 className="text-2xl md:text-3xl text-gray-800 font-bold">
                Customers{" "}
              </h1>
            </div>

            {/* Right: Actions */}
            <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
              {/* Delete button */}
              <DeleteButton selectedItems={selectedItems} />
              {/* Dropdown */}
              <DateSelect />
              {/* Filter button */}
              {/* <FilterButton align="right" /> */}
              {/* Add customer button */}
              <button className="btn bg-black hover:bg-black text-white">
                <PlusIcon className="h-4" />
                <span className="hidden xs:block ml-2">Add Customer</span>
              </button>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-sm border border-gray-200 relative">
            <header className="px-5 py-4">
              <h2 className="font-semibold text-gray-800">
                All Customers{" "}
                <span className="text-gray-400 font-medium">442</span>
              </h2>
            </header>
            <div>
              {/* Table */}
              <div className="overflow-x-auto">
                <ul className="lg:hidden divide-y divide-gray-200 text-sm">
                  {list.map((order) => {
                    return (
                      <CustomersListItem
                        key={order.id}
                        id={order.id}
                        image={order.image}
                        name={order.name}
                        email={order.email}
                        location={order.location}
                        orders={order.orders}
                        lastOrder={order.lastOrder}
                        spent={order.spent}
                        refunds={order.refunds}
                        fav={order.fav}
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
                        <div className="font-semibold text-left">Name</div>
                      </th>
                      <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                        <div className="font-semibold">Orders</div>
                      </th>
                      <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                        <div className="font-semibold text-left">
                          Total spent
                        </div>
                      </th>
                    </tr>
                  </thead>
                  {/* Table body */}
                    {list.map((customer) => {
                      return (
                        <CustomersTableItem
                          key={customer.id}
                          id={customer.id}
                          image={customer.image}
                          name={customer.name}
                          email={customer.email}
                          location={customer.location}
                          orders={customer.orders}
                          lastOrder={customer.lastOrder}
                          spent={customer.spent}
                          refunds={customer.refunds}
                          fav={customer.fav}
                          handleClick={handleClick}
                          isChecked={isCheck.includes(customer.id)}
                        />
                      );
                    })}

                </table>
              </div>
            </div>
          </div>
          {/* Table */}
          {/* <CustomersTable selectedItems={handleSelectedItems} /> */}
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

export default Customers;
