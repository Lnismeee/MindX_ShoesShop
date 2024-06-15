import React from "react";
import { useDispatch } from "react-redux";
import { refreshToken } from "../../Store/isLoggedInSlice";

export default function RefreshToken({ Token }) {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(refreshToken(Token));
  }, [Token]);
  return null;
}
