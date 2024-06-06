import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FaEye } from "react-icons/fa6";
import { TbEyeClosed } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { tokenize } from "../../../Store/isLoggedInSlice";
import { getUserInfo } from "../../../Store/isLoggedInSlice";
import * as Yup from "yup";

export default function SignInForm() {
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const signInSchema = Yup.object().shape({
    email: Yup.string().email("* Invalid email").required("* Required"),
    password: Yup.string().required("* Required"),
  });
  const dispatch = useDispatch();

  React.useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      dispatch(getUserInfo(token));
    }
  }, [dispatch]);

  return (
    <div>
      <h1 className="mb-5 text-3xl font-bold">Sign In</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={signInSchema}
        onSubmit={(values) => {
          dispatch(tokenize(values));
        }}
      >
        <Form className="flex flex-col gap-4">
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
          <div className="-mt-3 flex items-center justify-between rounded border border-gray-300 p-2">
            <Field
              name="password"
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
              className="w-full focus:outline-none"
            />
            {passwordVisible ? (
              <FaEye
                onClick={() => setPasswordVisible((prev) => !prev)}
                className="cursor-pointer"
              />
            ) : (
              <TbEyeClosed
                onClick={() => setPasswordVisible((prev) => !prev)}
                className="cursor-pointer"
              />
            )}
          </div>
          <ErrorMessage
            name="password"
            component="div"
            className="-mt-3 text-sm text-red-500"
          />
          <button
            type="submit"
            className="rounded bg-green-700 p-2 font-bold text-white hover:bg-green-800"
          >
            Sign In
          </button>
        </Form>
      </Formik>
    </div>
  );
}
