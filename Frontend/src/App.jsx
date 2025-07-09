import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import UserSignup from "./pages/UserSignup";
import UserLogin from "./pages/UserLogin";
import CaptainSignup from "./pages/CaptainSignup";
import CaptainLogin from "./pages/CaptainLogin";
import Start from "./pages/Start";
import Home from "./pages/Home";
import UserProtectedWrapper from "./pages/UserProtectedWrapper";
import UserLogout from "./pages/UserLogout";
import CaptainProtectedWrapper from "./pages/CaptainProtectedWrapper";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/user-signup" element={<UserSignup />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route
          path="/home"
          element={
            <UserProtectedWrapper>
              {" "}
              <Home />{" "}
            </UserProtectedWrapper>
          }
        />
        <Route
          path="/users/logout"
          element={
            <CaptainProtectedWrapper>
              <UserLogout />
            </CaptainProtectedWrapper>
          }
        />
      </Routes>
    </>
  );
}

export default App;
