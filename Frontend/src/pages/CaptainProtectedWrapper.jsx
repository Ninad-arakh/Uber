import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CaptainProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() =>{
    if(!token){
    navigate("/user-login");
  }
  },[])
  
  return <> {children}</>;
};

export default CaptainProtectedWrapper;
