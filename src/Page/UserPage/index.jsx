import React from "react";
import { Logout } from "../../Store/isLoggedInSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function UserPage() {
  const loginState = useSelector((state) => state.isLoggedIn.isLoggedIn);
  const userId = useSelector((state) => state.isLoggedIn.userId);
  const username = useSelector((state) => state.isLoggedIn.username);
  const email = useSelector((state) => state.isLoggedIn.email);
  const phone_number = useSelector((state) => state.isLoggedIn.phone_number);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(Logout());
    navigate("/login");
  };

  useEffect(() => {
    if (loginState === false) {
      navigate("/login");
    } else if (loginState === null) {
      navigate("/login");
    } else {
      console.log("Login state: ", loginState);
      console.log("User ID: ", userId);
      console.log("Username: ", username);
      console.log("Email: ", email);
      console.log("Phone number: ", phone_number);
    }
  }, [loginState, navigate]);

  return (
    <div className="w-screen pt-52 pb-96">
      <div className="ml-10 flex w-fit flex-col items-start justify-center gap-4 rounded-lg border-2 border-gray-300 border-opacity-20 bg-gray-100 p-5 shadow-md">
        <img
          src="https://picsum.photos/200"
          alt="avatar"
          className="rounded-full border-4 border-gray-500 border-opacity-20"
        />
        <h1 className="text-left text-2xl font-bold text-gray-600">
          {username}
        </h1>
        <div className="flex flex-col items-start gap-2 text-gray-500">
          <p>Email: {email}</p>
          <p>Phone number: {phone_number}</p>
        </div>
        <button
          onClick={logOut}
          className="mt-4 w-full rounded-lg font-bold bg-gray-500 py-2 px-3 text-white hover:bg-gray-700 transition duration-300 ease-in-out hover:shadow-md">
          Log out
        </button>
      </div>
    </div>
  );
}
