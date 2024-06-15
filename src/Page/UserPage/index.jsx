import React from "react";
import Popsup from "../../Components/Popsup";
import { Logout } from "../../Store/isLoggedInSlice";
import { getUserInfo } from "../../Store/isLoggedInSlice";
import { getOrderHistory } from "../../Store/isLoggedInSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import OrderHistory from "../../Components/orderHistory";
import { MdHistory } from "react-icons/md";
import FavouriteList from "../../Components/favouriteList";
import { CiHeart } from "react-icons/ci";
import ReactLoading from "react-loading";
import RefreshToken from "../../Components/RefreshToken";

export default function UserPage() {
  const loginState = useSelector((state) => state.isLoggedIn.isLoggedIn);
  const signInStatus = useSelector((state) => state.isLoggedIn.signInStatus);
  const accessToken = useSelector((state) => state.isLoggedIn.accessToken);
  const refreshToken = useSelector((state) => state.isLoggedIn.refreshToken);
  const userId = useSelector((state) => state.isLoggedIn.userId);
  const username = useSelector((state) => state.isLoggedIn.username);
  const email = useSelector((state) => state.isLoggedIn.email);
  const phone_number = useSelector((state) => state.isLoggedIn.phone_number);
  const orderHistory = useSelector((state) => state.isLoggedIn.orderHistory);
  const [switchProfile, setSwitchProfile] = React.useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(Logout());
    navigate("/login");
  };

  useEffect(() => {
    // scroll to top
    window.scrollTo(0, 0);
  }, [switchProfile]);

  useEffect(() => {
    if (loginState === false || loginState === null) {
      navigate("/login");
      // dispatch(getUserInfo(accessToken));
    } else {
      console.log("Login state: ", loginState);
      console.log("User ID: ", userId);
      console.log("Username: ", username);
      console.log("Email: ", email);
      console.log("Phone number: ", phone_number);
    }
  }, [loginState, navigate]);

  useEffect(() => {
    dispatch(getUserInfo(accessToken));
    dispatch(getOrderHistory(accessToken));
  }, [accessToken]);

  console.log("Order history: ", orderHistory);

  return (
    <div className="relative h-screen w-screen">
      {signInStatus === "jwt expired" && (
        <Popsup>
          <h1 className="text-center text-lg text-gray-500">
            Your session has expired, we are helping you login again
          </h1>
          <ReactLoading type={"spin"} color={"#fc531b"} className="mx-auto" />
          <RefreshToken Token={refreshToken}/>
        </Popsup>
      )}
      <div className="flex h-screen w-screen items-center pt-8">
        <div className="flex h-4/5 w-full translate-y-6 flex-row gap-4 px-16">
          <div className="flex w-1/4 flex-col items-start justify-start gap-4 rounded-lg border-2 border-gray-300 border-opacity-20 bg-gray-100 p-5 shadow-md">
            <img
              src="https://picsum.photos/200"
              alt="avatar"
              className="mx-auto mb-4 h-48 w-48 rounded-full border-4 border-gray-500 border-opacity-20"
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
              className="w-full rounded-lg bg-gray-300 px-3 py-2 font-bold text-white transition duration-300 ease-in-out hover:bg-red-500 hover:shadow-md"
            >
              Log out
            </button>

            <div className="flex w-full flex-col justify-between gap-2 pt-4">
              <p className="mb-2 text-lg text-gray-500">Profile</p>
              <button
                className={`${switchProfile ? "bg-gray-200" : "bg-gray-500"} flex flex-row items-center justify-between rounded-md p-3`}
                onClick={() => setSwitchProfile(false)}
              >
                <span
                  className={`${
                    switchProfile ? "text-gray-700" : "text-white"
                  } cursor-pointer`}
                >
                  Favourite
                </span>
                <span>
                  <CiHeart
                    className={`text-lg ${switchProfile ? "text-gray-500" : "text-white"}`}
                  />
                </span>
              </button>
              <button
                className={`${switchProfile ? "bg-gray-500" : "bg-gray-200"} flex flex-row items-center justify-between rounded-md p-3`}
                onClick={() => setSwitchProfile(true)}
              >
                <span
                  className={`${
                    switchProfile ? "text-white" : "text-gray-700"
                  } cursor-pointer`}
                >
                  Order History
                </span>
                <span>
                  <MdHistory
                    className={`text-lg ${switchProfile ? "text-white" : "text-gray-500"}`}
                  />
                </span>
              </button>
            </div>
          </div>

          {/* order history box */}
          <div className="h-full w-full overflow-scroll rounded-md border-2 px-4">
            {switchProfile ? <OrderHistory data={orderHistory} /> : <FavouriteList />}
          </div>
        </div>
      </div>
    </div>
  );
}
