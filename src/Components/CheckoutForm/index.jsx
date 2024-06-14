import React from "react";
import { orderProduct } from "../../Store/cartChecker";
import { useSelector, useDispatch } from "react-redux";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

export default function CheckoutForm() {
  const userId = useSelector((state) => state.isLoggedIn.userId);
  const cart = useSelector((state) => state.cartChecker.cart);
  const username = useSelector((state) => state.isLoggedIn.username);
  const email = useSelector((state) => state.isLoggedIn.email);
  const phone_number = useSelector((state) => state.isLoggedIn.phone_number);
  // create a checkout schema
  const checkoutSchema = Yup.object().shape({
    name: Yup.string().required("* Required"),
    email: Yup.string().email("* Invalid email").required("* Required"),
    phone_number: Yup.string()
      .required("* Required")
      .matches(/^[0-9]+$/, "* Must be only digits")
      .min(10, "* Must be at least 8 digits"),
    address: Yup.string().required("* Required"),
  });

  const dispatch = useDispatch();

  return (
    <div className="flex h-full w-full flex-col items-start">
      <h1 className="mb-3 text-3xl font-bold">Checkout</h1>
      <Formik
        className="h-96"
        initialValues={{ name: username, email: email, phone_number: phone_number, address: "" }}
        validationSchema={checkoutSchema}
        onSubmit={(values) => {
          const orderingSubmission = {
            userId: userId,
            name: values.name,
            email: values.email,
            phone: values.phone_number,
            address: values.address,
            items: cart,
          };
          dispatch(orderProduct(orderingSubmission));
        }}
      >
        <Form className="flex h-full w-full flex-col justify-between gap-3">
          <div>
            <div className="flex flex-row items-center justify-between">
              <label htmlFor="name">Name</label>
              <ErrorMessage
                name="name"
                component="div"
                className="text-sm text-red-500"
              />
            </div>
            <Field
              name="name"
              type="text"
              placeholder="ex: Quang Anh To"
              className="w-full rounded border border-gray-300 p-2 focus:outline-none"
            />
          </div>
          <div>
            <div className="flex flex-row items-center justify-between">
              <label htmlFor="email">Email</label>
              <ErrorMessage
                name="email"
                component="div"
                className="text-sm text-red-500"
              />
            </div>
            <Field
              name="email"
              type="email"
              placeholder="ex: abc@gmail.com"
              className="w-full rounded border border-gray-300 p-2 focus:outline-none"
            />
          </div>
          <div>
            <div className="flex flex-row items-center justify-between">
              <label htmlFor="phone_number">Phone Number</label>
              <ErrorMessage
                name="phone_number"
                component="div"
                className="text-sm text-red-500"
              />
            </div>
            <Field
              name="phone_number"
              type="text"
              placeholder="ex: 0123456789"
              className="w-full rounded border border-gray-300 p-2 focus:outline-none"
            />
          </div>
          <div>
            <div className="flex flex-row items-center justify-between">
              <label htmlFor="address">Address</label>
              <ErrorMessage
                name="address"
                component="div"
                className="text-sm text-red-500"
              />
            </div>
            <Field
              name="address"
              type="text"
              placeholder="ex: 123 Nguyen Van Linh"
              className="w-full rounded border border-gray-300 p-2 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="mt-4 rounded bg-green-700 p-3 font-bold text-white hover:bg-green-800"
          >
            Checkout
          </button>
        </Form>
      </Formik>
    </div>
  );
}
