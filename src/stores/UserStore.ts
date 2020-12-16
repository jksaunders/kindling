import { useLocalObservable } from 'mobx-react-lite';
import { BaseStore, Stores } from './interfaces';

export interface UserStore {
  name: string;
}

const useUserStore = (): UserStore =>
  useLocalObservable((): BaseStore & UserStore => ({
    stores: {} as Stores,
    setStores(stores): void {
      this.stores = stores;
    },
    name: 'User store name',
  }));

export default useUserStore;
