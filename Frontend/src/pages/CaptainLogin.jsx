import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../constants/constants";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() =>{
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/home");
    }
  },[])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataObj = {
      email: email,
      password: password,
    };

    const res = await axios.post(BASE_URL + "captains/login", dataObj);
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
          className="w-16 mb-1"
          alt="Uber logo"
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
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
          <Link to="/captain-signup" className="text-blue-600">
            Create new Account
          </Link>
        </p>
      </div>
      <div>
        <Link
          to="/user-login"
          className="bg-red-300 text-white text-center mb-7 font-semibold py-3 px-5 mt-5 rounded-lg w-full flex justify-center"
        >
          Login as User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
