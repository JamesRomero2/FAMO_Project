import { IoMdArrowDropdown } from "react-icons/io";
import { formatDateToday } from "../utils/DateToday";
import TablePanel from "../components/TablePanel";
import { useNavigate } from 'react-router-dom';
const SupplyReport = () => {
  const navigate = useNavigate();
  const handleClick = (redirect) => {
    navigate(redirect);
  };
  const inventoryData = [
    { 
      "item name": 'Laptop', 
      unit: 'pcs', 
      quantity: 50, 
      "new delivery": 10, 
      "item out": 5, 
      "item balance": 55, 
      category: 'Electronics', 
    },
    { 
      "item name": 'Printer Ink', 
      unit: 'bottles', 
      quantity: 100, 
      "new delivery": 50, 
      "item out": 30, 
      "item balance": 120, 
      category: 'Office Supplies', 
    },
    { 
      "item name": 'Notebook', 
      unit: 'pcs', 
      quantity: 200, 
      "new delivery": 100, 
      "item out": 150, 
      "item balance": 150, 
      category: 'Stationery', 
    },
    { 
      "item name": 'Keyboard', 
      unit: 'pcs', 
      quantity: 40, 
      "new delivery": 20, 
      "item out": 30, 
      "item balance": 30, 
      category: 'Electronics', 
    },
    { 
      "item name": 'Mouse', 
      unit: 'pcs', 
      quantity: 0, 
      "new delivery": 50, 
      "item out": 0, 
      "item balance": 50, 
      category: 'Electronics', 
    }
  ];
  return (
    <div className="flex flex-col w-full relative">
      <div className="flex flex-row items-center justify-between mb-4">
        <p className="font-bold text-lg">Supply Report</p>
        <div className="flex items-center justify-between gap-2">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Generate Report</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => handleClick('/reporthistory')}>Report History</button>
          <div className="px-4 py-2 flex items-center gap-2">Daily <IoMdArrowDropdown size={'1.1em'}/></div>
        </div>
      </div>
      <TablePanel
          tableTitle={formatDateToday()}
          columnNames={['Item Name', 'Unit', 'Quantity', 'New Delivery', 'Item Out', 'Item Balance', 'Category']}
          data={inventoryData}
          actionColumn={[]}
          search={false}
          category={['Electronics', 'Painting', 'Plumbing', 'Aircon Tech']}
          sort={true}
          tableHeight={'h-full'}
        />
    </div>
  )
}

export default SupplyReport