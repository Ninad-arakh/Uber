import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../constants/constants";
import axios from "axios";
import {userDataContext} from "../context/UserContext";

const UserSignup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const {user, setUser} = useContext(userDataContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
      fullName: {
        firstName,
        lastName,
      },
      email,
      password,
    };

    const res = await axios.post(BASE_URL+"users/register", newUser);

    if(res.status === 201){
      setUser(res?.data?.user)
      navigate('/home');
    }

    setFirstName("");
    setLastName("");
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
          <h3 className="text-xl font-medium mb-2">Enter your name</h3>
          <div className="flex gap-4 mb-7">
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              placeholder="First Name"
              required
              className="bg-[#e8f0fe] rounded-lg px-4 py-2 w-full placeholder:text-sm"
            />
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              placeholder="Last Name"
              required
              className="bg-[#e8f0fe] rounded-lg px-4 py-2 w-full placeholder:text-sm"
            />
          </div>
          <h3 className="text-xl font-medium mb-2">What's your email</h3>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your email"
            required
            className="bg-[#e8f0fe]  mb-7 rounded-lg px-4 py-2 w-full placeholder:text-sm"
          />
          <h3 className="text-xl font-medium mb-2">Enter Password</h3>
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
            Sign Up
          </button>
        </form>
        <p className="text-center">
          Already have an account?{" "}
          <Link to="/user-login" className="text-blue-600">
            Login here
          </Link>
        </p>
      </div>
      <div>
        <p className="text-xs leading-tight">
          By proceeding, you consent to get calls, WhatsApps or SMS messages,
          including by automated means, from Uber and its affiliates to the
          email provided.
        </p>
      </div>
    </div>
  );
};

export default UserSignup;
