import React from "react";
import datajson from "./data.json";
import { useSelector } from "react-redux";
import { IoMdCloseCircleOutline } from "react-icons/io";

export default function OrderHistory({ data }) {
  const [orderHistory, setOrderHistory] = React.useState([]);
  const orderHistoryStatus = useSelector(
    (state) => state.isLoggedIn.getOrderHistoryStatus,
  );
  const [popUp, setPopUp] = React.useState(false);
  const [orderDetailId, setOrderDetailId] = React.useState(null);

  React.useEffect(() => {
    if (data) setOrderHistory(data);
    console.log(data);
  }, [data]);

  function renderOrderHistoryList() {
    return orderHistory.map((order, index) => {
      return (
        <div
          key={index}
          className="flex flex-row items-center justify-between px-3 py-8"
        >
          <span>Order ID: {order._id}</span>
          <span
            onClick={() => {
              setOrderDetailId(order._id);
              setPopUp(true);
            }}
            className="cursor-pointer"
          >
            Detail
          </span>
        </div>
      );
    });
  }

  const renderOrderDetail = () => {
    const orderDetail = orderHistory.find((order) => order._id === orderDetailId);
    if (!orderDetail) {
      return null;
    }
    let date = new Date(orderDetail.timeStamp);
    return (
      <div className="flex flex-col gap-2 p-4">
        <div className="flex flex-row justify-end">
          <button
            onClick={() => setPopUp(false)}
            className="-mr-4 cursor-pointer rounded-lg border-2 border-red-300 p-2 text-red-400 duration-100 hover:bg-red-400 hover:text-white"
          >
            <IoMdCloseCircleOutline className="text-xl font-bold" />
          </button>
        </div>
        <p>Order ID: {orderDetail._id}</p>
        <div>
          <p>Items:</p>
          <ul>
            {orderDetail.items.map((item, index) => (
              <li key={index}>
                <span>{item.id}</span>
                <span> x {item.quantity}</span>
              </li>
            ))}
          </ul>
        </div>
        <p>Order Date: {date.toLocaleString()}</p>
      </div>
    );
  }

  if (orderHistoryStatus === "loading") {
    return <div>Loading...</div>;
  }

  if (orderHistoryStatus === "failed") {
    return <div>Failed to load order history</div>;
  }

  if (orderHistoryStatus === "success") {
    return (
      <div className="flex flex-col divide-y-2 divide-gray-200">
        {popUp ? renderOrderDetail() : renderOrderHistoryList()}
      </div>
    );
  }
}
