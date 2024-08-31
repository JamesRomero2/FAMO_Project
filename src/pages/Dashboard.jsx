

import { useCallback, useLayoutEffect, useState } from "react";
import Notification from "../components/Notification"
import Shelf from "../components/Shelf"
import SuppliesSummary from "../components/SuppliesSummary"
import TablePanel from "../components/TablePanel"
import { requestToServer } from "../api/GlobalAPI";

const Dashboard = () => {
  const [shelfData, setShelfData] = useState({
    supply: 0, 
    category: 0, 
    user: 0
  })
  const initialization = useCallback(async () => {
    requestToServer('get', 'shelf', '')
      .then((response) => {
        const { supply, category, user } = response[0];
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
  }, []);
  useLayoutEffect(() => {
    initialization();
  }, [initialization]);

  
  const productData = [
    { "product name": 'Laptop', price: 1000, stock: 50, category: 'Electronics' },
    { "product name": 'Chair', price: 150, stock: 200, category: 'Furniture' },
    { "product name": 'Notebook', price: 5, stock: 1000, category: 'Stationery' },
    { "product name": 'Laptop', price: 1000, stock: 50, category: 'Electronics' },
    { "product name": 'Chair', price: 150, stock: 200, category: 'Furniture' },
    { "product name": 'Notebook', price: 5, stock: 1000, category: 'Stationery' },
    { "product name": 'Laptop', price: 1000, stock: 50, category: 'Electronics' },
    { "product name": 'Chair', price: 150, stock: 200, category: 'Furniture' },
    { "product name": 'Notebook', price: 5, stock: 1000, category: 'Stationery' },
    { "product name": 'Laptop', price: 1000, stock: 50, category: 'Electronics' },
    { "product name": 'Chair', price: 150, stock: 200, category: 'Furniture' },
    { "product name": 'Notebook', price: 5, stock: 1000, category: 'Stationery' },
    { "product name": 'Laptop', price: 1000, stock: 50, category: 'Electronics' },
    { "product name": 'Chair', price: 150, stock: 200, category: 'Furniture' },
    { "product name": 'Notebook', price: 5, stock: 1000, category: 'Stationery' },
    { "product name": 'Laptop', price: 1000, stock: 50, category: 'Electronics' },
    { "product name": 'Chair', price: 150, stock: 200, category: 'Furniture' },
    { "product name": 'Notebook', price: 5, stock: 1000, category: 'Stationery' },
    { "product name": 'Laptop', price: 1000, stock: 50, category: 'Electronics' },
    { "product name": 'Chair', price: 150, stock: 200, category: 'Furniture' },
    { "product name": 'Notebook', price: 5, stock: 1000, category: 'Stationery' },
    { "product name": 'Laptop', price: 1000, stock: 50, category: 'Electronics' },
    { "product name": 'Chair', price: 150, stock: 200, category: 'Furniture' },
    { "product name": 'Notebook', price: 5, stock: 1000, category: 'Stationery' },
    // More product data...
  ];
  return (
    <div className="flex flex-row gap-4 w-full">
      <div className="flex flex-col flex-1 gap-2">
        <Shelf supplyAmnt={shelfData.supply} categoryAmnt={shelfData.category} usersAmnt={shelfData.user}/>
        <TablePanel
          tableTitle="Product Inventory"
          columnNames={['Product Name', 'Price', 'Stock', 'Category']}
          data={productData}
          actionColumn={[]}
          search={false}
          category={['Electronics', 'Furniture', 'Stationery']}
          sort={false}
          tableHeight={'h-96'}
        />
        <TablePanel
          tableTitle="Out of Stock Supply"
          columnNames={['Product Name', 'Price', 'Stock', 'Category']}
          data={productData}
          actionColumn={[]}
          search={false}
          category={['Electronics', 'Furniture', 'Stationery']}
          sort={false}
          tableHeight={'h-96'}
        />
      </div>
      <div className="flex flex-col gap-4">
        <Notification/>
        <SuppliesSummary/>
      </div>
    </div>
  )
}

export default Dashboard