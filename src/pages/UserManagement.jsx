/* eslint-disable react/prop-types */
import { IoMdArrowDropdown, IoMdClose } from "react-icons/io";
import TablePanel from "../components/TablePanel";
import Modal from 'react-modal';
import { useState } from "react";
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
Modal.setAppElement('#root');
const UserManagement = () => {
  const [addUserModal, setaddUserModal] = useState(false);
  const userData = [
    { name: 'Alice Johnson', role: 'Administrator', "last logged in": '2024-08-20', status: 'Active' },
    { name: 'Bob Smith', role: 'Director', "last logged in": '2024-08-19', status: 'Inactive' },
    { name: 'Charlie Brown', role: 'Warehouse Man 1', "last logged in": '2024-08-18', status: 'Active' },
    { name: 'Daisy Miller', role: 'Warehouse Man 2', "last logged in": '2024-08-17', status: 'Active' },
    { name: 'Edward Wilson', role: 'Chief 1', "last logged in": '2024-08-16', status: 'Inactive' },
    { name: 'Fiona Clark', role: 'Chief 2', "last logged in": '2024-08-15', status: 'Active' },
    { name: 'George Hill', role: 'Chief 3', "last logged in": '2024-08-14', status: 'Active' },
    { name: 'Hannah Baker', role: 'Chief 4', "last logged in": '2024-08-13', status: 'Inactive' },
    { name: 'Ivan Diaz', role: 'Administrator', "last logged in": '2024-08-12', status: 'Active' },
    { name: 'Jessica Evans', role: 'Director', "last logged in": '2024-08-11', status: 'Active' },
    { name: 'Kevin Foster', role: 'Warehouse Man 1', "last logged in": '2024-08-10', status: 'Inactive' },
    { name: 'Laura Green', role: 'Warehouse Man 2', "last logged in": '2024-08-09', status: 'Active' },
    { name: 'Michael Harris', role: 'Chief 1', "last logged in": '2024-08-08', status: 'Inactive' },
    { name: 'Nina Johnson', role: 'Chief 2', "last logged in": '2024-08-07', status: 'Active' },
    { name: 'Oscar King', role: 'Chief 3', "last logged in": '2024-08-06', status: 'Active' },
    { name: 'Paula Lewis', role: 'Chief 4', "last logged in": '2024-08-05', status: 'Inactive' },
    { name: 'Quinn Martinez', role: 'Administrator', "last logged in": '2024-08-04', status: 'Active' },
    // More product data...
  ];
  const closeModal = () => {
    setaddUserModal(false);
  }
  return (
    <div className="flex flex-col w-full relative">
      <div className="absolute top-0">
        <AddUserModal
          isOpen={addUserModal}
          onClose={closeModal}
        />
      </div>
      <div className="flex flex-row items-center justify-between mb-4">
        <p className="font-bold text-lg">User Management</p>
        <div className="flex items-center justify-between gap-2">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => setaddUserModal(true)}>Add User +</button>
          <div className="px-4 py-2 flex items-center gap-2">Sort By <IoMdArrowDropdown size={'1.1em'}/></div>
        </div>
      </div>
      <TablePanel
          tableTitle="Product Inventory"
          columnNames={['Name', 'Role', 'Last Logged In', 'Status']}
          data={userData}
          actionColumn={[]}
          search={false}
          category={['Administrator', 'Director', 'Warehouse Man 1', 'Warehouse Man 2','Chief 1','Chief 2','Chief 3','Chief 4']}
          sort={false}
          tableHeight={'h-full'}
        />
    </div>
  )
}

export const AddUserModal = ({
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
          <p>Add User</p>
          <button className=" text-black p-1 rounded-full font-bold" onClick={handleClose}>
            <IoMdClose/>
          </button>
        </div>
        <div className={`overflow-y-auto`}>
          <form onSubmit={handleSubmit(onSubmit, onError)} className="px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
              <input
                {...register('username', { required: 'Username is required' })}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.username ? 'border-red-500' : ''
                }`}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">First Name</label>
              <input
                {...register('firstName', { required: 'First Name is required' })}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.firstName ? 'border-red-500' : ''
                }`}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
              <input
                {...register('lastName', { required: 'Last Name is required' })}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.lastName ? 'border-red-500' : ''
                }`}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Mobile Number</label>
              <input
                type="tel"
                {...register('mobileNumber', {
                  required: 'Mobile Number is required',
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: 'Mobile Number must be 10 digits',
                  },
                })}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.mobileNumber ? 'border-red-500' : ''
                }`}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
              <input
                type="password"
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters',
                  },
                })}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.password ? 'border-red-500' : ''
                }`}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
              <input
                type="password"
                {...register('confirmPassword', {
                  required: 'Please confirm your password',
                  validate: (value) =>
                    value === watch('password') || 'Passwords do not match',
                })}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.confirmPassword ? 'border-red-500' : ''
                }`}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Select Role</label>
              <select
                {...register('role', { required: 'Role is required' })}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.role ? 'border-red-500' : ''
                }`}
              >
                <option value="">Select a role</option>
                <option value="Administrator">Administrator</option>
                <option value="Director">Director</option>
                <option value="Warehouse Man 1">Warehouse Man 1</option>
                <option value="Warehouse Man 2">Warehouse Man 2</option>
                <option value="Chief 1">Chief 1</option>
                <option value="Chief 2">Chief 2</option>
                <option value="Chief 3">Chief 3</option>
                <option value="Chief 4">Chief 4</option>
              </select>
            </div>

            <div className="flex items-center justify-between">
              <button
                type="button"
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={handleClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Add User
              </button>
            </div>
          </form>
        </div>
      </div>

    </Modal>
  )



}

export default UserManagement