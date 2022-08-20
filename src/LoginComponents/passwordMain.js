import React, { useState } from "react";
import styleAccount from "../css/styleAccount.module.css";
import { authService } from "../fbase";

const PasswordMain = ({ email, password, setPassword }) => {
  const [errorMsg, setErrorMsg] = useState("");
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setPassword(value);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      let data = await authService.signInWithEmailAndPassword(email, password);
    } catch (error) {
      setErrorMsg(error.message);
    }
  };
  return (
    <>
      <h2>Sign-In</h2>
      <div className={styleAccount.emailControl}>
        {email} <a href="#">Change</a>
      </div>
      <div className={styleAccount.accountForm}>
        <form onSubmit={onSubmit}>
          <div className={styleAccount.forgotPass}>
            <p>Password</p>
            <a href="#">Forgot your password?</a>
          </div>
          <input
            type="password"
            onChange={onChange}
            className={styleAccount.accountText}
            value={password}
            name="password"
            placeholder="Input your password..."
            maxLength={15}
          />
          <input
            type="submit"
            className={` ${styleAccount.passwordSub} ${styleAccount.accountSub}`}
            value="Sign-In"
          ></input>
          <p className={styleAccount.errorMsg}>{errorMsg}</p>
          <div className={`${styleAccount.help} ${styleAccount.keepSign}`}>
            <div>
              <input type="checkbox" />
            </div>
            Keep me signed in.
            <a href="#">
              Details
              <i className={`${styleAccount.hIcon} ${styleAccount.keep}`}></i>
            </a>
          </div>
        </form>
      </div>
    </>
  );
};

export default PasswordMain;
