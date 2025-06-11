import React from "react";
import Header from "../components/Header";
import { Formik,useFormik } from 'formik';
import * as Yup from 'yup';

const Browser = () => {
  const validate = values => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = 'Required';
    } else if (values.firstName.length > 15) {
      errors.firstName = 'Must be 15 characters or less';
    }
  
    if (!values.lastName) {
      errors.lastName = 'Required';
    } else if (values.lastName.length > 20) {
      errors.lastName = 'Must be 20 characters or less';
    }
  
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    if (!values.password) {
      errors.password = 'Required';
    } else if (values.password.length < 8) {
      errors.password = 'Must be 8 characters';
    }
    if (!values.jobType) {
      errors.jobType = 'Required';
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      jobType:"",
    },
    validate,

    onSubmit: values => {
      console.log(JSON.stringify(values, null, 2));
      // alert();
    },
  });
  return (
    <>
      <Header />
      <div className="pt-[100px]">
        <p>Count:</p>
        <button className="bg-red-700 p-2 m-2">Increament</button>
        <button className="bg-red-700 p-2 m-2">Decreament</button>
      </div>
      {/* <form className="p-10 w-[500px]" onSubmit={formik.handleSubmit}>
        <div className="mb-2">
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            placeholder="First Name"
            className="border border-1 border-radius-md w-[100%]"
          />
        </div>
        {formik.touched.firstName && formik.errors.firstName ? (
          <div>{formik.errors.firstName}</div>
        ) : null}
        <div className="mb-2">
          <input
            type="text"
            placeholder="Last Name"
            id="lastName"
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            className="border border-1 border-radius-md w-[100%]"
          />
        </div>
        {formik.touched.lastName && formik.errors.lastName ? (
          <div>{formik.errors.lastName}</div>
        ) : null}
        <div className="mb-2">
          <input
            type="text"
            placeholder="Email"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            className="border border-1 border-radius-md w-[100%]"
          />
        </div>
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
        <div className="mb-2">
          <input
            type="text"
            placeholder="Password"
            id="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            className="border border-1 border-radius-md w-[100%]"
          />
        </div>
        {formik.touched.password && formik.errors.password ? (
          <div>{formik.errors.password}</div>
        ) : null}
        <select name="jobType" className="border border-1 border-radius-md w-[100%]">
          <option value="">Select a job type</option>
          <option value="designer">Designer</option>
          <option value="development">Developer</option>
          <option value="product">Product Manager</option>
          <option value="other">Other</option>
        </select>
        {formik.touched.jobType && formik.errors.jobType ? (
          <div>{formik.errors.jobType}</div>
        ) : null}
        <button type="submit" className="mr-2">
          Sign in
        </button>
        <button type="button">Cancel</button>
      </form> */}
    </>
  );
};

export default Browser;
