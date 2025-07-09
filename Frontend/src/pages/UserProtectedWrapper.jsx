import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";
import { BASE_URL } from "../constants/constants";

const UserProtectedWrapper = async ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { captain, setCaptain } = React.useContext(CaptainDataContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      navigate("/captain-login");
    }
  }, []);
  try {
    const res = await axios.get(BASE_URL + "captains/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res.status === 200) {
      setCaptain(res.data.captain);
      setIsLoading(false);
    }
  } catch (error) {
    console.error("Error fetching captain profile:", error);
    localStorage.removeItem("token");
    navigate("/captain-login");
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <> {children}</>;
};

export default UserProtectedWrapper;
