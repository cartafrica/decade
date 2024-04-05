import React, { useEffect, useState } from "react";

import {
  createProduct,
  deleteProduct,
  fetchProducts,
  updateProduct,
  uploadProductPhoto,
} from "../../api/services/commerce";
import ModalBasic from "../../components/ModalBasic";
import AppImage01 from "../../images/applications-image-01.jpg";
import { formatValue } from "../../utils/Utils";

function Products() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [feedbackModalOpen, setFeedbackModalOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "Product X",
    price: 500000,
    description: "one of mine",
  });
  const [editProduct, setEditProduct] = useState({});
  // Format the price above to USD using the locale, style, and currency.

  const handleCreateProduct = async (e) => {
    e.preventDefault();
    console.log(newProduct);
    await createProduct(newProduct)
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleUploadProductPhoto = async () => {
    await uploadProductPhoto(newProduct.id, newProduct.photo)
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleUpdateProduct = async (id) => {
    console.log(id);
    await updateProduct(id, editProduct)
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleDeleteProduct = async (id) => {
    console.log(id);
    await deleteProduct(id)
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchProducts()
        .then((response) => {
          console.log(response.data);
          setProducts(response.data.products);
        })
        .catch((e) => {
          console.log(e);
        });
    };

    fetchData();
  }, []);
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
      {/* Page header */}
      <div className="sm:flex sm:justify-between sm:items-center mb-8">
        {/* Left: Title */}
        <div className="mb-4 sm:mb-0">
          <h1 className="text-2xl md:text-3xl text-gray-800 font-bold">
            Products{" "}
          </h1>
        </div>

        {/* Right: Actions */}
        <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
          {/* Add customer button */}
          <button
            className="btn bg-black hover:bg-black text-white"
            aria-controls="feedback-modal"
            onClick={(e) => {
              e.stopPropagation();
              setFeedbackModalOpen(true);
            }}
          >
            <svg
              className="w-4 h-4 fill-current opacity-50 shrink-0"
              viewBox="0 0 16 16"
            >
              <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
            </svg>
            <span className="hidden xs:block ml-2">Add Product</span>
          </button>
        </div>
      </div>

      {/* Page content */}
      <div>
        {/* Product cards */}
        <div className="mt-8">
          <div className="grid grid-cols-12 gap-6">
            {products.map((product) => (
              <div
                key={product._id}
                className="col-span-full sm:col-span-6 xl:col-span-3 bg-white shadow-lg rounded-sm border border-gray-200 overflow-hidden"
              >
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
                        {product.name}
                      </h3>
                      <p className="text-xs hover:text-sm truncate">
                        {product.description}
                      </p>
                    </header>
                    {/* Rating and price */}
                    <div className="flex flex-wrap items-center mb-4">
                      {/* Price */}
                      <div className="flex-1">
                        <div className="inline-flex text-sm font-medium text-green-600 rounded-full text-center">
                          {formatValue(product.price)}
                        </div>
                      </div>
                      <div>
                        <button
                          className="btn-sm text-blue-500 hover:bg-blue-100"
                          onClick={(e) => {
                            e.stopPropagation();
                            setNewProduct(product);
                            setFeedbackModalOpen(true);
                          }}
                        >
                          Edit
                        </button>
                      </div>
                      <div>
                        <a
                          className="btn-sm text-red-500 hover:bg-red-100"
                          href="#0"
                        >
                          Delete
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="m-1.5">
        <ModalBasic
          id="feedback-modal"
          modalOpen={feedbackModalOpen}
          setModalOpen={setFeedbackModalOpen}
          title="Product Details"
        >
          {/* Modal content */}
          <div className="px-5 py-4">
            {/* <div className="text-sm">
              <div className="font-medium text-gray-800 mb-3">
                Let us know what you think 🙌
              </div>
            </div> */}
            <div className="space-y-3">
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="name"
                >
                  Product Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  className="form-input w-full px-2 py-1"
                  type="text"
                  value={newProduct.name}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, name: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="price"
                >
                  Product Price <span className="text-red-500">*</span>
                </label>
                <input
                  id="price"
                  className="form-input w-full px-2 py-1"
                  type="price"
                  value={newProduct.price}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, price: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="description"
                >
                  Product Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="description"
                  className="form-textarea w-full px-2 py-1"
                  rows="4"
                  value={newProduct.description}
                  onChange={(e) =>
                    setNewProduct({
                      ...newProduct,
                      description: e.target.value,
                    })
                  }
                  required
                ></textarea>
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="photo"
                >
                  Product Photo <span className="text-red-500">*</span>
                </label>
                <input
                  type="file"
                  id="photo"
                  className="form-input"
                  name="photo"
                  accept="image/png, image/jpeg"
                />
              </div>
            </div>
          </div>
          {/* Modal footer */}
          <div className="px-5 py-4 border-t border-gray-200">
            <div className="flex flex-wrap justify-end space-x-2">
              <button
                className="btn-sm border-gray-200 hover:border-gray-300 text-gray-600"
                onClick={(e) => {
                  e.stopPropagation();
                  setFeedbackModalOpen(false);
                }}
              >
                Cancel
              </button>
              <button
                className="btn-sm bg-black hover:bg-black text-white"
                onClick={handleCreateProduct}
              >
                Submit
              </button>
            </div>
          </div>
        </ModalBasic>
      </div>
    </div>
  );
}

export default Products;
