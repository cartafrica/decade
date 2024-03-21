import React from "react";

import AppImage01 from "../../images/applications-image-01.jpg";
import AppImage02 from "../../images/applications-image-02.jpg";
import AppImage03 from "../../images/applications-image-03.jpg";
import AppImage04 from "../../images/applications-image-04.jpg";

function ShopCards01() {
  return (
    <React.Fragment>
      {/* Card 1 */}
      <div className="col-span-full sm:col-span-6 xl:col-span-3 bg-white shadow-lg rounded-sm border border-gray-200 overflow-hidden">
        <div className="flex flex-col h-full">
          {/* Image */}
          <img
            className="w-full"
            src={AppImage01}
            width="286"
            height="160"
            alt="Application 01"
          />
          {/* Card Content */}
          <div className="grow flex flex-col p-5">
            {/* Card body */}
            {/* Header */}
            <header className="mb-3">
              <h3 className="text-base text-gray-800 font-semibold">
                Sneaker Cleaning Kit
              </h3>
              <p className="text-xs hover:text-sm truncate">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac
                tempor quam. Nunc aliquam metus nec gravida molestie. Nullam sit
                amet purus vehicula erat ultrices congue. Duis vitae scelerisque
                lectus. Donec mi erat, congue et erat ac, ultrices pellentesque
                sem. Donec scelerisque odio turpis, nec posuere lorem cursus ac.
              </p>
            </header>
            {/* Rating and price */}
            <div className="flex flex-wrap justify-between items-center mb-4">
              {/* Price */}
              <div>
                <div className="inline-flex text-sm font-medium bg-green-100 text-green-600 rounded-full text-center px-2 py-0.5">
                  ₦89,000.00
                </div>
              </div>
              <div>
                <a
                  className="btn-sm bg-red-500 hover:bg-red-600 text-white"
                  href="#0"
                >
                  Delete
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Card 1 */}
      <div className="col-span-full sm:col-span-6 xl:col-span-3 bg-white shadow-lg rounded-sm border border-gray-200 overflow-hidden">
        <div className="flex flex-col h-full">
          {/* Image */}
          <img
            className="w-full"
            src={AppImage01}
            width="286"
            height="160"
            alt="Application 01"
          />
          {/* Card Content */}
          <div className="grow flex flex-col p-5">
            {/* Card body */}
            {/* Header */}
            <header className="mb-3">
              <h3 className="text-base text-gray-800 font-semibold">
                Sneaker Cleaning Kit
              </h3>
              <p className="text-xs hover:text-sm truncate">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac
                tempor quam. Nunc aliquam metus nec gravida molestie. Nullam sit
                amet purus vehicula erat ultrices congue. Duis vitae scelerisque
                lectus. Donec mi erat, congue et erat ac, ultrices pellentesque
                sem. Donec scelerisque odio turpis, nec posuere lorem cursus ac.
              </p>
            </header>
            {/* Rating and price */}
            <div className="flex flex-wrap justify-between items-center mb-4">
              {/* Price */}
              <div>
                <div className="inline-flex text-sm font-medium bg-green-100 text-green-600 rounded-full text-center px-2 py-0.5">
                  ₦89,000.00
                </div>
              </div>
              <div>
                <a
                  className="btn-sm bg-red-500 hover:bg-red-600 text-white"
                  href="#0"
                >
                  Delete
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Card 1 */}
      <div className="col-span-full sm:col-span-6 xl:col-span-3 bg-white shadow-lg rounded-sm border border-gray-200 overflow-hidden">
        <div className="flex flex-col h-full">
          {/* Image */}
          <img
            className="w-full"
            src={AppImage01}
            width="286"
            height="160"
            alt="Application 01"
          />
          {/* Card Content */}
          <div className="grow flex flex-col p-5">
            {/* Card body */}
            {/* Header */}
            <header className="mb-3">
              <h3 className="text-base text-gray-800 font-semibold">
                Sneaker Cleaning Kit
              </h3>
              <p className="text-xs hover:text-sm truncate">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac
                tempor quam. Nunc aliquam metus nec gravida molestie. Nullam sit
                amet purus vehicula erat ultrices congue. Duis vitae scelerisque
                lectus. Donec mi erat, congue et erat ac, ultrices pellentesque
                sem. Donec scelerisque odio turpis, nec posuere lorem cursus ac.
              </p>
            </header>
            {/* Rating and price */}
            <div className="flex flex-wrap justify-between items-center mb-4">
              {/* Price */}
              <div>
                <div className="inline-flex text-sm font-medium bg-green-100 text-green-600 rounded-full text-center px-2 py-0.5">
                  ₦89,000.00
                </div>
              </div>
              <div>
                <a
                  className="btn-sm bg-red-500 hover:bg-red-600 text-white"
                  href="#0"
                >
                  Delete
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ShopCards01;
