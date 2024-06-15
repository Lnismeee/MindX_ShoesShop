import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FaEye } from "react-icons/fa6";
import { TbEyeClosed } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { tokenize } from "../../../Store/isLoggedInSlice";
import { getUserInfo } from "../../../Store/isLoggedInSlice";
import * as Yup from "yup";

export default function SignInForm() {
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const signInSchema = Yup.object().shape({
    email: Yup.string()
      .email("* Invalid email")
      .required("* Vui lòng nhập email!"),
    password: Yup.string().required("* Vui lòng nhập mật khẩu"),
  });
  const dispatch = useDispatch();
  const signInStatus = useSelector((state) => state.isLoggedIn.signInStatus);
  const accessToken = useSelector((state) => state.isLoggedIn.accessToken);

  React.useEffect(() => {
    const token = localStorage.getItem("accessToken"); // if accessToken is already stored in localStorage, then get user's info
    if (token) {
      dispatch(getUserInfo(token));
    } else if (!token) {
      return;
    }
  }, [accessToken]);

  return (
    <div>
      <h1 className="mb-5 text-4xl font-bold">Đăng nhập</h1>
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
            Mật khẩu
          </label>
          <div className="-mt-3 flex items-center justify-between rounded border border-gray-300 p-2">
            <Field
              name="password"
              type={passwordVisible ? "text" : "password"}
              placeholder="Nhập mật khẩu"
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
          {signInStatus === "wrong password" && (
            <div className="w-full m-auto bg-red-50 py-3 rounded-md">
              <p className="text-red-500 text-sm text-center">Mật khẩu không đúng</p>
            </div>
          )}  
          <button
            type="submit"
            className="rounded bg-green-700 p-2 font-bold text-white hover:bg-green-800"
          >
            Đăng nhập
          </button>
        </Form>
      </Formik>
    </div>
  );
}
