import React, { useState, useEffect } from "react";
import LoginHeader from "../LoginComponents/header";
import styleAccount from "../css/styleAccount.module.css";
import Forgot from "../LoginComponents/Fotgot";
import LoginFooter from "../LoginComponents/footer";

const ForgotPage = ({ setIsEmail }) => {
  return (
    <div className={styleAccount.accountContainer}>
      <LoginHeader setIsEmail={setIsEmail} />
      <Forgot />
      <LoginFooter />
    </div>
  );
};

export default ForgotPage;
