import { useCallback, useLayoutEffect, useState } from "react";
import Notification from "../components/Notification"
import Shelf from "../components/Shelf"
import SuppliesSummary from "../components/SuppliesSummary"
import DynamicTable from "../components/DynamicTable";
import { requestToServer } from "../api/GlobalAPI";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [shelfData, setShelfData] = useState({
    supply: 0, 
    category: 0, 
    user: 0
  })
  const [notifs, setNotifs] = useState([]);
  const [suppSumm, setSuppSumm] = useState([]);
  const [productData, setProductData] = useState([]);
  const [outOfStock, setOutOfStock] = useState([]);
  const navigate = useNavigate();
  const initialization = useCallback(async () => {
    const user = sessionStorage.getItem('user');
    
    if (!user) {
      navigate('/login');
      return;
    }
    requestToServer('get', 'shelf', '', true)
      .then((response) => {
        const { supply, category, user } = response;
        const newData = {
          supply: supply,
          category: category,
          user: user,
        };
        setShelfData((prev) => ({
          ...prev,
          ...newData,
        }))
      }).catch((error) => {
        console.error('Server GET error:', error);
      });
    requestToServer('get', 'mynotifs', '', true)
      .then((response) => {
        setNotifs(response);
      }).catch((error) => {
        console.error('Server GET error:', error);
      });
    requestToServer('get', 'fetchSupplySummary', '', true)
      .then((response) => {
        setSuppSumm(response);
      }).catch((error) => {
        console.error('Server GET error:', error);
      });
    requestToServer('get', 'fetchAllInventoryDashboard', '', true)
      .then((response) => {
        setProductData(response);
      }).catch((error) => {
        console.error('Server GET error:', error);
      });
    requestToServer('get', 'fetchAllOutOfStockDashboard', '', true)
      .then((response) => {
        setOutOfStock(response);
      }).catch((error) => {
        console.error('Server GET error:', error);
      });
    
  }, [navigate]);
  useLayoutEffect(() => {
    initialization();
  }, [initialization, navigate]);

  return (
    <div className="flex flex-row gap-4 w-full">
      <div className="flex flex-col flex-1 gap-2">
        <Shelf supplyAmnt={shelfData.supply} categoryAmnt={shelfData.category} usersAmnt={shelfData.user}/>
        <DynamicTable data={productData} tableTitle={"Product Inventory"} search={false} actions={[]}/>
        <DynamicTable data={outOfStock} tableTitle={"Out of Stock Supply"} search={false} actions={[]}/>
      </div>
      <div className="flex flex-col gap-4">
        <Notification notificationItems={notifs}/> 
        <SuppliesSummary data={suppSumm}/>
      </div>
    </div>
  )
}

export default Dashboard