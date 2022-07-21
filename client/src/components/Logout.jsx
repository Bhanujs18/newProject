import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";
import { UserContext } from "../App";
const Logout = () => {
  const { dispatch } = useContext(UserContext);

  const navigate = useNavigate();
  useEffect(() => {
    fetch("/logout", {
      method: "GET",
      header: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    }).then((res) => {
      dispatch({ type: "USER", payload: false });
      navigate("/login");
    });
  });

  return <div></div>;
};

export default Logout;
