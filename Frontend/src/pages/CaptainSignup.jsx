import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CaptainSignup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captainData, setCaptainData] = useState({});

  const navigate = useNavigate();

  useEffect(() =>{
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/home");
    }
  },[])

  const handleSubmit = async (e) => {
    e.preventDefault();

    setCaptainData({
      fullName: {
        firstName,
        lastName,
      },
      lastName,
      email,
      password,
    });
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };
  return (
    <div className="p-7 flex h-screen flex-col justify-between">
      <div>
        <img
          className="w-16 mb-1"
          alt="Uber logo"
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
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
          <Link to="/captain-login" className="text-blue-600">
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

export default CaptainSignup;
