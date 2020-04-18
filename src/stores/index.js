import React from 'react';
import useAuthStore from './AuthStore';

const LocalStoresContext = React.createContext();

// eslint-disable-next-line react/prop-types
export const LocalStoresRoot = ({ children }) => {
  const stores = {
    authStore: useAuthStore(),
  };

  Object.keys(stores).forEach((key) => {
    if (typeof stores[key].setStores === 'function') {
      stores[key].setStores(stores);
    }
  });

  return (
    <LocalStoresContext.Provider value={stores}>
      {children}
    </LocalStoresContext.Provider>
  );
};

const useStores = () => React.useContext(LocalStoresContext);

export default useStores;
