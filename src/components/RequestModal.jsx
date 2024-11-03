/* eslint-disable react/prop-types */
import Modal from 'react-modal';
import { requestToServer } from "../api/GlobalAPI";
import { IoMdClose } from "react-icons/io";
import { useState, useEffect } from "react";
const RequestModal = ({requestData, viewingOnly, isOpen, onClose}) => {
  const [items, setItems] = useState([]);
  const handleClose = () => {
    onClose();
  };

  useEffect(() => {
    if (isOpen && requestData !== '' && requestData !== undefined) {
      const payload = {
        request_number: requestData['Request ID']
      }
      requestToServer('get', 'getSpecificRequest', payload, true)
        .then((response) => {
          setItems(response);
        }).catch((error) => {
          console.error('Server GET error:', error);
        });
    }
  }, [isOpen, requestData])
  
  if (isOpen && requestData !== '' && requestData !== undefined) {
    return (
      <>
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
          <div className={`absolute top-1/2 bg-white left-1/2 transform w-9/12 -translate-x-1/2 -translate-y-1/2 p-4 rounded-md shadow-md overflow-y-auto`}>
            <div className="text-lg font-medium mb-2 flex flex-row items-center justify-between">
              <div className=""></div>
              <button className=" text-black p-1 rounded-full font-bold" onClick={handleClose}>
                <IoMdClose/>
              </button>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
              <p><span className='font-bold'>Request ID:</span> {requestData['Request ID']}</p>
              <p><span className='font-bold'>Request By:</span> {requestData['Requested By']}</p>
              <p><span className='font-bold'>Request Date:</span> {requestData['Request Date']}</p>
              <p><span className='font-bold'>Status:</span> {requestData['Status']}</p>
            </div>
            <div className="">
            {items.length > 0 ? (
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">Items Added</h3>
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th className="py-2 px-4 border">Item Name</th>
                      <th className="py-2 px-4 border">Category</th>
                      <th className="py-2 px-4 border">Quantity</th>
                      <th className="py-2 px-4 border">Unit of Measurement</th>
                      <th className="py-2 px-4 border">Destination</th>
                      <th className="py-2 px-4 border">Justification</th>
                      {/* <th className="py-2 px-4 border">Actions</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item, index) => (
                      <tr key={index}>
                        <td className="py-2 px-4 border">{item.itemName}</td>
                        <td className="py-2 px-4 border">{item.category}</td>
                        <td className="py-2 px-4 border">{item.quantity}</td>
                        <td className="py-2 px-4 border">{item.UOM}</td>
                        <td className="py-2 px-4 border">{item.groupAbbrev}</td>
                        <td className="py-2 px-4 border">{item.justification}</td>
                        {/* <td className="py-2 px-4 border">
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
                        </td> */}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ): (
              <div className="mt-6">No Items for this Request</div>
            )}
            {!viewingOnly && (
              <div className="flex gap-4 my-4">
                <button
                  type="button"
                  // onClick={handleCancel}
                  className="w-full py-2 px-4 border border-gray-300 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300"
                >
                  Reject
                </button>
                <button
                  type="button"
                  // onClick={sendRequest}
                  className="w-full py-2 px-4 border border-transparent rounded-md bg-blue-600 text-white hover:bg-blue-700"
                >
                  Approved
                </button>
              </div>
            ) }
            </div>
          </div>
        </Modal>
      </>
    )
  }
}

export default RequestModal