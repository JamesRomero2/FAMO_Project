/* eslint-disable react/prop-types */
import TablePanel from "../components/TablePanel";
import { useCallback, useLayoutEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { IoMdClose } from "react-icons/io";
import Modal from 'react-modal';
import { requestToServer } from "../api/GlobalAPI";
import { fetchItemCategory } from "../utils/FetchConstant";
Modal.setAppElement('#root');

const RequestHistory = () => {
  const [newRequest, setNewRequest] = useState(false);
  const [requestData, setRequestData] = useState([]);
  const closeModal = () => {
    setNewRequest(false);
  }

  const initialization = useCallback(async () => {
    requestToServer('get', 'getRequestData', '', true)
      .then((response) => {
        setRequestData(response);
      }).catch((error) => {
        console.error('Server GET error:', error);
      });
  }, []);

  useLayoutEffect(() => {
    initialization();
  }, [initialization]);

  return (
    <div className="flex flex-col w-full relative">
      <div className="absolute top-0">
        <RequestForm
          isOpen={newRequest}
          onClose={closeModal}
        />
      </div>
      <div className="flex flex-row items-center justify-between mb-4">
        <p className="font-bold text-lg">Request History</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md h-fit" onClick={() => setNewRequest(true)}>Create New Request</button>
      </div>
      <TablePanel
          tableTitle="Request"
          columnNames={['Request ID', 'Requested By', 'Request Date', 'Status']}
          data={requestData}
          actionColumn={[]}
          search={true}
          category={['Request ID', 'Requested By', 'Request Date', 'Status']}
          sort={true}
          tableHeight={'h-full'}
        />
    </div>
  )
}

export const RequestForm = ({
  isOpen,
  onClose,
}) => {
  const [items, setItems] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [categories, setCategories] = useState([]);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const handleAddToTable = (data) => {
    if (isEditing) {
      const updatedItems = [...items];
      updatedItems[editIndex] = data;
      setItems(updatedItems);
      setIsEditing(false);
      setEditIndex(null);
      toast.success('Item edited successfully!');
    } else {
      setItems((prevItems) => [...prevItems, data]);
      toast.success('Item added to the table!');
    }

    reset();
  };
  const handleEdit = (index) => {
    const item = items[index];
    setValue('itemName', item.itemName);
    setValue('category', item.category);
    setValue('quantity', item.quantity);
    setValue('justification', item.justification);
    setIsEditing(true);
    setEditIndex(index);
  };
  const handleDelete = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
    toast.success('Item deleted successfully!');
  };
  
  const sendRequest = () => {
    console.log(items);
    requestToServer('post', 'addRequest', items, true)
      .then((response) => {
        if (response === 1) {
          onClose();
          setItems([]);
          toast.success('Request sent for approval!');
          reset();
        } else {
          toast.error(`Failed Sending Request`);
        }
      }).catch((error) => {
        toast.error(`Failed Sending Request ${error}`);
      });
  };

  const handleCancel = () => {
    reset();
    onClose();
  };

  const handleClose = () => {
    onClose();
  };

  const initialization = useCallback(async () => {
    setCategories(fetchItemCategory());
  }, []);

  useLayoutEffect(() => {
    initialization();
  }, [initialization]);

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
        className={`absolute top-1/2 bg-white left-1/2 transform w-9/12 -translate-x-1/2 -translate-y-1/2 p-4 rounded-md shadow-md overflow-y-auto`}>
        <div className="text-lg font-medium mb-2 flex flex-row items-center justify-between">
          <p>New Request</p>
          <button className=" text-black p-1 rounded-full font-bold" onClick={handleClose}>
            <IoMdClose/>
          </button>
        </div>
        <div className={`overflow-y-auto`}>
        <form onSubmit={handleSubmit(handleAddToTable)}>
         {/* Item Name */}
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

          {/* Category */}
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

          {/* Quantity */}
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

          {/* Justification */}
          <div className="mb-4">
            <label htmlFor="justification" className="block text-sm font-medium text-gray-700">Justification</label>
            <textarea
              id="justification"
              rows="3"
              {...register('justification', { required: 'Justification is required' })}
              className={`mt-1 block w-full border rounded-md p-2 ${errors.justification ? 'border-red-500' : 'border-gray-300'}`}
            ></textarea>
            {errors.justification && <p className="text-red-500 text-sm">{errors.justification.message}</p>}
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mb-4">
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md bg-green-600 text-white hover:bg-green-700"
            >
              Add to Table
            </button>
          </div>

          {/* Table to display added items inside the form */}
          {items.length > 0 && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Items Added</h3>
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border">Item Name</th>
                    <th className="py-2 px-4 border">Category</th>
                    <th className="py-2 px-4 border">Quantity</th>
                    <th className="py-2 px-4 border">Justification</th>
                    <th className="py-2 px-4 border">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, index) => (
                    <tr key={index}>
                      <td className="py-2 px-4 border">{item.itemName}</td>
                      <td className="py-2 px-4 border">{item.category}</td>
                      <td className="py-2 px-4 border">{item.quantity}</td>
                      <td className="py-2 px-4 border">{item.justification}</td>
                      <td className="py-2 px-4 border">
                        <button
                          onClick={() => handleEdit(index)}
                          type="button"
                          className="text-blue-500 hover:text-blue-700 mr-2"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(index)}
                          type="button"
                          className="text-red-500 hover:text-red-700"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          <div className="flex gap-4 my-4">
            <button
              type="button"
              onClick={handleCancel}
              className="w-full py-2 px-4 border border-gray-300 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSubmit(sendRequest)}
              className="w-full py-2 px-4 border border-transparent rounded-md bg-blue-600 text-white hover:bg-blue-700"
            >
              Send for Approval
            </button>
          </div>
        </form>
        </div>
      </div>
    </Modal>
  )
}

export default RequestHistory