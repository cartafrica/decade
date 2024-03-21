import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function OrdersTableItem(props) {
  const statusColor = (status) => {
    switch (status) {
      case "Approved":
        return "bg-green-100 text-green-600";
      case "Refunded":
        return "bg-yellow-100 text-yellow-600";
      default:
        return "bg-gray-100 text-gray-500";
    }
  };
  const navigate = useNavigate();
  const handleRowClick = (event, row) => {
    if (event.metaKey || event.ctrlKey) {
      const win = window.open(`/orders/${row.id}`, "_blank");
      win?.focus();
    } else {
      navigate(`/orders/${row.id}`);
    }
  };

  return (
    <tbody className="text-sm">
      {/* Row */}
      <tr
        onClick={(event) => handleRowClick(event, props)}
        className="hover:bg-slate-100 hover:cursor-pointer"
      >
        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
          <div className="flex items-center">
            <label className="inline-flex">
              <span className="sr-only">Select</span>
              <input
                id={props.id}
                className="form-checkbox z-10"
                type="checkbox"
                onChange={props.handleClick}
                checked={props.isChecked}
              />
            </label>
          </div>
        </td>
        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
          <div className="font-medium text-light-blue-500">{props.order}</div>
        </td>
        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
          <div>{props.date}</div>
        </td>
        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
          <div className="font-medium text-gray-800">{props.customer}</div>
        </td>
        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
          <div className="text-left font-medium text-green-500">
            {props.total}
          </div>
        </td>
        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
          <div className="text-center">{props.items}</div>
        </td>
        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
          <div
            className={`inline-flex font-medium rounded-full text-center px-2.5 py-0.5 ${statusColor(
              props.status
            )}`}
          >
            {props.status}
          </div>
        </td>
      </tr>
    </tbody>
  );
}

export default OrdersTableItem;
