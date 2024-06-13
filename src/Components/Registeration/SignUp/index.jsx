import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { register } from "../../../Store/isLoggedInSlice";
import { useDispatch } from "react-redux";
import * as Yup from "yup";

export default function SignUpForm() {
  // validation schema
  const signUpSchema = Yup.object().shape({
    username: Yup.string().required("* Vui lòng nhập lại họ và tên!"),
    email: Yup.string()
      .email("* Invalid email")
      .required("* Vui lòng nhập lại Email!"),
    password: Yup.string()
      .required("* Vui lòng nhập lại mật khẩu!")
      .min(8, "* Mật khẩu cần dài ít nhất 8 ký tự"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "* Mật khẩu phải trùng khớp")
      .required("* Required")
      .min(8, "* Mật khẩu cần dài ít nhất 8 ký tự"),
    phone_number: Yup.string()
      .required("* Vui lòng nhập lại số điện thoại!")
      .matches(/^[0-9]+$/, "* Số thoại phải đúng")
      .min(10, "* Số điện thoại chưa phù hợp"),
  });

  // redux
  const dispatch = useDispatch();

  return (
    <div>
      <h1 className="text-4xl font-bold mb-5">Đăng ký tài khoản</h1>
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
            Họ và tên khánh hàng
          </label>
          <Field
            name="username"
            type="text"
            placeholder="Họ và tên"
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
            Mật khẩu
          </label>
          <Field
            name="password"
            type="password"
            placeholder="Nhập mật khẩu"
            className="-mt-3 rounded border border-gray-300 p-2 focus:outline-none"
          />
          <ErrorMessage
            name="password"
            component="div"
            className="-mt-3 text-sm text-red-500"
          />

          <label htmlFor="confirmPassword" className="font-medium">
            Xác nhận lại mật khẩu
          </label>
          <Field
            name="confirmPassword"
            type="password"
            placeholder="Xác nhận lại mật khẩu"
            className="-mt-3 rounded border border-gray-300 p-2 focus:outline-none"
          />
          <ErrorMessage
            name="confirmPassword"
            component="div"
            className="-mt-3 text-sm text-red-500"
          />

          <label htmlFor="phone_number" className="font-medium">
            Số điện thoại
          </label>
          <Field
            name="phone_number"
            type="text"
            placeholder="Nhập số điện thoại"
            className="-mt-3 rounded border border-gray-300 p-2 focus:outline-none"
          />
          <ErrorMessage
            name="phone_number"
            component="div"
            className="-mt-3 text-sm text-red-500"
          />

          <button
            type="submit"
            className="rounded bg-orange-500 p-2 font-bold text-white hover:bg-green-800"
          >
            Đăng kí tài khoản
          </button>
        </Form>
      </Formik>
    </div>
  );
}
