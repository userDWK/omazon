import React, { useState } from "react";
import styleAccount from "../css/styleAccount.module.css";
import { authService } from "../fbase";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
// uuidv4()
const Forgot = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === "email") {
      setEmail(value);
    }
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    let data;
    data = authService
      .sendPasswordResetEmail(email)
      .then(() => {
        setErrorMsg("");
      })
      .catch((error) => {
        setErrorMsg(error.message);
      });
  };
  return (
    <>
      <div className={`${styleAccount.mainBox} ${styleAccount.createBox}`}>
        <h2>Password assistance</h2>
        <p>
          Enter the email address or mobile phone number associated with your
          Amazon account.
        </p>
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
            <p className={styleAccount.errorMsg}>{errorMsg}</p>
            <input
              type="submit"
              className={styleAccount.accountSub}
              value="continue"
            ></input>
          </form>
        </div>
      </div>
      <div className={styleAccount.hasEmail}>
        <h3>Has your email or mobile number changed?</h3>
        <p>
          if you no longer use email address associated with your Amazon
          account, you may contact <a href="#">Customer Service</a> for help
          restoring access to your account.
        </p>
      </div>
    </>
  );
};
export default Forgot;
