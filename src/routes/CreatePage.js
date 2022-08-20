import React, { useState, useEffect } from "react";
import LoginHeader from "../LoginComponents/header";
import styleAccount from "../css/styleAccount.module.css";
import Create from "../LoginComponents/create";
import LoginFooter from "../LoginComponents/footer";

const CreatePage = ({ setIsEmail }) => {
  return (
    <div className={styleAccount.accountContainer}>
      <LoginHeader setIsEmail={setIsEmail} />
      <Create />
      <LoginFooter />
    </div>
  );
};

export default CreatePage;
