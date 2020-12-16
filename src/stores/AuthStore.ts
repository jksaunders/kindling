import { useLocalObservable } from 'mobx-react-lite';
import { BaseStore, Stores } from './interfaces';

export interface AuthStore {
  isLoggedIn: boolean;
}

const useAuthStore = (): AuthStore =>
  useLocalObservable((): BaseStore & AuthStore => ({
    stores: {} as Stores,
    setStores(stores): void {
      this.stores = stores;
    },
    isLoggedIn: false,
  }));

export default useAuthStore;
