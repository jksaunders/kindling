import { AuthStore } from './AuthStore';
import { UserStore } from './UserStore';

export interface BaseStore {
  stores: Stores;
  setStores: (stores: Stores) => void;
}

export interface Stores {
  authStore: AuthStore;
  userStore: UserStore;
}
