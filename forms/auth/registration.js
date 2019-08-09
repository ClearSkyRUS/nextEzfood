const fields = [
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Insert Email",
    rules: "required|email|string|between:5,25"
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Insert Password",
    rules: "required|string|between:5,25"
  },
  {
    name: "passwordConfirm",
    label: "Password Confirmation",
    placeholder: "Confirm Password",
    rules: "required|string|same:password"
  }
];

export default fields;
