import axios from "axios";
import React from "react";

const UserLogout = async () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const res = await axios.get(`${BASE_URL}users/logout`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (res.status === 200) {
    localStorage.removeItem("token");
    navigate("/user-login");
  }

  return <div>UserLogout</div>;
};

export default UserLogout;
