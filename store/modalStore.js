import { action, observable } from "mobx";

class ModalStore {
  @observable login = false;
  @observable registration = false;

  @action openModal = modal => {
    this[modal] = true;
  };

  @action closeModal = modal => {
    this[modal] = false;
  };
}

export default ModalStore;
