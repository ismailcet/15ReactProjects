import { object, string } from "yup";

let Validation = object({
  username: string().required("Username is a required field"),
  password: string()
    .min(5, "Password must be at least 5 characters")
    .required("Password is a required field"),
});

export default Validation;
