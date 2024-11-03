import DynamicTable from "../components/DynamicTable";
import { useNavigate } from 'react-router-dom';
import { useCallback, useLayoutEffect, useState } from "react";
import { requestToServer } from "../api/GlobalAPI";
import RequestModal from "../components/RequestModal";

const RequestApproval = () => {
  const navigate = useNavigate();
  const [selectedRequestID, setSelectedRequestID] = useState('');
  const [itemModal, setItemModal] = useState(false);
  const [requestData, setRequestData] = useState([]);
  const handleClick = (redirect) => {
    navigate(redirect);
  };
  const initialization = useCallback(async () => {
    requestToServer('get', 'getRequestData', '', true)
      .then((response) => {
        setRequestData(response);
      }).catch((error) => {
        console.error('Server GET error:', error);
      });
  }, []);

  const closeItemModal = () => {
    setItemModal(false);
  }

  const handleItemClick = (item, action) => {
    console.log(item);
    setSelectedRequestID(item);
    setItemModal(true);
  };  

  useLayoutEffect(() => {
    initialization();
  }, [initialization]);
  return (
    <div className="flex flex-col w-full relative">
      <div className="absolute top-0">
        <RequestModal 
          isOpen={itemModal}
          onClose={closeItemModal}
          requestData={selectedRequestID}
          viewingOnly={false}
        />
      </div>
      <div className="flex flex-row items-center justify-between mb-4">
        <p className="font-bold text-lg">Request Approval</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md h-fit" onClick={() => handleClick('/requestapprovalarchive')}>Archive +</button>
      </div>
      <DynamicTable data={requestData} tableTitle={"Request Status"} search={false} actions={['archive']} onItemClick={handleItemClick}/>
    </div>
  )
}

export default RequestApproval