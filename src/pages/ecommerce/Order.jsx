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
import OrderListItem from "../../partials/orders/OrderListItem";
import OrderTableItem from "../../partials/orders/OrderTableItem";
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
    setList(items);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const items = [
    {
      qty: 2,
      item: "Patricia Semklo",
      amount: "₦129.00",
    },
  ];
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full xl:w-3/4 max-w-9xl mx-auto">
      <div className="sm:flex sm:justify-between sm:items-center mb-8">
        {/* Left: Title */}
        <div className="flex space-x-5 mb-4 sm:mb-0">
          <Link to="/orders">
            <button className="btn bg-gray-100 hover:bg-century hover:text-white border border-century text-century">
              <ArrowLeftIcon className="h-4" />
            </button>
          </Link>
          <h1 className="text-2xl md:text-3xl text-gray-800 font-bold">#222</h1>
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
                <p className="text-sm text-gray-600 flex-1 font-bold">Total</p>
                <p className="text-sm text-gray-600">N3,031,000</p>
              </li>
            </ul>
            <Link to="/orders">
              <button
                className="bg-green-500 w-full text-white my-3 py-3 px-4 rounded focus:outline-none focus:shadow-outline"
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
                to="/customers"
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
    </div>
  );
}

export default Orders;
