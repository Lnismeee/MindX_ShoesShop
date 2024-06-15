import React from "react";
import { useDispatch } from "react-redux";
import { refreshToken } from "../../Store/isLoggedInSlice";

export default function RefreshToken({ Token }) {
  const dispatch = useDispatch();
  React.useEffect(() => {
    console.log(Token);
    dispatch(refreshToken(Token));
  }, []);
  return null;
}
