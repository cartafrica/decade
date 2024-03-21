import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import './css/style.css';

import './charts/ChartjsConfig';

// Import pages
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/ecommerce/Orders";
import Order from "./pages/ecommerce/Order";
import Products from "./pages/ecommerce/Products";
import FormPage from "./pages/component/FormPage";
import Cart from "./pages/ecommerce/Cart";
import Customers from "./pages/ecommerce/Customers";
import Shipping from "./pages/Shipping";
import Index from "./pages/Index";
import Settings from "./pages/SettingsIndex";
import AccountPanel from "./partials/settings/AccountPanel";
import PayoutPanel from "./partials/settings/PayoutPanel";
import VerifyPanel from "./partials/settings/VerifyPanel";
import FeedbackPanel from "./partials/settings/FeedbackPanel";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import PageNotFound from "./pages/utility/PageNotFound";

function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Navigate to="/signin" />} />
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/signup" element={<Signup />} />

        <Route element={<Index />}>
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/orders" element={<Orders />} />
          <Route exact path="/orders/:id" element={<Order />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/produc" element={<FormPage />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/customers" element={<Customers />} />
          <Route exact path="/shipping" element={<Shipping />} />
          <Route element={<Settings />}>
            <Route path="/settings/account" element={<AccountPanel />} />
            <Route path="/settings/payout" element={<PayoutPanel />} />
            <Route path="/settings/verify" element={<VerifyPanel />} />
            <Route path="/settings/feedback" element={<FeedbackPanel />} />
          </Route>
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
