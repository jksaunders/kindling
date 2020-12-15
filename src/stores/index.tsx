import React, { FC } from 'react';
import { Stores } from './interfaces';
import useAuthStore from './AuthStore';
import useUserStore from './UserStore';

// `as Stores` to override compile errors
const LocalStoresContext = React.createContext<Stores>({} as Stores);

export const LocalStoresRoot: FC = ({ children }) => {
  const stores: Stores = {
    authStore: useAuthStore(),
    userStore: useUserStore(),
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

const useStores = (): Stores => React.useContext(LocalStoresContext);

export default useStores;
