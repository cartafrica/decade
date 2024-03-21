import React, { useState, useEffect, useRef } from "react";

import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import CartItems from "../../partials/ecommerce/CartItems";
import CartItem from "../../partials/ecommerce/CartItem";
import { CheckCircleIcon } from "@heroicons/react/outline";

function Cart() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [cart, addToCart] = useState([]);
  const [cartLink, setCartLink] = useState("");
  const [total, setTotal] = useState(0);
  const [productSearchInput, setProductSearchInput] = useState("");
  const wrapperRef = useRef(null);
  const cartLinkRef = useRef(null);
  const useOutsideAlerter = (ref) => {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setFilteredSuggestions([]);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };
  const suggestions = [
    {
      id: 1223,
      name: "The Essential Kit",
      price: 5000,
      photo:
        "https://cdn.shopify.com/s/files/1/0560/7109/4469/products/essential-kit_720x.png?v=1646152940",
    },
    {
      id: 1224,
      name: "Quick Wipes",
      price: 3000,
      photo:
        "https://cdn.shopify.com/s/files/1/0560/7109/4469/products/quick-wipes-box_720x.png?v=1646152929",
    },
    {
      id: 1225,
      name: "Cedar",
      price: 4000,
      photo:
        "https://cdn.shopify.com/s/files/1/0560/7109/4469/products/CEDAR-2_720x.png?v=1653145870",
    },
    {
      id: 1226,
      name: "170ml Sneaker Cleaner",
      price: 3500,
      photo:
        "https://cdn.shopify.com/s/files/1/0560/7109/4469/products/solution_720x.jpg?v=1646152925",
    },
    {
      id: 1227,
      name: "Microfiber Towel",
      price: 800,
      photo:
        "https://cdn.shopify.com/s/files/1/0560/7109/4469/products/cleaning-towel_dd332184-8580-4f0b-a6aa-baa4374e5ab2_720x.jpg?v=1646152928",
    },
    {
      id: 1228,
      name: "Shoe Cleaning Brush",
      price: 700,
      photo:
        "https://cdn.shopify.com/s/files/1/0560/7109/4469/products/shoe-brush_720x.jpg?v=1646152936",
    },
  ];
  const onChange = (e) => {
    const userInput = e.target.value;

    // Filter our suggestions that don't contain the user's input
    const unLinked = suggestions.filter(
      (suggestion) =>
        suggestion.name.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    setProductSearchInput(e.target.value);
    setFilteredSuggestions(unLinked);
  };
  const loseFocus = (key) => {
    if (key.keyCode === 13 || key.keyCode === 9) {
      setProductSearchInput("");
      setFilteredSuggestions([]);
    }
  };
  const handleRemove = (id) => {
    console.log("handleRemove");
    let items = cart.filter((product) => product.id !== id);
    addToCart(items);
  };
  const handleAddToCart = (product) => {
    var x;
    var exist = false;
    for (x in cart) {
      if (cart[x].id === product.id) {
        exist = true;
        let items = cart;
        let item = { ...items[x] };
        item.quantity = item.quantity + 1;
        items[x] = item;
        addToCart(items);
      }
    }
    if (!exist) {
      product.quantity = 1;
      addToCart(cart.concat(product));
    }
    setFilteredSuggestions([]);
    setProductSearchInput("");
  };

  useEffect(() => {
    cart.length > 0 && calcTotal();
  });
  const handleChangeQty = (newQty, index) => {
    let items = cart;
    let item = { ...items[index] };
    item.quantity = newQty;
    items[index] = item;
    addToCart(items);
    calcTotal();
  };
  const handleChangePrice = (newPrice, index) => {
    let items = cart;
    let item = { ...items[index] };
    item.price = newPrice;
    items[index] = item;
    addToCart(items);
    calcTotal();
  };
  const calcTotal = () => {
    var total = cart.map((i) => i.price * i.quantity).reduce((a, b) => a + b);
    setTotal(total);
  };
  function randomString() {
    var result = "";
    const chars =
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (var i = 6; i > 0; --i)
      result += chars[Math.round(Math.random() * (chars.length - 1))];
    setCartLink("https://cart.africa/l/" + result);
  }
  useOutsideAlerter(wrapperRef);

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full">
      {/* Page content */}
      <div className="max-w-5xl mx-auto">
        <div className="bg-white p-5 shadow-lg rounded-sm border border-gray-200 lg:w-2/4 mx-auto">
          <div className="text-gray-800 font-semibold mb-2">Create Cart</div>
          {cartLink !== "" && (
            <div className="w-full  mx-auto text-center">
              <div>
                <CheckCircleIcon className="h-24 w-24 text-green-500 mx-auto" />
                <div
                  className="w-full my-4 py-4 select-all border border-gray-200"
                  onClick={() => navigator.clipboard.writeText(cartLink)}
                >
                  {cartLink}
                </div>
              </div>
              <small className="text-sm">
                You have created a new cart! Copy the link above and share to
                your customer to complete their order.
              </small>
            </div>
          )}
          {cartLink === "" && (
            <>
              <div className="relative" ref={wrapperRef}>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="promo"
                >
                  Find Product
                </label>
                <input
                  onChange={onChange}
                  onKeyDown={loseFocus}
                  onBlur={loseFocus}
                  value={productSearchInput}
                  autoComplete="off"
                  data-lpignore="true"
                  data-form-type="other"
                  className="form-input w-full mb-2"
                  type="text"
                  placeholder="Type product name..."
                />
                {filteredSuggestions.length > 0 && (
                  <ul className="absolute bg-white w-full z-10 max-h-96 overflow-scroll shadow-lg border border-gray-200">
                    {filteredSuggestions.map((suggestion, index) => {
                      return (
                        <li
                          className={`hover:bg-black hover:text-white px-2 py-2`}
                          key={index}
                          onClick={() => handleAddToCart(suggestion)}
                        >
                          <div className="flex items-center space-x-3">
                            <img
                              className="w-12 h-12 rounded-md"
                              src={suggestion.photo}
                              alt="Product 01"
                            />
                            <div>
                              <h3 className="text-sm font-semibold">
                                {suggestion.name}
                              </h3>
                              <small>
                                ₦{suggestion.price.toLocaleString("en-US")}
                              </small>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
              <ul className="mb-4">
                {cart.map((item, index) => {
                  return (
                    <li
                      className="flex flex-col py-6 border-b border-gray-200"
                      key={index}
                    >
                      <CartItem
                        product={item}
                        handleChangeQty={handleChangeQty}
                        handleChangePrice={handleChangePrice}
                        handleRemove={handleRemove}
                        index={index}
                      />
                    </li>
                  );
                })}
              </ul>
              {cart.length > 0 && (
                <>
                  <div className="mb-4">
                    <button
                      className="btn w-full bg-black hover:bg-black text-white"
                      onClick={randomString}
                    >
                      Get Link - ₦{total}
                    </button>
                  </div>
                  <div className="text-xs text-gray-500 italic text-center">
                    Clicking this button will generate a cart link you can share
                    with your customer to complete purchase.
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
