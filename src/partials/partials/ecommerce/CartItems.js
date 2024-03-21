import React from "react";

import Related01 from "../../images/related-product-01.jpg";
import Related02 from "../../images/related-product-02.jpg";
import Related03 from "../../images/related-product-03.jpg";

function CartItems() {
  const qty = 0;
  const addQty = () => {
    qty++;
  };
  return (
    <>
      <ul>
        {/* Cart item */}
        <li className="flex items-center py-6 border-b border-gray-200">
          <a
            className="block mb-4 sm:mb-0 mr-5 md:w-32 xl:w-auto shrink-0"
            href="#0"
          >
            <img
              className="rounded-sm"
              src={Related01}
              width="142"
              height="142"
              alt="Product 01"
            />
          </a>
          <div className="grow">
            <a href="#0">
              <h3 className="text-sm font-semibold text-gray-800 mb-1">
                The Complete Front-End Development Course!
              </h3>
            </a>
            {/* Product meta */}
            <div className="flex flex-wrap justify-between items-center">
              {/* Rating and price */}
              <div className="flex flex-wrap items-center space-x-2 mr-2">
                {/* Price */}
                <div>
                  <div className="inline-flex">
                    <input
                      id="promo"
                      className="form-input w-full mb-2"
                      type="text"
                    />
                  </div>
                </div>
                <div className="custom-number-input h-10 w-32">
                  <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                    <button
                      data-action="decrement"
                      className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                    >
                      <span className="m-auto text-2xl font-thin">−</span>
                    </button>
                    <input
                      type="number"
                      className="outline-none border-0 focus:outline-0 focus:ring-0 text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
                      name="custom-input-number"
                      value={qty}
                    ></input>
                    <button
                      data-action="increment"
                      onClick={() => addQty}
                      className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                    >
                      <span className="m-auto text-2xl font-thin">+</span>
                    </button>
                  </div>
                </div>
              </div>
              <button className="text-sm underline hover:no-underline">
                Remove
              </button>
            </div>
          </div>
        </li>
        {/* Cart item */}
        <li className="sm:flex items-center py-6 border-b border-gray-200">
          <a
            className="block mb-4 sm:mb-0 mr-5 md:w-32 xl:w-auto shrink-0"
            href="#0"
          >
            <img
              className="rounded-sm"
              src={Related02}
              width="200"
              height="142"
              alt="Product 02"
            />
          </a>
          <div className="grow">
            <a href="#0">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                Web Development Ultimate Course 2021
              </h3>
            </a>
            <div className="text-sm mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut.
            </div>
            {/* Product meta */}
            <div className="flex flex-wrap justify-between items-center">
              {/* Rating and price */}
              <div className="flex flex-wrap items-center space-x-2 mr-2">
                {/* Rating */}
                <div className="flex items-center space-x-2">
                  {/* Stars */}
                  <div className="flex space-x-1">
                    <button>
                      <span className="sr-only">1 star</span>
                      <svg
                        className="w-4 h-4 fill-current text-yellow-500"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                      </svg>
                    </button>
                    <button>
                      <span className="sr-only">2 stars</span>
                      <svg
                        className="w-4 h-4 fill-current text-yellow-500"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                      </svg>
                    </button>
                    <button>
                      <span className="sr-only">3 stars</span>
                      <svg
                        className="w-4 h-4 fill-current text-yellow-500"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                      </svg>
                    </button>
                    <button>
                      <span className="sr-only">4 stars</span>
                      <svg
                        className="w-4 h-4 fill-current text-yellow-500"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                      </svg>
                    </button>
                    <button>
                      <span className="sr-only">5 stars</span>
                      <svg
                        className="w-4 h-4 fill-current text-gray-300"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                      </svg>
                    </button>
                  </div>
                  {/* Rate */}
                  <div className="inline-flex text-sm font-medium text-yellow-600">
                    4.2
                  </div>
                </div>
                <div className="text-gray-400">·</div>
                {/* Price */}
                <div>
                  <div className="inline-flex text-sm font-medium bg-green-100 text-green-600 rounded-full text-center px-2 py-0.5">
                    $89.00
                  </div>
                </div>
              </div>
              <button className="text-sm underline hover:no-underline">
                Remove
              </button>
            </div>
          </div>
        </li>
        {/* Cart item */}
        <li className="sm:flex items-center py-6 border-b border-gray-200">
          <a
            className="block mb-4 sm:mb-0 mr-5 md:w-32 xl:w-auto shrink-0"
            href="#0"
          >
            <img
              className="rounded-sm"
              src={Related03}
              width="200"
              height="142"
              alt="Product 03"
            />
          </a>
          <div className="grow">
            <a href="#0">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                Full-Stack JavaScript Course!
              </h3>
            </a>
            <div className="text-sm mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut.
            </div>
            {/* Product meta */}
            <div className="flex flex-wrap justify-between items-center">
              {/* Rating and price */}
              <div className="flex flex-wrap items-center space-x-2 mr-2">
                {/* Rating */}
                <div className="flex items-center space-x-2">
                  {/* Stars */}
                  <div className="flex space-x-1">
                    <button>
                      <span className="sr-only">1 star</span>
                      <svg
                        className="w-4 h-4 fill-current text-yellow-500"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                      </svg>
                    </button>
                    <button>
                      <span className="sr-only">2 stars</span>
                      <svg
                        className="w-4 h-4 fill-current text-yellow-500"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                      </svg>
                    </button>
                    <button>
                      <span className="sr-only">3 stars</span>
                      <svg
                        className="w-4 h-4 fill-current text-yellow-500"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                      </svg>
                    </button>
                    <button>
                      <span className="sr-only">4 stars</span>
                      <svg
                        className="w-4 h-4 fill-current text-yellow-500"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                      </svg>
                    </button>
                    <button>
                      <span className="sr-only">5 stars</span>
                      <svg
                        className="w-4 h-4 fill-current text-gray-300"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                      </svg>
                    </button>
                  </div>
                  {/* Rate */}
                  <div className="inline-flex text-sm font-medium text-yellow-600">
                    4.2
                  </div>
                </div>
                <div className="text-gray-400">·</div>
                {/* Price */}
                <div>
                  <div className="inline-flex text-sm font-medium bg-green-100 text-green-600 rounded-full text-center px-2 py-0.5">
                    $89.00
                  </div>
                </div>
              </div>
              <button className="text-sm underline hover:no-underline">
                Remove
              </button>
            </div>
          </div>
        </li>
      </ul>

      <div className="mt-6">
        <a
          className="text-sm font-medium text-black hover:text-black"
          href="#0"
        >
          &lt;- Back To Shopping
        </a>
      </div>
    </>
  );
}

export default CartItems;
