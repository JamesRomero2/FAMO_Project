/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { FaSort, FaSortUp, FaSortDown, FaEdit, FaArchive, FaTrash, FaDownload } from 'react-icons/fa';
import RoundedPanel from './RoundedPanel';

const actionIcons = {
  edit: FaEdit,
  archive: FaArchive,
  delete: FaTrash,
  download: FaDownload,
};

// Helper function to convert header keys to paragraph case
const toParagraphCase = (str) => {
  const lowerCased = str.toLowerCase();
  return lowerCased.charAt(0).toUpperCase() + lowerCased.slice(1);
};

const DynamicTable = ({ data, tableTitle, search, actions, onItemClick = () => {} }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
  const [searchTerm, setSearchTerm] = useState("");

  // Function to handle sorting when a header is clicked
  const onSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const handleRowClick = (item, action) => {
    if (typeof onItemClick === 'function') {
      onItemClick(item, action);  // Call only if onItemClick is a function
    }
  };

  // Sorting logic based on the sortConfig state
  const sortedData = React.useMemo(() => {
    if (!sortConfig.key) return data;
    return [...data].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
  }, [data, sortConfig]);

  // Filtered data based on the search term
  const filteredData = React.useMemo(() => {
    if (!searchTerm) return sortedData;
    return sortedData.filter(item =>
      Object.values(item).some(val =>
        val.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, sortedData]);

  // Extract the keys of the first data object to use as table headers
  const headers = data.length > 0 ? Object.keys(data[0]) : [];

  return (
    <RoundedPanel bgcolor={'bg-slate-100 mb-2'}>
      <div className="mt-2">
        {tableTitle && <h2 className="text-2xl font-bold text-pri">{tableTitle}</h2>}
        <div className="flex justify-between items-center mb-4">
          {search && (
            <input
              type="text"
              placeholder="Search..."
              className="p-2 border border-gray-300 rounded-md"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          )}
        </div>
        <div className="h-96 overflow-x-auto">
          <table className="min-w-full table-auto divide-y divide-gray-200">
            <thead className="bg-gray-50 ">
              <tr className='top-0 sticky bg-white z-10'>
                {headers.map((header) => (
                  <th
                    key={header}
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                    onClick={() => onSort(header)}
                  >
                    <div className="flex items-center space-x-2">
                      <span>{toParagraphCase(header)}</span>
                      {sortConfig.key === header ? (
                        sortConfig.direction === 'ascending' ? (
                          <FaSortUp />
                        ) : (
                          <FaSortDown />
                        )
                      ) : (
                        <FaSort />
                      )}
                    </div>
                  </th>
                ))}
                
                {actions && actions.length > 0 && (
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium bg-white text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                )}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredData.map((item, idx) => (
                <tr key={idx} onClick={() => handleRowClick(item)} className="cursor-pointer hover:bg-gray-100">
                  {headers.map((key) => (
                    <td
                      key={key}
                      className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                    >
                      {item[key]} {/* Bracket notation to access keys with spaces */}
                    </td>
                  ))}
                  {/* Conditionally render action buttons based on actions prop */}
                  {actions && actions.length > 0 && (
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <div className="flex space-x-2">
                        {actions.map((action) => {
                          const IconComponent = actionIcons[action];
                          return (
                            IconComponent && (
                              <button
                                key={action}
                                className="relative group p-2 rounded hover:bg-gray-100"
                                aria-label={action}
                                onClick={() => handleRowClick(item, action)}
                              >
                                <IconComponent className="text-gray-500" />
                                <span className="absolute bottom-full mb-1 hidden group-hover:inline-block text-xs bg-gray-700 text-white py-1 px-2 rounded z-20">
                                  {action}
                                </span>
                              </button>
                            )
                          );
                        })}
                      </div>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </RoundedPanel>
  );
};

export default DynamicTable;
