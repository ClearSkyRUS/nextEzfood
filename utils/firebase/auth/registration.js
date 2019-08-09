import fire from "config/firebase";

const registration = (email, password, setUser) => {
  fire
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(user => {
      setUser(user);
    })
    .catch(error => {
      console.log(error);
    });
};

export default registration;
