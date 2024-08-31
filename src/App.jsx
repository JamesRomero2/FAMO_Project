import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import { ToastContainer } from 'react-toastify';
import Dashboard from './pages/Dashboard';
import { BrowserRouter as Router,  useLocation } from 'react-router-dom';
import Header from "./components/Header"
import MenuDrawer from './components/MenuDrawer';
import UserManagement from './pages/UserManagement';
import Inventory from './pages/Inventory';
import RequestHistory from './pages/RequestHistory';
import RequestApproval from './pages/RequestApproval';
import AnalysisReport from './pages/AnalysisReport';
import SupplyReport from './pages/SupplyReport';
import ReportHistory from './pages/ReportHistory';
import ApprovalArchive from './pages/ApprovalArchive';
import { useState, useEffect } from 'react';
import { AppDataProvider } from './provider/AppDataProvider';

export default function App() {
  return (
    <AppDataProvider>
      <Router>
        <AppContents/>
      </Router>
    </AppDataProvider>
  )
}
const AppContents = () => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(<Login />);

  useEffect(() => {
    const determinePageComponent = (pathname) => {
      switch (pathname) {
        case '/forgotpassword':
          return <ForgotPassword />;
        case '/dashboard':
          return <Dashboard />;
        case '/usermanagement':
          return <UserManagement />;
        case '/inventory':
          return <Inventory />;
        case '/requestapproval':
          return <RequestApproval />;
        case '/requesthistory':
          return <RequestHistory />;
        case '/requestapprovalarchive':
          return <ApprovalArchive />;
        case '/analysisreport':
          return <AnalysisReport />;
        case '/reporthistory':
          return <ReportHistory />;
        case '/supplyreport':
          return <SupplyReport />;
        default:
          return <Login />;
      }
    };

    setCurrentPage(determinePageComponent(location.pathname));
  }, [location.pathname]);

  if (currentPage.type === Login) {
    return <Login />;
  }

  return (
    <div className="transition-all">
      <Header />
      <div className="flex flex-row gap-6 mx-4 mt-3 2xl:mx-auto 2xl:w-3/4">
        <MenuDrawer />
        {currentPage}
      </div>
      <ToastContainer />
    </div>
  );
}

