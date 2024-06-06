import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { register } from "../../../Store/isLoggedInSlice";
import { useDispatch } from "react-redux";
import * as Yup from "yup";

export default function SignUpForm() {
  // validation schema
  const signUpSchema = Yup.object().shape({
    username: Yup.string().required("* Required"),
    email: Yup.string().email("* Invalid email").required("* Required"),
    password: Yup.string()
      .required("* Required")
      .min(8, "* Password must be at least 8 characters"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "* Passwords must match")
      .required("* Required")
      .min(8, "* Password must be at least 8 characters"),
    phone_number: Yup.string()
      .required("* Required")
      .matches(/^[0-9]+$/, "* Must be only digits")
      .min(10, "* Must be at least 8 digits"),
  });

  // redux
  const dispatch = useDispatch();

  return (
    <div>
      <h1 className="mb-5 text-3xl font-bold">Sign Up</h1>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
          phone_number: "",
        }}
        validationSchema={signUpSchema}
        onSubmit={(values) => {
          // console.log(values);
          dispatch(register(values));
        }}
      >
        <Form className="flex flex-col gap-4">
          <label htmlFor="username" className="font-medium">
            Username
          </label>
          <Field
            name="username"
            type="text"
            placeholder="Username"
            className="-mt-3 rounded border border-gray-300 p-2 focus:outline-none"
          />
          <ErrorMessage
            name="username"
            component="div"
            className="-mt-3 text-sm text-red-500"
          />

          <label htmlFor="email" className="font-medium">
            Email
          </label>
          <Field
            name="email"
            type="email"
            placeholder="Email"
            className="-mt-3 rounded border border-gray-300 p-2 focus:outline-none"
          />
          <ErrorMessage
            name="email"
            component="div"
            className="-mt-3 text-sm text-red-500"
          />

          <label htmlFor="password" className="font-medium">
            Password
          </label>
          <Field
            name="password"
            type="password"
            placeholder="Password"
            className="-mt-3 rounded border border-gray-300 p-2 focus:outline-none"
          />
          <ErrorMessage
            name="password"
            component="div"
            className="-mt-3 text-sm text-red-500"
          />

          <label htmlFor="confirmPassword" className="font-medium">
            Confirm Password
          </label>
          <Field
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            className="-mt-3 rounded border border-gray-300 p-2 focus:outline-none"
          />
          <ErrorMessage
            name="confirmPassword"
            component="div"
            className="-mt-3 text-sm text-red-500"
          />

          <label htmlFor="phone_number" className="font-medium">
            Phone Number
          </label>
          <Field
            name="phone_number"
            type="text"
            placeholder="Phone Number"
            className="-mt-3 rounded border border-gray-300 p-2 focus:outline-none"
          />
          <ErrorMessage
            name="phone_number"
            component="div"
            className="-mt-3 text-sm text-red-500"
          />

          <button
            type="submit"
            className="rounded bg-green-700 p-2 font-bold text-white hover:bg-green-800"
          >
            Sign Up
          </button>
        </Form>
      </Formik>
    </div>
  );
}
