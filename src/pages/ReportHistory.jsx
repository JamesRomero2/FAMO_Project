import TablePanel from "../components/TablePanel"
import { useNavigate } from 'react-router-dom';
const ReportHistory = () => {
  const navigate = useNavigate();
  const handleClick = (redirect) => {
    navigate(redirect);
  };
  const requestData = [
    { 'report id': 'REQ001', 'report name': 'Report_File 1', 'created by': 'Warehouse Man 1' , 'date created': '2024-09-01' },
    { 'report id': 'REQ002', 'report name': 'Report_File 1', 'created by': 'Warehouse Man 2' , 'date created': '2024-09-02' },
    { 'report id': 'REQ003', 'report name': 'Report_File 1', 'created by': 'Warehouse Man 3' , 'date created': '2024-09-03' },
    { 'report id': 'REQ004', 'report name': 'Report_File 1', 'created by': 'Warehouse Man 1' , 'date created': '2024-09-04' },
    { 'report id': 'REQ005', 'report name': 'Report_File 1', 'created by': 'Warehouse Man 2' , 'date created': '2024-09-05' },
  ];
  return (
    <div className="flex flex-col w-full relative">
      <div className="flex flex-row items-center justify-between mb-4">
        <p className="font-bold text-lg"><span className="cursor-pointer" onClick={() => handleClick('/supplyreport')}>Supply Report</span> / Report History</p>
      </div>
      <TablePanel
          tableTitle={'Reports'}
          columnNames={['Report ID', 'Report Name', 'Created By', 'Date Created']}
          data={requestData}
          actionColumn={['download']}
          search={false}
          category={['Report ID', 'Report Name', 'Created By', 'Date Created']}
          sort={false}
          tableHeight={'h-full'}
        />
    </div>
  )
}

export default ReportHistory