import React, { useState, useEffect } from "react";
import { ArrowLeftIcon, ClipboardCopyIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
const Customer = (props) => {
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
          <Link to="/customers">
            <button className="btn bg-gray-100 hover:bg-century hover:text-white border border-century text-century">
              <ArrowLeftIcon className="h-4" />
            </button>
          </Link>
          <h1 className="text-2xl md:text-3xl text-gray-800 font-bold">#222</h1>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4	">
        <div className="bg-white shadow-lg col-span-3 lg:col-span-2 rounded-sm border border-gray-200 order-first h-fit">
          <header className="px-5 py-4">
            <h2 className="font-semibold text-gray-800">Customer</h2>
          </header>
          <ul className="divide-y divide-gray-200 text-sm">
            <li className="p-5 ">
              <Link to="/customers" className="text-blue-500 underline">
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
};

export default Customer;
