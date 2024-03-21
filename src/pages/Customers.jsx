import React, { useEffect, useState } from "react";

import PaginationClassic from "../partials/PaginationClassic";
import DateSelect from "../partials/actions/DateSelect";
import DeleteButton from "../partials/actions/DeleteButton";
import FilterButton from "../partials/actions/FilterButton";
import CustomersListItem from "../partials/customers/CustomersListItem";
import CustomersTableItem from "../partials/customers/CustomersTableItem";

function Customers() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const [selectAll, setSelectAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    const customers = [
      {
        id: "0",
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
    setList(customers);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  const handleSelectedItems = (selectedItems) => {
    setSelectedItems([...selectedItems]);
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
      {/* Page header */}
      <div className="sm:flex sm:justify-between sm:items-center mb-8">
        {/* Left: Title */}
        <div className="mb-4 sm:mb-0">
          <h1 className="text-2xl md:text-3xl text-gray-800 font-bold">
            Customers
          </h1>
        </div>

        {/* Right: Actions */}
        <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
          {/* Delete button */}
          <DeleteButton selectedItems={selectedItems} />
          {/* Dropdown */}
          <DateSelect />
          {/* Filter button */}
          <FilterButton />
          {/* Add customer button */}
          <button className="btn bg-black hover:bg-black text-white">
            <svg
              className="w-4 h-4 fill-current opacity-50 flex-shrink-0"
              viewBox="0 0 16 16"
            >
              <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
            </svg>
            <span className="hidden xs:block ml-2">Add Customer</span>
          </button>
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-sm border border-gray-200 relative">
        <header className="px-5 py-4">
          <h2 className="font-semibold text-gray-800">
            All Customers <span className="text-gray-400 font-medium">248</span>
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
                    order={order.orders}
                    date={order.date}
                    customer={order.name}
                    total={order.total}
                    spent={order.spent}
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
              <thead className="text-xs font-semibold uppercase text-gray-500 bg-gray-50 border-t border-b border-gray-200">
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
                    <div className="font-semibold text-left">Total spent</div>
                  </th>
                </tr>
              </thead>
              {/* Table body */}
              <tbody className="text-sm divide-y divide-gray-200">
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
              </tbody>
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
    </div>
  );
}

export default Customers;
