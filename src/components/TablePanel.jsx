/* eslint-disable react/prop-types */
import RoundedPanel from "./RoundedPanel"
import { FaEdit, FaDownload  } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { useState, useMemo } from 'react';
import { LuArchive } from "react-icons/lu";

const TablePanel = ({tableTitle, columnNames, data, actionColumn = [], search = false, category = [], sort = false, tableHeight}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(data);
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredDataMemo = useMemo(() => {
    let updatedData = data;

    if (searchTerm) {
      updatedData = updatedData.filter((item) =>
        Object.values(item).some((val) =>
          val.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    if (selectedCategory) {
      updatedData = updatedData.filter((item) => item.category === selectedCategory);
    }

    return updatedData;
  }, [searchTerm, selectedCategory, data]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSort = (key) => {
    const sortedData = [...filteredData].sort((a, b) => 
      a[key] > b[key] ? 1 : -1
    );
    setFilteredData(sortedData);
  };


  return (
    <>
      <RoundedPanel bgcolor={'bg-slate-100 mb-2 '}>
        <div className="flex items-center justify-between mb-2">
          <p className="flex flex-row items-center justify-start gap-2 font-bold text-pri text-lg">{tableTitle}</p>
          <div className="">
            {search && (
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearch}
                className="p-2 border rounded-md bg-slate-50"
              />
            )}
            {category.length > 0 && (
                <select value={selectedCategory} onChange={handleCategoryChange} className="p-2 border border-gray-300 ml-2 rounded-md">
                  <option value="">All Categories</option>
                  {category.map((cat, index) => (
                    <option key={index} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              )}
          </div>
        </div>
        {category.length > 0 && (
          <div className={`overflow-x-auto ${tableHeight}`}>
            <table className={`min-w-full bg-white border border-separate border-spacing-0 border-gray-200 rounded-md table-auto relative`}>
              <thead className="top-0 sticky">
                <tr className="bg-slate-200">
                  {columnNames.map((colName, index) => (
                    <th
                      key={index}
                      onClick={() => sort && handleSort(colName.toLowerCase())}
                      className="py-2 px-4 border-b border-gray-200 text-left cursor-pointer hover:bg-gray-100"
                    >
                      {colName}
                    </th>
                  ))}
                  {actionColumn.length > 0 && (
                    <th className="py-2 px-4 border-b border-gray-200">Actions</th>
                  )}
                </tr>
              </thead>
              <tbody>
                {filteredDataMemo.map((row, rowIndex) => (
                  <tr key={rowIndex} className="hover:bg-gray-50">
                    {columnNames.map((colName, colIndex) => (
                      <td key={colIndex} className="py-2 px-4 border-b border-gray-200">
                        {row[colName.toLowerCase()]}
                      </td>
                    ))}
                    {/* Actions */}
                    {actionColumn.length > 0 && (
                      <td className="py-2 px-4 border-b border-gray-200 flex flex-row items-center justify-center">
                        {actionColumn.includes('edit') && (
                          <button
                            className="text-blue-500 mr-2"
                            onClick={() => alert(`Edit ${rowIndex}`)}
                          >
                            <FaEdit size={'1.5em'}/>
                          </button>
                        )}
                        {actionColumn.includes('archive') && (
                          <button
                            className="text-green-500 mr-2"
                            onClick={() => alert(`Archive ${rowIndex}`)}
                          >
                            <LuArchive size={'1.5em'}/>
                          </button>
                        )}
                        {actionColumn.includes('delete') && (
                          <button
                            className="text-red-500 mr-2"
                            onClick={() => alert(`Delete ${rowIndex}`)}
                          >
                            <MdDeleteForever size={'1.5em'}/>
                          </button>
                        )}
                        {actionColumn.includes('download') && (
                          <button
                            className="text-green-500"
                            onClick={() => alert(`Download ${rowIndex}`)}
                          >
                            <FaDownload size={'1.5em'}/>
                          </button>
                        )}
                        
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </RoundedPanel>
    </>
  )
}

export default TablePanel