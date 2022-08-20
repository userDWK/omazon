import React, { useState } from "react";
import { Link } from "react-router-dom";
import styleAccount from "../css/styleAccount.module.css";
import { authService } from "../fbase";

const LoginArticle = ({ isEmail, setIsEmail }) => {
  return (
    isEmail || (
      <div className={styleAccount.articleBox}>
        <article>
          <div className={styleAccount.createText}>
            <div className={styleAccount.createLine}></div>
            <div className={styleAccount.createBox}>
              <span>New to Amazon?</span>
            </div>
          </div>
          <Link to="/create">
            <button>Create your Amazon account</button>
          </Link>
        </article>
      </div>
    )
  );
};

export default LoginArticle;
