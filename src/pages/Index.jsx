import React, { useEffect, useState } from "react";

import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import { Navigate, Outlet, useParams } from "react-router-dom";
import Dashboard from "./Dashboard";
import Orders from "./ecommerce/Orders";
import Shop from "./ecommerce/Products";
import Customers from "./Customers";
import Shipping from "./Shipping";
import Cart from "./ecommerce/Cart";
import { useSelector } from "react-redux";

function Index() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { page, subpage } = useParams();
  const { isAuthenticated } = useSelector((state) => state.auth);

  if (!isAuthenticated) {
    // Redirect to login or render an alternative UI
    return <Navigate to="/signin" />;
  }
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Index;
