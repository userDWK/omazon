import { HashRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import CreatePage from "../routes/CreatePage";
import ForgotPage from "../routes/ForgotPage";
import MainPage from "../routes/MainPage";
import LoginPage from "../routes/LoginPage";

const RouterApp = ({ isLoggedIn, userObj }) => {
  const [isEmail, setIsEmail] = useState(false);
  return (
    <Router>
      <Routes>
        {isLoggedIn ? (
          <>
            <Route exact path="/" element={<MainPage />} />
          </>
        ) : (
          <>
            <Route
              exact
              path="/"
              element={<LoginPage isEmail={isEmail} setIsEmail={setIsEmail} />}
            />
            <Route
              exact
              path="/forgot"
              element={<ForgotPage userObj={userObj} setIsEmail={setIsEmail} />}
            />
            <Route
              exact
              path="/create"
              element={<CreatePage setIsEmail={setIsEmail} />}
            />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default RouterApp;
