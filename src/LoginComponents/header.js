import React, { useState } from "react";
import { Link } from "react-router-dom";
import styleAccount from "../css/styleAccount.module.css";
import { authService } from "../fbase";

const LoginHeader = ({ setIsEmail }) => {
  const onClick = (e) => {
    setIsEmail(false);
  };
  return (
    <header>
      <div className={styleAccount.headerBox}>
        <Link to="/">
          <i
            onClick={onClick}
            className={`${styleAccount.hIcon} ${styleAccount.hIconLogin}`}
            role="img"
            aria-label="Amozon"
          ></i>
        </Link>
      </div>
    </header>
  );
};
export default LoginHeader;
