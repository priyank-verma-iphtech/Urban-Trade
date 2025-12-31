import * as Yup from "yup";

export  const loginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .matches(/^[A-Z].*/, "Password must start with an uppercase letter")
      .matches(/[!@#$%^&*]/, "Must contain a special character")
      .matches(/\d/, "Must contain a number")
      .min(6, "Minimum 6 characters")
      .required("Password is required"),
  });

  export const signupSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    number: Yup.string().matches(/^\d{10}$/, "Enter valid 10-digit number").required("Mobile Number is required"),
    password: Yup.string()
      .matches(/^[A-Z].*/, "Password must start with an uppercase letter")
      .matches(/[!@#$%^&*]/, "Must contain a special character")
      .matches(/\d/, "Must contain a number")
      .min(6, "Minimum 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });