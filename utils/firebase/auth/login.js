import fire from "config/firebase";

const login = (email, password, setUser) => {
  fire
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => {
      setUser(user);
    })
    .catch(error => {
      console.log(error);
    });
};

export default login;
