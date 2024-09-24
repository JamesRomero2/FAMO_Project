/* eslint-disable react/prop-types */
import { IoMdArrowDropdown, IoMdClose } from "react-icons/io";
import TablePanel from "../components/TablePanel";
import Modal from 'react-modal';
import { useCallback, useLayoutEffect, useState, useEffect } from "react";
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { requestToServer } from "../api/GlobalAPI";
Modal.setAppElement('#root');
const UserManagement = () => {
  const [addUserModal, setaddUserModal] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
  const initialization = useCallback(async() => {
    requestToServer('get', 'allUsers', '', true)
      .then((response) => {
        setAllUsers(response)
      }).catch((error) => {
        console.error('Server GET error:', error);
      });
    }, [],
  )
  const closeModal = () => {
    setaddUserModal(false);
  }

  useLayoutEffect(() => {
    initialization();
  }, [initialization]);
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
          tableTitle="List of Users"
          columnNames={['Name', 'Role', 'Last Logged In', 'Status']}
          data={allUsers}
          actionColumn={['delete', 'edit']}
          search={false}
          category={['']}
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
    reset
  } = useForm();

  const [roles, setRoles] = useState([]);
  
  const onSubmit = (data) => {
    requestToServer('post', 'addUser', data, true)
      .then((response) => {
        console.log(response);
        if (response === 1) {
          toast.success("User added successfully!");
          reset();
        } else {
          toast.error(`Failed Adding User`);
        }
      }).catch((error) => {
        toast.error(`Failed Adding User ${error}`);
      });
  };

  const onError = (errors) => {
    for (const error in errors) {
      toast.error(errors[error].message);
    }
  };

  const handleClose = () => {
    onClose();
  };

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await requestToServer('get', 'fetchRoles', '', true);
        setRoles(response); // Assuming response is an array of role objects
      } catch (error) {
        console.error('Error fetching roles:', error);
      }
    };

    if (isOpen) {
      fetchRoles();
    }
  }, [isOpen]);

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
              <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input
                type="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Invalid email address',
                  },
                })}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.email ? 'border-red-500' : ''
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs italic">{errors.email.message}</p>
              )}
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
                {roles.map(role => (
                  <option key={role.id} value={role.id}>
                    {role.description}
                  </option>
                ))}
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