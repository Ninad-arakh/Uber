import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userDataContext } from "../context/UserContext";
import axios from "axios";
import { BASE_URL } from "../constants/constants";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() =>{
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/home");
    }
  },[])

  const { user, setUser } = useContext(userDataContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataObj = {
      email: email,
      password: password,
    };

    const res = await axios.post(BASE_URL + "users/login", dataObj);
    console.log(res);

    if (res.status === 200) {
      setUser(res?.data?.user);
      localStorage.setItem("token", res?.data?.token);
      navigate("/home");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-7 flex h-screen flex-col justify-between">
      <div>
        <img
          className="w-16 mb-2"
          alt="Uber logo"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        />
        <form onSubmit={handleSubmit}>
          <h3 className="text-xl font-semibold mb-2">What's your email</h3>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your email"
            required
            className="bg-[#e8f0fe]  mb-7 rounded-lg px-4 py-2 w-full placeholder:text-sm"
          />
          <h3 className="text-xl font-semibold mb-2">Enter Password</h3>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter your password"
            required
            className="bg-[#e8f0fe] rounded-lg mb-7 px-4 py-2 w-full placeholder:text-sm"
          />
          <button
            type="submit"
            className="bg-black text-white py-3 px-5 mt-5 mb-3 font-semibold rounded-lg w-full"
          >
            Login
          </button>
        </form>
        <p className="text-center">
          New here?{" "}
          <Link to="/user-signup" className="text-blue-600">
            Create new Account
          </Link>
        </p>
      </div>
      <div>
        <Link
          to="/captain-login"
          className="bg-blue-500 text-white text-center mb-7 font-semibold py-3 px-5 mt-5 rounded-lg w-full flex justify-center"
        >
          Login as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
