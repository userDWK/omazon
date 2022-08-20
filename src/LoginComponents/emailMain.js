import React, { useState } from "react";
import { Link } from "react-router-dom";
import styleAccount from "../css/styleAccount.module.css";
import { authService } from "../fbase";

const EmailMain = ({ email, setEmail, setIsEmail }) => {
  const [canHelp, setCanHelp] = useState(false);
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setEmail(value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setIsEmail((prev) => !prev);
  };
  const onClick = (e) => {
    e.preventDefault();
    setCanHelp((prev) => !prev);
  };
  return (
    <>
      <h2>Sign-In</h2>
      <div className={styleAccount.accountForm}>
        <form onSubmit={onSubmit}>
          <p>Email or mobile phone number</p>
          <input
            type="text"
            onChange={onChange}
            className={styleAccount.accountText}
            value={email}
            name="email"
            placeholder="Input your email..."
            maxLength={50}
          />
          <input
            type="submit"
            className={styleAccount.accountSub}
            value="continue"
          ></input>
          <p className={styleAccount.pvc}>
            By continuing, you agree to Amazon's{" "}
            <a href="#" className={styleAccount.aHover}>
              <span>Conditions of</span> <span>Use</span>
            </a>{" "}
            and{" "}
            <a href="#" className={styleAccount.aHover}>
              <span>Privacy Notice.</span>
            </a>
          </p>
          <p className={styleAccount.help}>
            <a href="#" onClick={onClick} className={styleAccount.aHover}>
              {canHelp ? (
                <i
                  className={`${styleAccount.hIcon} ${styleAccount.hIconHelp}`}
                ></i>
              ) : (
                <i className={`${styleAccount.hIcon}`}></i>
              )}
              <span>Need help?</span>
            </a>
            {canHelp && (
              <>
                {" "}
                <Link to="/forgot">
                  <a href="#" className={styleAccount.aHover}>
                    <span className={styleAccount.forgotPass}>
                      Forgot your password?
                    </span>
                  </a>
                </Link>
                <a href="#" className={styleAccount.aHover}>
                  <span>Other issues with Sign-In</span>
                </a>
              </>
            )}
          </p>
        </form>
      </div>
    </>
  );
};

export default EmailMain;
