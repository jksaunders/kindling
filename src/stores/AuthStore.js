import { useLocalStore } from 'mobx-react-lite';

const useAuthStore = () =>
  useLocalStore(() => ({
    stores: null,
    setStores(stores) {
      this.stores = stores;
    },
    isLoggedIn: false,
  }));

export default useAuthStore;
