

import Notification from "../components/Notification"
import Shelf from "../components/Shelf"
import SuppliesSummary from "../components/SuppliesSummary"
import TablePanel from "../components/TablePanel"

const Dashboard = () => {
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
        <Shelf/>
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