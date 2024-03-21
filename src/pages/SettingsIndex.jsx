import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import SettingsSidebar from "../partials/settings/SettingsSidebar";

function Settings() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full lg:w-3/4 mx-auto">
      {/* Page header */}
      <div className="mb-8">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl text-gray-800 font-bold">
          Account Settings
        </h1>
      </div>

      {/* Content */}
      <div className="bg-white shadow-lg rounded-sm mb-8">
        <div className="flex flex-col md:flex-row md:-mr-px">
          <SettingsSidebar />
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Settings;
