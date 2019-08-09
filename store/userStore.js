import { action, observable } from "mobx";
import { login, checkAuth, registration } from "utils";

class UserStore {
  @observable user = 0;

  @action getUser = () => {
    checkAuth(this.setUser);
  };

  @action loginUser = values => {
    login(values.email, values.password, this.setUser);
  };

  @action registrUser = values => {
    registration(values.email, values.password, this.setUser);
  };

  @action setUser = user => {
    console.log(user);
    if (user != null) this.user = user;
    else this.user = {};
  };
}

export default UserStore;
