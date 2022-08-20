import React, { useState } from "react";
import styleAccount from "../css/styleAccount.module.css";
import { authService } from "../fbase";
import LoginArticle from "../LoginComponents/article";
import LoginFooter from "../LoginComponents/footer";
import LoginHeader from "../LoginComponents/header";
import LoginMain from "../LoginComponents/Loginmain";

const LoginPage = ({ isEmail, setIsEmail }) => {
  return (
    <div className={styleAccount.accountContainer}>
      <LoginHeader setIsEmail={setIsEmail} />
      <LoginMain isEmail={isEmail} setIsEmail={setIsEmail} />
      {isEmail || <LoginArticle isEmail={isEmail} setIsEmail={setIsEmail} />}
      <LoginFooter isEmail={isEmail} setIsEmail={setIsEmail} />
    </div>
  );
};

export default LoginPage;
