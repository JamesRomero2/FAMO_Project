import { IoMdArrowDropdown } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { useCallback, useLayoutEffect, useState } from "react";
import { requestToServer } from "../api/GlobalAPI";
import DynamicTable from "../components/DynamicTable";

const SupplyReport = () => {
  const navigate = useNavigate();
  const [fullInventory, setFullInventory] = useState([])
  const handleClick = (redirect) => {
    navigate(redirect);
  };
  const initialization = useCallback(async () => {
    requestToServer('get', 'getFullInventoryDetails', '', true)
      .then((response) => {
        setFullInventory(response);
      }).catch((error) => {
        console.error('Server GET error:', error);
      });
    
  }, []);
  useLayoutEffect(() => {
    initialization();
  }, [initialization]);
  return (
    <div className="flex flex-col w-full relative">
      <div className="flex flex-row items-center justify-between mb-4">
        <p className="font-bold text-lg">Supply Report</p>
        {/* <div className="flex items-center justify-between gap-2">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Generate Report</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => handleClick('/reporthistory')}>Report History</button>
          <div className="px-4 py-2 flex items-center gap-2">Daily <IoMdArrowDropdown size={'1.1em'}/></div>
        </div> */}
      </div>
      <DynamicTable data={fullInventory} tableTitle={"Full Inventory"} search={true} actions={[]} onItemClick={''}/>
      {/* <TablePanel
          tableTitle={formatDateToday()}
          columnNames={['Item Name', 'Unit', 'Quantity', 'New Delivery', 'Item Out', 'Item Balance', 'Category']}
          data={inventoryData}
          actionColumn={[]}
          search={false}
          category={['Electronics', 'Painting', 'Plumbing', 'Aircon Tech']}
          sort={true}
          tableHeight={'h-full'}
        /> */}
    </div>
  )
}

export default SupplyReport