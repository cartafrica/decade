import React from "react";
import { useNavigate } from "react-router-dom";

function CustomersTableItem(props) {
  const navigate = useNavigate();
  const handleRowClick = (event, row) => {
    if (event.metaKey || event.ctrlKey) {
      const win = window.open(`/customers/${row.id}`, "_blank");
      win?.focus();
    } else {
      navigate(`/customers/${row.id}`);
    }
  };
  return (
    <tbody className="text-sm">
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
          <div className="flex items-center">
            <div className="font-medium text-gray-800">{props.name}</div>
          </div>
        </td>
        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
          <div className="text-center">{props.orders}</div>
        </td>
        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
          <div className="text-left font-medium text-green-500">
            {props.spent}
          </div>
        </td>
      </tr>
    </tbody>
  );
}

export default CustomersTableItem;
