import React, {
  createContext, useState, useContext, useMemo,
} from 'react';

const CfcContext = createContext({});

const CfcProvider = ({ children, userData }) => {
  const [cfcUserData, setCfcUserData] = useState(userData);

  const providerValue = useMemo(() => ({
    cfcUserData,
    setCfcUserData,
  }), [cfcUserData]);

  return (
    <CfcContext.Provider value={providerValue}>
      {children}
    </CfcContext.Provider>
  );
};

const useCfcContext = () => {
  const context = useContext(CfcContext);
  if (!context) {
    throw new Error('useCfcContext need a CfcProvider');
  }
  return context;
};

export { CfcProvider, useCfcContext };
