import React, { useState } from "react";

import Image from "../../images/user-avatar-80.png";

function AccountPanel() {
  const [sync, setSync] = useState(false);

  return (
    <div className="grow">
      {/* Panel body */}
      <div className="p-6 space-y-6">
        <h2 className="text-2xl text-gray-800 font-bold mb-5">My Account</h2>
        {/* Picture */}
        <section>
          <div className="flex items-center">
            <div className="mr-4">
              <img
                className="w-20 h-20 rounded-full"
                src={Image}
                width="80"
                height="80"
                alt="User upload"
              />
            </div>
            <button className="btn-sm bg-black hover:bg-black text-white">
              Change
            </button>
          </div>
        </section>
        {/* Business Profile */}
        <section>
          <h2 className="text-xl leading-snug text-gray-800 font-bold mb-1">
            Business Profile
          </h2>
          {/* <div className="text-sm">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</div> */}
          <div className="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5">
            <div className="sm:w-1/3">
              <label className="block text-sm font-medium mb-1" htmlFor="name">
                Business Name
              </label>
              <input id="name" className="form-input w-full" type="text" />
            </div>
            <div className="sm:w-1/3">
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="business-id"
              >
                Business Phone
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
                Website (optional)
              </label>
              <input
                id="business-id"
                className="form-input w-full"
                type="text"
              />
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-xl leading-snug text-gray-800 font-bold mb-1">
            Address
          </h2>
          <div className="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5">
            <div className="sm:w-1/2">
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="business-id"
              >
                Country
              </label>
              <input
                id="business-id"
                className="form-input w-full"
                type="text"
              />
            </div>
            <div className="sm:w-1/2">
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="location"
              >
                Address
              </label>
              <input id="location" className="form-input w-full" type="text" />
            </div>
          </div>
          <div className="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5">
            <div className="sm:w-1/2">
              <label className="block text-sm font-medium mb-1" htmlFor="city">
                City
              </label>
              <input id="city" className="form-input w-full" type="text" />
            </div>
            <div className="sm:w-1/2">
              <label className="block text-sm font-medium mb-1" htmlFor="name">
                State
              </label>
              <input id="name" className="form-input w-full" type="text" />
            </div>
          </div>
        </section>
        {/* Email */}
        <section>
          <h2 className="text-xl leading-snug text-gray-800 font-bold mb-1">
            Account
          </h2>
          {/* <div className="text-sm">
            Excepteur sint occaecat cupidatat non proident sunt in culpa qui
            officia.
          </div> */}
          <div className="flex flex-wrap mt-5">
            <div className="mr-2">
              <label className="sr-only" htmlFor="email">
                Business email
              </label>
              <input id="email" className="form-input" value="tife@pario.la" type="email" />
            </div>
            <button className="btn border-gray-200 hover:border-gray-300 shadow-sm text-black">
              Change
            </button>
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

export default AccountPanel;
