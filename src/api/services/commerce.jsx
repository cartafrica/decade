import axiosClient from "../axiosClient";

// Products
export const fetchProducts = () => {
  return axiosClient.get("/api/v1/seller/products");
};

export const createProduct = (data) => {
  return axiosClient.post("/api/v1/seller/products", data);
};

export const uploadProductPhoto = (id, data) => {
  return axiosClient.post("/api/v1/seller/products/" + id + "/photo", data);
};

export const updateProduct = (id, data) => {
  return axiosClient.post("/api/v1/seller/products/" + id, data);
};

export const deleteProduct = (id) => {
  return axiosClient.delete("/api/v1/seller/products/" + id);
};

// Orders
export const fetchOrders = () => {
  return axiosClient.get("/api/v1/seller/orders");
};

// Cart
export const createCart = (data) => {
  return axiosClient.post("/api/v1/seller/orders", data);
};
