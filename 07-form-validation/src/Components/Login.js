import React from "react";
import LoginImg from "../Images/LoginImg.jpg";
import { useFormik } from "formik";
import validationSchema from "./ValidationOptions";

const Login = () => {
  console.log(validationSchema);
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        username: "",
        password: "",
      },

      validationSchema,
    });
  return (
    <div className="login">
      <div className="login-content">
        <p className="login-title">Welcome back</p>
        <p className="login-info">Login to the Dashboard</p>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="username">
            <input
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              name="username"
              className="login-input"
              placeholder="Username"
            />
            {errors.username && touched.username && (
              <div className="error">{errors.username}</div>
            )}
          </div>
          <div className="password">
            <input
              onChange={handleChange}
              onBlur={handleBlur}
              type="password"
              name="password"
              className="login-input"
              placeholder="Password"
            />
            {errors.password && touched.password && (
              <div className="error">{errors.password}</div>
            )}
          </div>
          <div className="remember-me">
            <input type="checkbox" name="Remember-me" id="Remember-me" />
            <label htmlFor="Remember-me">Remember me</label>
          </div>
          <div className="login-button">
            <button className="btn-login">Login</button>
          </div>
        </form>
      </div>
      <div className="login-img">
        <img src={LoginImg} alt="Login Image" className="login-image" />
      </div>
    </div>
  );
};

export default Login;
