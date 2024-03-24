import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createProduct,
  deleteProduct,
  fetchProducts,
  updateProduct,
  uploadProductPhoto,
} from "../../api/services/commerce";
import ModalBasic from "../../components/ModalBasic";
import AppImage01 from "../../images/applications-image-01.jpg";
import LoadingSpinner from "../../components/LoadingSpinner";

function Products() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [updateProductModal, setUpdateProductModal] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [confirmationModal, setConfirmationModal] = useState(false);
  const [feedbackModalOpen, setFeedbackModalOpen] = useState(false);
  const [loadingAddProduct, setLoadingAddProduct] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "Product X",
    price: 500000,
    description: "one of mine",
  });
  const [editProduct, setEditProduct] = useState({});
  // Format the price above to USD using the locale, style, and currency.
  let NGNaira = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  });

  const handleCreateProduct = async (e) => {
    // e.preventDefault();
    console.log(newProduct);
    setLoadingAddProduct(true);
    await createProduct(newProduct)
      .then((response) => {
        console.log(response);
        setFeedbackModalOpen(false);
        // console.log(setFeedbackModalOpen);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setLoadingAddProduct(false);
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
    setLoadingAddProduct(true);
    // console.log(_id);
    await updateProduct(id, editProduct)
      .then((response) => {
        console.log(response);
        console.log(id);
        navigate(0);
      })
      .catch((e) => {
        console.log(e.message, e.code);
      })
      .finally(() => {
        setLoadingAddProduct(false);
      });
  };

  const handleDeleteProduct = async (id) => {
    setLoadingAddProduct(true);

    await deleteProduct(id)
      .then((response) => {
        setProducts(products.filter((product) => product.id !== id));
        navigate(0);
        console.log(response);
      })
      .catch((e) => {
        console.log("Error deleting product:", e);
      })
      .finally(() => {
        setLoadingAddProduct(false);
      });
  };

  const handleOpenDeleteModal = (product) => {
    setProductToDelete(product);
    setDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setProductToDelete(null);
    setDeleteModalOpen(false);
  };

  const handleConfirmDelete = async () => {
    if (productToDelete) {
      await handleDeleteProduct(productToDelete._id);
      handleCloseDeleteModal();
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchProducts(newProduct)
        .then((response) => {
          // console.log(response.data);
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
                          {NGNaira.format(product.price)}
                        </div>
                      </div>
                      <div>
                        <button
                          className="btn-sm text-blue-500 hover:bg-blue-100"
                          onClick={(e) => {
                            e.stopPropagation();
                            // handleUpdateProduct();
                            setEditProduct(product);
                            setUpdateProductModal(true);
                          }}
                        >
                          Edit
                        </button>
                      </div>
                      <div>
                        <button
                          className="btn-sm text-red-500 hover:bg-red-100"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleOpenDeleteModal(product);
                            setDeleteModalOpen(true);
                          }}
                          href="#0"
                        >
                          Delete
                        </button>
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
          modalOpen={deleteModalOpen}
          setModalOpen={setDeleteModalOpen}
          title="Product Details"
        >
          <div className="px-5 py-4">
            <p className="text-sm">
              Are you sure you want to delete this product?
            </p>
          </div>
          {/* Modal footer with confirm and cancel buttons */}
          <div className="px-5 py-4 border-t border-gray-200">
            <div className="flex flex-wrap justify-end space-x-2">
              <button
                className="btn-sm border-gray-200 hover:border-gray-300 text-gray-600"
                onClick={handleCloseDeleteModal}
              >
                Cancel
              </button>
              <button
                className="btn-sm bg-red-500 hover:bg-red-600 text-white"
                onClick={handleConfirmDelete}
              >
                {loadingAddProduct ? <LoadingSpinner /> : "Delete"}
              </button>
            </div>
          </div>
        </ModalBasic>
      </div>
      <div className="m-1.5">
        <ModalBasic
          id="feedback-modal"
          modalOpen={confirmationModal}
          setModalOpen={setConfirmationModal}
          title="Product Details"
        >
          <div className="px-5 py-4">
            <p className="text-sm">Product created Successfully...</p>
          </div>
          {/* Modal footer with confirm and cancel buttons */}
          <div className="px-5 py-4 border-t border-gray-200">
            <div className="flex flex-wrap justify-end space-x-2">
              <button
                className="btn-sm bg-red-500 hover:bg-red-600 text-white"
                onClick={() => {
                  setConfirmationModal(false);
                  navigate(0);
                }}
              >
                Done
              </button>
            </div>
          </div>
        </ModalBasic>
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
                onClick={(e) => {
                  e.stopPropagation();
                  handleCreateProduct();
                  setConfirmationModal(true);
                }}
              >
                {loadingAddProduct ? <LoadingSpinner /> : "Submit"}
              </button>
            </div>
          </div>
        </ModalBasic>

        <ModalBasic
          id="feedback-modal"
          modalOpen={updateProductModal}
          setModalOpen={setUpdateProductModal}
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
                  value={editProduct.name}
                  onChange={(e) =>
                    setEditProduct({ ...editProduct, name: e.target.value })
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
                  value={editProduct.price}
                  onChange={(e) =>
                    setEditProduct({ ...editProduct, price: e.target.value })
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
                  value={editProduct.description}
                  onChange={(e) =>
                    setEditProduct({
                      ...editProduct,
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
                  setUpdateProductModal(false);
                }}
              >
                Cancel
              </button>
              <button
                className="btn-sm bg-black hover:bg-black text-white"
                onClick={(e) => {
                  e.stopPropagation();
                  handleUpdateProduct(editProduct._id);
                  setUpdateProductModal(false);
                  // setConfirmationModal(true);
                }}
              >
                {loadingAddProduct ? <LoadingSpinner /> : "Submit"}
              </button>
            </div>
          </div>
        </ModalBasic>
      </div>
    </div>
  );
}

export default Products;
