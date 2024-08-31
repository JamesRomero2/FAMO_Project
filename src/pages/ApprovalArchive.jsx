import TablePanel from "../components/TablePanel"
import { useNavigate } from 'react-router-dom';

const ApprovalArchive = () => {
  const navigate = useNavigate();
  const handleClick = (redirect) => {
    navigate(redirect);
  };
  const requestData = [
    { 'request id': 'REQ001', 'requested by': 'Warehouse Man 1', 'request date': '2024-09-01', status: 'Pending' },
    { 'request id': 'REQ002', 'requested by': 'Warehouse Man 2', 'request date': '2024-09-02', status: 'Approved' },
    { 'request id': 'REQ003', 'requested by': 'Warehouse Man 3', 'request date': '2024-09-03', status: 'Rejected' },
    { 'request id': 'REQ004', 'requested by': 'Warehouse Man 1', 'request date': '2024-09-04', status: 'Pending' },
    { 'request id': 'REQ005', 'requested by': 'Warehouse Man 2', 'request date': '2024-09-05', status: 'Approved' },
  ];
  return (
    <div className="flex flex-col w-full relative">
      <div className="flex flex-row items-center justify-between mb-4">
        <p className="font-bold text-lg" ><span className="cursor-pointer" onClick={() => handleClick('/requestapproval')}>Request Approval</span> / Archive</p>
        
      </div>
      <TablePanel
          tableTitle="Request Status"
          columnNames={['Request ID', 'Requested By', 'Request Date', 'Status']}
          data={requestData}
          actionColumn={['archive', 'delete']}
          search={true}
          category={['Approved', 'Viewed', 'Pending', 'Reject']}
          sort={true}
          tableHeight={'h-full'}
        />
    </div>
  )
}

export default ApprovalArchive