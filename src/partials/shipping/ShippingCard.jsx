import React from "react";

function ShippingCard(props) {
  return (
    <div className="col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-gray-200">
      <div className="flex flex-col h-full p-5">
        <header>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm">Lagos</div>
              <div className="text-xs">Nigeria</div>
            </div>
            <div>
              {/* Menu button */}
              <button className="text-gray-400 hover:text-gray-500 rounded-full">
                <span className="sr-only">Menu</span>
                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32">
                  <circle cx="16" cy="16" r="2" />
                  <circle cx="10" cy="16" r="2" />
                  <circle cx="22" cy="16" r="2" />
                </svg>
              </button>
            </div>
          </div>
        </header>
        <div className="grow mt-2">
          <table className="table-auto w-full">
            <thead className="text-xs font-semibold text-left uppercase text-gray-500 bg-gray-50 border-t border-b border-gray-200">
              <tr>
                <th>Rate name</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-200">
              <tr>
                <td>Lagos Mainland</td>
                <td>₦2,000</td>
                <td className="text-right">
                  <a
                    className="btn-sm bg-transparent hover:bg-yellow-600 hover:text-white text-yellow-600"
                    href="#0"
                  >
                    Edit
                  </a>
                  <a
                    className="btn-sm bg-transparent hover:bg-red-600 hover:text-white text-red-600"
                    href="#0"
                  >
                    Delete
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <footer className="mt-5">
          <div className="text-sm mb-2">
            <a
              className="btn-sm bg-black hover:bg-black text-white"
              href="#0"
            >
              Add Rate
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default ShippingCard;
