import React, { useState } from "react";

import Image from "../../images/user-avatar-80.png";

function PayoutPanel() {
  const [sync, setSync] = useState(false);

  return (
    <div className="grow">
      {/* Panel body */}
      <div className="p-6 space-y-6">
        {/* Escrow Service */}
        <section>
          <h2 className="text-xl leading-snug text-gray-800 font-bold mb-1">
            Escrow
          </h2>
          <div className="text-sm">
            This allows your customers shop with trust, knowing their money is secured until they get their order.
          </div>
          <div className="flex items-center mt-5">
            <div className="form-switch">
              <input
                type="checkbox"
                id="toggle"
                className="sr-only"
                checked={sync}
                onChange={() => setSync(!sync)}
              />
              <label className="bg-gray-400" htmlFor="toggle">
                <span className="bg-white shadow-sm" aria-hidden="true"></span>
                <span className="sr-only">Enable escrow</span>
              </label>
            </div>
            <div className="text-sm text-gray-400 italic ml-2">
              {sync ? "On" : "Off"}
            </div>
          </div>
        </section>
        {/* Business Profile */}
        <section>
          <h2 className="text-xl leading-snug text-gray-800 font-bold mb-1">
            Bank Details
          </h2>
          {/* <div className="text-sm">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</div> */}
          <div className="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5">
            <div className="sm:w-1/3">
              <label className="block text-sm font-medium mb-1" htmlFor="name">
                Bank Name
              </label>
              <input id="name" className="form-input w-full" type="text" />
            </div>
            <div className="sm:w-1/3">
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="business-id"
              >
                Account Number
              </label>
              <input
                id="business-id"
                className="form-input w-full"
                type="text"
              />
            </div>
            <div className="sm:w-1/3">
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="business-id"
              >
                Account Name
              </label>
              <input
                id="business-id"
                disabled
                className="form-input w-full"
                type="text"
              />
            </div>
          </div>
        </section>
      </div>
      {/* Panel footer */}
      <footer>
        <div className="flex flex-col px-6 py-5 border-t border-gray-200">
          <div className="flex self-end">
            <button className="btn border-gray-200 hover:border-gray-300 text-gray-600">
              Cancel
            </button>
            <button className="btn bg-black hover:bg-black text-white ml-3">
              Save Changes
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default PayoutPanel;
