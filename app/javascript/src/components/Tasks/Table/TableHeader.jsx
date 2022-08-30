import React from "react";

const TableHeader = () => (
  <thead>
    <tr>
      <th className="w-1" />
      <th
        className="text-bb-gray-600 bg-gray-50 px-6 py-3 text-left text-xs
        font-bold uppercase leading-4 tracking-wider text-opacity-50"
      >
        Title
      </th>
      <th
        className="text-bb-gray-600 bg-gray-50 px-6 py-3 text-left text-sm
        font-bold leading-4 tracking-wider text-opacity-50"
      >
        Assigned To
      </th>
      <th className="bg-gray-50 px-6 py-3" />
    </tr>
  </thead>
);

export default TableHeader;
