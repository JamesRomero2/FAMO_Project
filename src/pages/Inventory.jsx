/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import RoundedPanel from "../components/RoundedPanel"
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import TablePanel from "../components/TablePanel";
import Modal from 'react-modal';
import { useCallback, useLayoutEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { IoMdClose } from "react-icons/io";
import { requestToServer } from "../api/GlobalAPI";
import DynamicTable from "../components/DynamicTable";

Modal.setAppElement('#root');
const categories = ['Electronics', 'Painting', 'Plumbing', 'Aircon Tech'];

const Inventory = () => {
  const [addItemModal, setaddItemModal] = useState(false);
  const [categoryPercent, setCategoryPercent] = useState([]);
  const [pieChartDdetails, setPieChartDdetails] = useState([]);
  const [productData, setProductData] = useState([]);

  const initialization = useCallback(async() => {
    requestToServer('get', 'inventoryCategoryPercentage', '', true)
      .then((response) => {
        setCategoryPercent(response);
      }).catch((error) => {
        console.error('Server GET error:', error);
      });
    requestToServer('get', 'pieChartDetails', '', true)
      .then((response) => {
        setPieChartDdetails(response);
      }).catch((error) => {
        console.error('Server GET error:', error);
      });
    requestToServer('get', 'fetchAllInventoryDashboard', '', true)
      .then((response) => {
        setProductData(response);
      }).catch((error) => {
        console.error('Server GET error:', error);
      });
    }, [],
  )
  


  const closeModal = () => {
    setaddItemModal(false);
  }
  const data = [
    { name: 'Full', value: 1145 },
    { name: 'Mid', value: 850 },
    { name: 'Low', value: 1201 },
    { name: 'Out of Stock', value: 860 },
  ];
  const COLORS = ['#53DFB5', '#59C5F7', '#FF949F', '#FF9742'];

  useLayoutEffect(() => {
    initialization();
  }, [initialization]);

  const { totalItems, ...filteredData } = pieChartDdetails;
  const chartData = Object.entries(filteredData).map(([key, value]) => ({
    name: key, // Example: "lowItems", "fullItems", "reservedItems"
    value: value, // Corresponding value
  }));
  return (
    <div className="flex flex-col w-full relative">
      <div className="absolute top-0">
        <AddItemModal
          isOpen={addItemModal}
          onClose={closeModal}
        />
      </div>
      <div className="flex flex-row items-center justify-between mb-4">
        <p className="font-bold text-lg">Inventory</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md h-fit" onClick={() => setaddItemModal(true)}>Add New Item +</button>
      </div>
      <div className="flex flex-row items-start gap-4 mb-4">
        <RoundedPanel bgcolor={'flex-1 bg-slate-100 h-full'}>
          <div className="flex flex-row items-center justify-between">
            <div className="">
              <p className="flex flex-row items-center justify-start gap-2 font-medium text-lg">Total Materials</p>
              <p className="font-bold">{totalItems} Items <span className="font-light text-sm">as of August 2024</span></p>
              <div className="flex flex-col justify-center mt-6">
                {chartData.map((entry, index) => (
                  <div key={index} className="flex items-center mx-2">
                    <div
                      className="w-3 h-3 mr-2 rounded-full"
                      style={{ backgroundColor: COLORS[index % COLORS.length] }}
                    ></div>
                    <span className="text-gray-700 font-medium mr-2 whitespace-nowrap">{entry.name}</span>
                    <span className="text-gray-500">({entry.value})</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center items-center ">
              <PieChart width={300} height={150}>
                <Pie
                  data={chartData}
                  cx={150}
                  cy={150}
                  startAngle={180}  // Start from the left middle of the circle
                  endAngle={0}      // End at the right middle of the circle
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </div>
          </div>
        </RoundedPanel>
        <RoundedPanel bgcolor={'flex-1 bg-slate-100'}>
          <p className="flex flex-row items-center justify-start gap-2 font-medium mb-2">Category</p>
          {categoryPercent.map((item) => (
            <>
              <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-gray-700">{item.name}</span>
                <span className="text-sm font-medium text-gray-700">{item.percentage}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className="bg-[#780000] h-4 rounded-full"
                  style={{ width: `${item.percentage}%` }}
                ></div>
              </div>
            </>
          ))}

        </RoundedPanel>
      </div>
      <DynamicTable data={productData} tableTitle={"Product Inventory"} search={false} actions={[]}/>
    </div>
  )
}

export const AddItemModal = ({
  isOpen,
  onClose,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  
  const onSubmit = (data) => {
    toast.success("User added successfully!");
    console.log(data);
  };

  const onError = (errors) => {
    for (const error in errors) {
      toast.error(errors[error].message);
    }
  };
  // const handleSubmit = () => {
  //   onClose();
  // };

  const handleClose = () => {
    onClose();
  };

  return (
    <Modal
      appElement={document.getElementById('root') || undefined}
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Notice Modal"
      style={{
        overlay: {
          position: 'fixed',
          inset: '0px',
          backgroundColor: 'rgb(0 0 0 / 75%)',
          zIndex: '100',
        },
        content: {
          position: 'absolute',
          inset: '40px',
          padding: '20px',
          overflow: 'auto',
          background: 'transparent',
          border: 'none',
          zIndex: '99',
        },
      }}
    >
      <div
        className={`absolute top-1/2 bg-white left-1/2 transform w-9/12 -translate-x-1/2 -translate-y-1/2 p-4 rounded-md shadow-md h-full overflow-y-auto`}>
        <div className="text-lg font-medium mb-2 flex flex-row items-center justify-between">
          <p>Add Item</p>
          <button className=" text-black p-1 rounded-full font-bold" onClick={handleClose}>
            <IoMdClose/>
          </button>
        </div>
        <div className={`overflow-y-auto`}>
          <form onSubmit={handleSubmit(onSubmit, onError)} className="px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
          <label htmlFor="itemName" className="block text-sm font-medium text-gray-700">Item Name</label>
          <input
            id="itemName"
            type="text"
            {...register('itemName', { required: 'Item Name is required' })}
            className={`mt-1 block w-full border rounded-md p-2 ${errors.itemName ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.itemName && <p className="text-red-500 text-sm">{errors.itemName.message}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="unit" className="block text-sm font-medium text-gray-700">Unit</label>
              <input
                id="unit"
                type="text"
                {...register('unit', { required: 'Unit is required' })}
                className={`mt-1 block w-full border rounded-md p-2 ${errors.unit ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.unit && <p className="text-red-500 text-sm">{errors.unit.message}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Quantity</label>
              <input
                id="quantity"
                type="number"
                {...register('quantity', { required: 'Quantity is required', min: { value: 1, message: 'Quantity must be at least 1' } })}
                className={`mt-1 block w-full border rounded-md p-2 ${errors.quantity ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.quantity && <p className="text-red-500 text-sm">{errors.quantity.message}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="newDelivery" className="block text-sm font-medium text-gray-700">New Delivery</label>
              <input
                id="newDelivery"
                type="number"
                {...register('newDelivery', { required: 'New Delivery is required', min: { value: 0, message: 'New Delivery cannot be negative' } })}
                className={`mt-1 block w-full border rounded-md p-2 ${errors.newDelivery ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.newDelivery && <p className="text-red-500 text-sm">{errors.newDelivery.message}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="dateDeliver" className="block text-sm font-medium text-gray-700">Date Deliver</label>
              <input
                id="dateDeliver"
                type="date"
                {...register('dateDeliver', { required: 'Date Deliver is required' })}
                className={`mt-1 block w-full border rounded-md p-2 ${errors.dateDeliver ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.dateDeliver && <p className="text-red-500 text-sm">{errors.dateDeliver.message}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="itemOut" className="block text-sm font-medium text-gray-700">Item Out</label>
              <input
                id="itemOut"
                type="number"
                {...register('itemOut', { required: 'Item Out is required', min: { value: 0, message: 'Item Out cannot be negative' } })}
                className={`mt-1 block w-full border rounded-md p-2 ${errors.itemOut ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.itemOut && <p className="text-red-500 text-sm">{errors.itemOut.message}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
              <select
                id="category"
                {...register('category', { required: 'Category is required' })}
                className={`mt-1 block w-full border rounded-md p-2 ${errors.category ? 'border-red-500' : 'border-gray-300'}`}
              >
                <option value="">Select Category</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}
            </div>

            <div className="flex gap-4">
              <button
                type="button"
                onClick={handleClose}
                className="w-full py-2 px-4 border border-gray-300 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300"
              >
                Discard
              </button>
              <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent rounded-md bg-blue-600 text-white hover:bg-blue-700"
              >
                Add Item
              </button>
            </div>
          </form>
        </div>
      </div>

    </Modal>
  )



}

export default Inventory