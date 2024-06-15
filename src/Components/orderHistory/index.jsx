import React from "react";
import datajson from "./data.json";
import { IoMdCloseCircleOutline } from "react-icons/io";

export default function OrderHistory({data}) {
  const [orderHistory, setOrderHistory] = React.useState(datajson);
  const [popUp, setPopUp] = React.useState(false);
  const [orderDetailId, setOrderDetailId] = React.useState(null);

  React.useEffect(() => {
    if (data) setOrderHistory(data);
  }, [data]);

  function renderOrderHistoryList() {
    return orderHistory.map((order, index) => {
      return (
        <div
          key={index}
          className="flex flex-row items-center justify-between px-3 py-8"
        >
          <span>Order ID: {order._id.$oid}</span>
          <span
            onClick={() => {
              setOrderDetailId(order._id.$oid);
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

  function renderOrderDetail() {
    const orderDetail = orderHistory.find(
      (order) => order._id.$oid === orderDetailId,
    );
    let date = new Date(orderDetail.timeStamp.$date);
    return (
      <div className="flex flex-col gap-2 p-4">
        <div className="flex flex-row justify-end">
          <button
            onClick={() => setPopUp(false)}
            className="cursor-pointer rounded-lg border-2 border-red-300 p-2 duration-100 hover:bg-red-400 hover:text-white text-red-400 -mr-4"
          >
            <IoMdCloseCircleOutline className="text-xl font-bold" />
          </button>
        </div>
        <p>Order ID: {orderDetail._id.$oid}</p>
        <p>Order Status: {orderDetail.items.map((item) => item.name)}</p>
        <p>Order Date: {date.toLocaleString()}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col divide-y-2 divide-gray-200">
      {popUp ? renderOrderDetail() : renderOrderHistoryList()}
    </div>
  );
}
