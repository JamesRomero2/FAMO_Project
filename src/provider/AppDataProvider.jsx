/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useCallback } from 'react';

const GlobalDataContext = createContext(undefined);

export const useGlobalData = () => {
  const context = useContext(GlobalDataContext);
  if (!context) {
    throw new Error('useGlobalData must be used within a GlobalDataProvider');
  }
  return context;
};

export const AppDataProvider = ({ children }) => {
  const [userRole, setUserRole] = useState([]);

  const resetGlobalContextData = useCallback(() => {
    setUserRole([]);
  }, []);

  const globalData = {
    userRole,
    setUserRole,
    resetGlobalContextData,
  };

  return <GlobalDataContext.Provider value={globalData}>{children}</GlobalDataContext.Provider>;
};