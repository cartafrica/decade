import React, { useState } from "react";

import Image from "../../images/user-avatar-80.png";

function VerifyPanel() {
  const [sync, setSync] = useState(false);

  return (
    <div className="grow">
      {/* Panel body */}
      <div className="p-6 space-y-6">
        {/* Escrow Service */}
        <section>
          <h2 className="text-xl leading-snug text-gray-800 font-bold mb-1">
            Verification Status
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
                disabled
                checked={sync}
                onChange={() => setSync(!sync)}
              />
              <label className="bg-gray-400" htmlFor="toggle">
                <span className="bg-white shadow-sm" aria-hidden="true"></span>
                <span className="sr-only">Verification status</span>
              </label>
            </div>
            <div className="text-sm text-gray-400 italic ml-2">
              {sync ? "Verified" : "Unverified"}
            </div>
          </div>
        </section>
        {/* Business Profile */}
        <section>
          <h2 className="text-xl leading-snug text-gray-800 font-bold mb-1">
            Compliance
          </h2>
          {/* <div className="text-sm">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</div> */}
          <div className="grid grid-cols-2 gap-4 mt-5">
            <div className="">
              <label className="block text-sm font-medium mb-1" htmlFor="name">
                Trading Name
              </label>
              <input id="name" className="form-input w-full" type="text" />
            </div>
            <div className="">
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
            <div className="">
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="business-id"
              >
                Category
              </label>
              <input
                id="business-id"
                className="form-input w-full"
                type="text"
              />
            </div>
            <div className="">
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="business-id"
              >
                Description
              </label>
              <input
                id="business-id"
                className="form-input w-full"
                type="text"
              />
            </div>

            <div className="">
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="business-id"
              >
                Business Type
              </label>
              <input
                id="business-id"
                className="form-input w-full"
                type="text"
              />
            </div>
            <div className="">
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="business-id"
              >
                Registration Number
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
        {/* Documents */}
        <section>
        <h2 className="text-xl text-gray-800 font-bold mb-1">Registration Documents</h2>
          <div className="text-sm">
            Upload a pdf file containing your registration documents for verification.
          </div>
          <div className="flex items-center mt-5">
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

export default VerifyPanel;
