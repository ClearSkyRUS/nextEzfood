import { observer } from "mobx-react";
import fire from "config/firebase";

const check = setUser => {
  fire.auth().onAuthStateChanged(user => setUser(user));
};

export default check;
