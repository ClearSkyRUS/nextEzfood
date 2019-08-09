import { useStaticRendering } from "mobx-react";

import WindowStore from "./windowStore";
import UserStore from "./userStore";
import ModalStore from "./modalStore";

class RootStore {
  constructor() {
    // here you need bind other store to the RootStore. So you can use other store by used rootStore.XXXX
    this.UserStore = new UserStore(this);
    this.WindowStore = new WindowStore(this);
    this.ModalStore = new ModalStore(this);
  }
}

const isServer = typeof window === "undefined";
useStaticRendering(isServer);
let store = null;

export function initializeStore(initialData) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return new RootStore(isServer, initialData);
  }
  if (store === null) {
    store = new RootStore(isServer, initialData);
  }
  return store;
}
