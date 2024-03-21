import React, { useState, useEffect } from "react";

function CartItem(props) {
  const [qty, setQty] = useState(1);
  const [price, setPrice] = useState(props.product.price);

  const handleChangeQty = (e) => {
    var value = Math.abs(e.target.value);
    setQty(value);
    props.handleChangeQty(value, props.index);
  };
  const handleChangePrice = (e) => {
    var value = Math.abs(e.target.value);
    setPrice(value);
    props.handleChangePrice(value, props.index);
  };
  useEffect(() => {
    // quantity updated
    setQty(props.product.quantity);
    setPrice(props.product.price);
  }, [props.product.quantity, props.product.price]);
  return (
    <div className="flex space-x-5">
      <img
        className="w-24 h-24"
        src={props.product.photo}
        alt={props.product.name}
      />
      <div className="flex flex-col space-y-2">
        <h3 className="text-sm font-semibold text-gray-800 mb-1">
          {props.product.name}
        </h3>
        {/* Price */}
        <div className=" relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-500 sm:text-sm"> ₦ </span>
          </div>
          <input
            type="text"
            name="price"
            id="price"
            className="focus:ring-black h-10 focus:border-black block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
            value={price}
            onChange={handleChangePrice}
          />
        </div>
        <div className="flex justify-between">
          <div className="custom-number-input h-10 w-32">
            <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent">
              <button
                data-action="decrement"
                disabled={qty < 2}
                onClick={() => {
                  setQty(qty - 1);
                  props.handleChangeQty(qty - 1, props.index);
                }}
                className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
              >
                <span className="m-auto text-2xl font-thin">−</span>
              </button>
              <input
                type="number"
                className="outline-none border-0 focus:outline-0 focus:ring-0 text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
                name="custom-input-number"
                min="0"
                onChange={handleChangeQty}
                value={qty}
              ></input>
              <button
                data-action="increment"
                onClick={() => {
                  setQty(qty + 1);
                  props.handleChangeQty(qty + 1, props.index);
                }}
                className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
              >
                <span className="m-auto text-2xl font-thin">+</span>
              </button>
            </div>
          </div>

          <button
            className="text-sm underline hover:no-underline"
            onClick={() => props.handleRemove(props.product.id)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
