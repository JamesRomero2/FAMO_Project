import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import { ToastContainer } from 'react-toastify';
import Dashboard from './pages/Dashboard';
import { BrowserRouter } from 'react-router-dom';
import Header from "./components/Header"
import MenuDrawer from './components/MenuDrawer';
import UserManagement from './pages/UserManagement';
import Inventory from './pages/Inventory';
export default function App() {
  return (
    <BrowserRouter>
      <AppContents/>
    </BrowserRouter>
  )
}
const AppContents = () => {
  return (
    <div className="transition-all">
      <Header/>
      <div className="flex flex-row gap-6 mx-4 mt-3 2xl:mx-auto 2xl:w-3/4">
        <MenuDrawer/>
        <Inventory />
      </div>
      <ToastContainer />
    </div>
  );
}

