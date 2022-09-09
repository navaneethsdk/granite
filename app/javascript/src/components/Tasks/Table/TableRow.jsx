import React from "react";

import classnames from "classnames";
import PropTypes from "prop-types";

import Tooltip from "components/Tooltip";

const TableRow = ({
  type = "pending",
  data,
  destroyTask,
  showTask,
  handleProgressToggle,
  starTask,
}) => {
  const isCompleted = type === "completed";
  const toggledProgress = isCompleted ? "pending" : "completed";

  return (
    <tbody className="divide-y divide-gray-200 bg-white">
      {data.map(rowData => (
        <tr key={rowData.id}>
          <td className="text-center">
            <input
              checked={isCompleted}
              type="checkbox"
              className="text-bb-purple rounded focus:ring-bb-purple ml-6 h-4
                  w-4 cursor-pointer border-gray-300"
              onChange={() =>
                handleProgressToggle({
                  slug: rowData.slug,
                  progress: toggledProgress,
                })
              }
            />
          </td>
          <td
            className={classnames(
              "text-bb-purple truncate block w-64 px-6 py-4 text-sm font-medium capitalize leading-8",
              {
                "cursor-pointer": !isCompleted,
                "text-opacity-50": isCompleted,
              }
            )}
            onClick={() => !isCompleted && showTask(rowData.slug)}
          >
            <Tooltip content={rowData.title} delay={200} direction="top">
              <div className="truncate max-w-64 ">{rowData.title}</div>
            </Tooltip>
          </td>
          {!isCompleted && (
            <>
              <td
                className="text-bb-gray-600 whitespace-no-wrap px-6 py-4 text-sm
                            font-medium leading-5"
              >
                {rowData.assigned_user.name}
              </td>
              <td className="cursor-pointer py-4 pl-6 text-center">
                <i
                  className={classnames(
                    "transition hover:text-bb-yellow p-1 text-2xl duration-300 ease-in-out",
                    {
                      "text-bb-border ri-star-line":
                        rowData.status !== "starred",
                    },
                    {
                      "text-bb-yellow ri-star-fill text-white":
                        rowData.status === "starred",
                    }
                  )}
                  onClick={() => starTask(rowData.slug, rowData.status)}
                />
              </td>
            </>
          )}
          {isCompleted && (
            <>
              <td style={{ width: "164px" }} />
              <td className="cursor-pointer py-4 pl-6 text-center">
                <i
                  className="text-bb-border transition ri-delete-bin-5-line
                  hover:text-bb-red text-center text-2xl
                  duration-300 ease-in-out"
                  onClick={() => destroyTask(rowData.slug)}
                />
              </td>
            </>
          )}
        </tr>
      ))}
    </tbody>
  );
};

TableRow.propTypes = {
  data: PropTypes.array.isRequired,
  type: PropTypes.string,
  destroyTask: PropTypes.func,
  showTask: PropTypes.func,
  handleProgressToggle: PropTypes.func,
  starTask: PropTypes.func,
};

export default TableRow;
