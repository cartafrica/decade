import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function OrderListItem(props) {
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
      const win = window.open(`/dashboard/orders/${row.id}`, "_blank");
      win?.focus();
    } else {
      navigate(`/dashboard/orders/${row.id}`);
    }
  };

  return (
    <li className="p-3" onClick={(event) => handleRowClick(event, props)}>
     
      <div className="flex justify-between">
        <h3 className="font-semibold">{props.customer}</h3>
        <div
          className={`inline-flex font-medium rounded-full text-center px-2.5 py-0.5 ${statusColor(
            props.status
          )}`}
        >
          {props.status}
        </div>
      </div>
      <h3>{props.total}</h3>

      <small className="text-xs">
        {props.items} item{props.items > 1 && "s"}
      </small>
    </li>
  );
}

export default OrderListItem;
