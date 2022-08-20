import React, { useState } from "react";
import styleAccount from "../css/styleAccount.module.css";
import { authService } from "../fbase";

const LoginFooter = ({ isEmail }) => {
  return (
    <>
      {
        <div className={styleAccount.footerBox}>
          <div className={styleAccount.footerInner}></div>
          <footer>
            <div className={styleAccount.navBox}>
              <nav>
                <ul>
                  <li>
                    <a href="#" className={styleAccount.aHover}>
                      <span>Conditions of Use</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className={styleAccount.aHover}>
                      <span>Privacy Notice</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className={styleAccount.aHover}>
                      <span>Help</span>
                    </a>
                  </li>
                </ul>
              </nav>
              <p>&copy; 1996-2022, Amazon.com, Inc. or its affiliates</p>
            </div>
          </footer>
        </div>
      }{" "}
    </>
  );
};

export default LoginFooter;
